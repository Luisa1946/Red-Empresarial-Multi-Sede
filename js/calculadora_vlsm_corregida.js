// ===== FUNCIONES CORREGIDAS DE CÁLCULO DE SUBREDES VLSM =====

function ipToNumber(ip) {
  const parts = ip.split('.');
  if (parts.length !== 4) return null;
  return (parseInt(parts[0]) << 24) + (parseInt(parts[1]) << 16) + (parseInt(parts[2]) << 8) + parseInt(parts[3]);
}

function numberToIp(num) {
  return ((num >>> 24) & 255) + '.' + ((num >>> 16) & 255) + '.' + ((num >>> 8) & 255) + (num & 255);
}

function prefixToMask(prefix) {
  if (prefix < 0 || prefix > 32) return null;
  const mask = prefix === 0 ? 0 : (0xffffffff << (32 - prefix)) >>> 0;
  return numberToIp(mask);
}

function maskToPrefix(mask) {
  const maskNum = ipToNumber(mask);
  let prefix = 0;
  let testMask = 0x80000000;
  
  for (let i = 0; i < 32; i++) {
    if ((maskNum & testMask) === testMask) {
      prefix++;
      testMask = testMask >>> 1;
    } else {
      break;
    }
  }
  return prefix;
}

function getNetworkAddress(ip, prefix) {
  const ipNum = ipToNumber(ip);
  if (ipNum === null) return null;
  const mask = prefix === 0 ? 0 : (0xffffffff << (32 - prefix)) >>> 0;
  return numberToIp(ipNum & mask);
}

function getBroadcastAddress(ip, prefix) {
  const ipNum = ipToNumber(ip);
  if (ipNum === null) return null;
  const mask = prefix === 0 ? 0 : (0xffffffff << (32 - prefix)) >>> 0;
  const broadcast = (ipNum & mask) | (~mask >>> 0);
  return numberToIp(broadcast >>> 0);
}

function getHostsAvailable(prefix) {
  return Math.pow(2, 32 - prefix) - 2;
}

function calculateRequiredPrefix(hostsNeeded) {
  // Calcula el prefijo necesario para acomodar la cantidad de hosts
  for (let prefix = 30; prefix >= 0; prefix--) {
    if (getHostsAvailable(prefix) >= hostsNeeded) {
      return prefix;
    }
  }
  return 0;
}

function calculateNetworks() {
  const baseIpInput = document.getElementById('baseIpInput').value.trim();
  const prefixInput = parseInt(document.getElementById('prefixInput').value);

  if (!baseIpInput || isNaN(prefixInput)) {
    alert('Por favor ingresa una IP base válida y un prefijo numérico');
    return;
  }

  const baseIpNum = ipToNumber(baseIpInput);
  if (baseIpNum === null) {
    alert('IP base inválida. Formato esperado: 192.168.0.0');
    return;
  }

  if (prefixInput < 8 || prefixInput > 30) {
    alert('El prefijo debe estar entre /8 y /30');
    return;
  }

  // Configuración de sedes con hosts requeridos
  const sedesConfig = [
    { name: 'Sede 1 — Principal', hosts: 1600, color: '#00b0ff' },
    { name: 'Sede 2 — Sucursal A', hosts: 600, color: '#ff6d00' },
    { name: 'Sede 3 — Sucursal B', hosts: 400, color: '#7c4dff' },
    { name: 'Sede 4 — Secundaria', hosts: 800, color: '#00e676' }
  ];

  const sedesTableBody = document.getElementById('sedesTableBody');
  sedesTableBody.innerHTML = '';

  let currentNetworkNum = baseIpNum;
  let allValid = true;

  sedesConfig.forEach((sede, index) => {
    // Calcular el prefijo necesario para esta sede
    const requiredPrefix = calculateRequiredPrefix(sede.hosts);
    const hostsAvailable = getHostsAvailable(requiredPrefix);

    // Obtener dirección de red
    const networkIp = numberToIp(currentNetworkNum);
    const mask = prefixToMask(requiredPrefix);
    const gateway = numberToIp(currentNetworkNum + 1);
    const broadcast = getBroadcastAddress(networkIp, requiredPrefix);

    // Crear fila de la tabla
    const row = document.createElement('tr');
    
    // Validar si hay suficientes hosts
    const isValid = hostsAvailable >= sede.hosts;
    const statusColor = isValid ? '#00e676' : '#ff5252';
    const statusIcon = isValid ? '✓' : '✗';

    row.innerHTML = `
      <td><strong style="color:${sede.color};">${sede.name}</strong></td>
      <td><code style="background:rgba(0,0,0,0.3);padding:4px 8px;border-radius:4px;">${networkIp}</code></td>
      <td><code style="background:rgba(0,0,0,0.3);padding:4px 8px;border-radius:4px;">${mask}</code></td>
      <td>/${requiredPrefix}</td>
      <td><code style="background:rgba(0,0,0,0.3);padding:4px 8px;border-radius:4px;">${gateway}</code></td>
      <td><code style="background:rgba(0,0,0,0.3);padding:4px 8px;border-radius:4px;">${broadcast}</code></td>
      <td style="color:#00e676;font-weight:700;">${hostsAvailable}</td>
      <td style="color:${statusColor};font-weight:700;">${sede.hosts} ${statusIcon}</td>
    `;
    
    sedesTableBody.appendChild(row);

    // Avanzar a la siguiente red
    const subnetSize = Math.pow(2, 32 - requiredPrefix);
    currentNetworkNum += subnetSize;

    // Validar que no se salga del rango disponible
    if (currentNetworkNum > 0xffffffff) {
      allValid = false;
    }
  });

  // Mostrar advertencia si hay problemas
  if (!allValid) {
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-warn';
    alertDiv.style.marginTop = '15px';
    alertDiv.innerHTML = `
      <span>⚠️</span>
      <span><strong>Advertencia:</strong> El rango de IPs base es insuficiente para acomodar todas las sedes. Considera usar un prefijo más pequeño (ej: /15 en lugar de /16).</span>
    `;
    sedesTableBody.parentElement.parentElement.appendChild(alertDiv);
  }

  console.log('Cálculo completado exitosamente');
}

// Inicializar al cargar la página
window.addEventListener('load', function() {
  setTimeout(function() {
    calculateNetworks();
  }, 500);
});
