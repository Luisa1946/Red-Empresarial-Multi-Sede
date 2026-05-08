// ===== CONTROLADOR DE CONEXIÓN SERIAL COM =====
// Utiliza Web Serial API para comunicación directa con equipos Cisco

class SerialComController {
  constructor() {
    this.port = null;
    this.reader = null;
    this.writer = null;
    this.isConnected = false;
    this.commandHistory = [];
    this.historyIndex = -1;
  }

  // Verificar si el navegador soporta Web Serial API
  static isSupported() {
    return 'serial' in navigator;
  }

  // Conectar a puerto COM
  async connect(baudRate = 9600) {
    try {
      // Solicitar puerto COM al usuario
      this.port = await navigator.serial.requestPort();
      
      // Abrir puerto con configuración especificada
      await this.port.open({ baudRate: parseInt(baudRate) });
      
      this.isConnected = true;
      this.addLog(`✅ Conectado a ${this.port.getInfo().usbProductName || 'dispositivo'} a ${baudRate} bps`, 'success');
      
      // Iniciar lectura
      this.startReading();
      
      return true;
    } catch (error) {
      this.addLog(`❌ Error de conexión: ${error.message}`, 'error');
      return false;
    }
  }

  // Desconectar
  async disconnect() {
    try {
      if (this.reader) {
        this.reader.cancel();
        this.reader = null;
      }
      
      if (this.port) {
        await this.port.close();
        this.port = null;
      }
      
      this.isConnected = false;
      this.addLog('🔌 Desconectado del puerto COM', 'info');
      return true;
    } catch (error) {
      this.addLog(`❌ Error al desconectar: ${error.message}`, 'error');
      return false;
    }
  }

  // Iniciar lectura de datos
  async startReading() {
    try {
      const textDecoder = new TextDecoderStream();
      const readableStreamClosed = this.port.readable.pipeTo(textDecoder.writable);
      this.reader = textDecoder.readable.getReader();

      while (true) {
        const { value, done } = await this.reader.read();
        if (done) break;
        
        if (value) {
          this.addLog(value, 'received');
        }
      }
    } catch (error) {
      if (error.name !== 'AbortError') {
        this.addLog(`❌ Error en lectura: ${error.message}`, 'error');
      }
    }
  }

  // Enviar comando
  async sendCommand(command) {
    if (!this.isConnected || !this.port) {
      this.addLog('❌ No hay conexión activa', 'error');
      return false;
    }

    try {
      const writer = this.port.writable.getWriter();
      
      // Agregar Enter al final del comando
      const commandWithNewline = command + '\r\n';
      
      // Codificar y enviar
      const encoder = new TextEncoder();
      await writer.write(encoder.encode(commandWithNewline));
      
      writer.releaseLock();
      
      // Registrar en historial
      this.commandHistory.push(command);
      this.historyIndex = this.commandHistory.length;
      
      // Mostrar en log
      this.addLog(`📤 Enviado: ${command}`, 'sent');
      
      return true;
    } catch (error) {
      this.addLog(`❌ Error al enviar: ${error.message}`, 'error');
      return false;
    }
  }

  // Enviar múltiples comandos
  async sendCommandBatch(commands, delay = 1000) {
    for (const cmd of commands) {
      await this.sendCommand(cmd);
      // Esperar entre comandos
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }

  // Agregar mensaje al log
  addLog(message, type = 'info') {
    const logElement = document.getElementById('serialLog');
    if (!logElement) return;

    const timestamp = new Date().toLocaleTimeString();
    const logEntry = document.createElement('div');
    logEntry.className = `log-entry log-${type}`;
    
    let prefix = '';
    switch(type) {
      case 'sent': prefix = '📤'; break;
      case 'received': prefix = '📥'; break;
      case 'error': prefix = '❌'; break;
      case 'success': prefix = '✅'; break;
      case 'info': prefix = 'ℹ️'; break;
      default: prefix = '•';
    }
    
    logEntry.innerHTML = `<span class="log-time">[${timestamp}]</span> <span class="log-prefix">${prefix}</span> <span class="log-msg">${escapeHtml(message)}</span>`;
    logElement.appendChild(logEntry);
    logElement.scrollTop = logElement.scrollHeight;
  }

  // Limpiar log
  clearLog() {
    const logElement = document.getElementById('serialLog');
    if (logElement) {
      logElement.innerHTML = '';
    }
  }

  // Obtener comando anterior del historial
  getPreviousCommand() {
    if (this.historyIndex > 0) {
      this.historyIndex--;
      return this.commandHistory[this.historyIndex];
    }
    return '';
  }

  // Obtener comando siguiente del historial
  getNextCommand() {
    if (this.historyIndex < this.commandHistory.length - 1) {
      this.historyIndex++;
      return this.commandHistory[this.historyIndex];
    }
    this.historyIndex = this.commandHistory.length;
    return '';
  }
}

// Instancia global
let serialController = new SerialComController();

// Función auxiliar para escapar HTML
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

// ===== FUNCIONES DE INTERFAZ =====

async function connectSerial() {
  const baudRateSelect = document.getElementById('baudRateSelect');
  const baudRate = baudRateSelect ? baudRateSelect.value : '9600';
  
  const connectBtn = event.target;
  connectBtn.disabled = true;
  connectBtn.textContent = '⏳ Conectando...';
  
  const success = await serialController.connect(baudRate);
  
  if (success) {
    connectBtn.textContent = '🔌 Desconectar';
    connectBtn.onclick = disconnectSerial;
    connectBtn.style.background = 'rgba(255,93,82,0.2)';
    connectBtn.style.color = '#ff5252';
    document.getElementById('commandInput').disabled = false;
    document.getElementById('sendBtn').disabled = false;
  } else {
    connectBtn.disabled = false;
    connectBtn.textContent = '🔗 Conectar COM';
  }
}

async function disconnectSerial() {
  const connectBtn = document.querySelector('[onclick="connectSerial()"]') || event.target;
  connectBtn.disabled = true;
  
  const success = await serialController.disconnect();
  
  if (success) {
    connectBtn.textContent = '🔗 Conectar COM';
    connectBtn.onclick = connectSerial;
    connectBtn.style.background = 'rgba(0,176,255,0.2)';
    connectBtn.style.color = '#00b0ff';
    document.getElementById('commandInput').disabled = true;
    document.getElementById('sendBtn').disabled = true;
  }
  connectBtn.disabled = false;
}

async function sendSerialCommand() {
  const input = document.getElementById('commandInput');
  const command = input.value.trim();
  
  if (!command) return;
  
  await serialController.sendCommand(command);
  input.value = '';
  input.focus();
}

function handleCommandInputKeydown(event) {
  if (event.key === 'Enter') {
    sendSerialCommand();
  } else if (event.key === 'ArrowUp') {
    event.preventDefault();
    const cmd = serialController.getPreviousCommand();
    document.getElementById('commandInput').value = cmd;
  } else if (event.key === 'ArrowDown') {
    event.preventDefault();
    const cmd = serialController.getNextCommand();
    document.getElementById('commandInput').value = cmd;
  }
}

function clearSerialLog() {
  if (confirm('¿Estás seguro de que quieres limpiar el historial?')) {
    serialController.clearLog();
  }
}

async function sendCommandBatch(commands) {
  if (!serialController.isConnected) {
    serialController.addLog('❌ No hay conexión activa', 'error');
    return;
  }
  
  const delay = prompt('Ingresa el delay entre comandos (ms):', '1000');
  if (delay === null) return;
  
  await serialController.sendCommandBatch(commands, parseInt(delay));
}

// Funciones para enviar configuraciones predefinidas
async function sendCiscoBasicConfig() {
  const commands = [
    'enable',
    'configure terminal',
    'hostname Dist-SW1-Sede1',
    'no ip domain-lookup',
    'service password-encryption',
    'enable secret cisco123',
    'line vty 0 4',
    'password cisco123',
    'login',
    'exit',
    'exit',
    'write memory'
  ];
  
  await sendCommandBatch(commands);
}

async function sendVLANConfig() {
  const commands = [
    'enable',
    'configure terminal',
    'vlan 10',
    'name ADMIN',
    'vlan 20',
    'name DATOS',
    'vlan 30',
    'name VOZ',
    'vlan 40',
    'name SERVIDORES',
    'vlan 50',
    'name WIFI',
    'exit',
    'write memory'
  ];
  
  await sendCommandBatch(commands);
}

async function sendOSPFConfig() {
  const commands = [
    'enable',
    'configure terminal',
    'router ospf 1',
    'network 10.10.0.0 0.0.7.255 area 0',
    'network 10.20.0.0 0.0.3.255 area 1',
    'network 10.30.0.0 0.0.1.255 area 2',
    'network 10.40.0.0 0.0.3.255 area 3',
    'exit',
    'write memory'
  ];
  
  await sendCommandBatch(commands);
}

// Verificar soporte al cargar
window.addEventListener('load', function() {
  if (!SerialComController.isSupported()) {
    const alert = document.querySelector('[id="tab-serial"] .alert-warn');
    if (alert) {
      alert.innerHTML = `
        <span>⚠️</span>
        <span><strong>Web Serial API no soportada:</strong> Tu navegador no soporta Web Serial API. Usa Chrome, Edge o un navegador basado en Chromium versión 89+.</span>
      `;
    }
  }
});
