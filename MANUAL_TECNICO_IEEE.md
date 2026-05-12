# Manual Técnico: Herramienta de Diseño de Red Empresarial Multi-Sede v8

**Versión:** 8.0  
**Fecha de Publicación:** Mayo 2026  
**Autor:** Equipo de Ingeniería de Telecomunicaciones  
**Clasificación:** Documentación Técnica - Nivel Principiante a Intermedio  
**Idioma:** Español (Latinoamérica)

---

## 1. Introducción

### 1.1 Propósito del Documento

Este manual técnico proporciona una guía completa y estructurada para que técnicos de redes con nivel principiante a intermedio comprendan, utilicen y dominen la **Herramienta de Diseño de Red Empresarial Multi-Sede v8** (en adelante, "la herramienta"). El documento sigue los estándares de documentación técnica IEEE 1063-2001 para garantizar claridad, precisión y accesibilidad.

### 1.2 Alcance

La herramienta v8 es una aplicación web interactiva que permite diseñar, configurar y automatizar redes empresariales complejas con múltiples sedes. Su alcance incluye:

- Diseño de arquitecturas de red jerárquicas (Core-Distribución-Acceso)
- Configuración de VLANs y segmentación lógica
- Cálculo automático de direccionamiento IP mediante VLSM (Variable Length Subnet Masking)
- Generación de comandos CLI para equipos Cisco, Huawei y Fortinet
- Conexión serial directa a equipos físicos
- Troubleshooting y diagnóstico de fallas

### 1.3 Audiencia Objetivo

Este manual está dirigido a:

- Técnicos de redes con experiencia básica en configuración de switches y routers
- Estudiantes de ingeniería en telecomunicaciones
- Profesionales en transición hacia roles de diseño de infraestructura
- Administradores de red que requieren automatización

Se asume que el lector posee conocimientos fundamentales en:

- Protocolos TCP/IP y direccionamiento IPv4
- Conceptos básicos de VLANs (IEEE 802.1Q)
- Enrutamiento dinámico (OSPF)
- Seguridad de redes (ACLs, firewalls)

---

## 2. Descripción General de la Herramienta

### 2.1 Características Principales

La herramienta v8 integra múltiples funcionalidades en una interfaz unificada:

| **Funcionalidad** | **Descripción** | **Beneficio** |
|---|---|---|
| **Configuración Dinámica** | Edita sedes, VLANs y parámetros en tiempo real | Adaptabilidad a cambios de requisitos |
| **Calculadora VLSM** | Calcula automáticamente subredes y direccionamiento | Elimina errores manuales de cálculo |
| **Generador de Comandos CLI** | Produce comandos listos para consola | Acelera el despliegue en equipos |
| **Conexión Serial COM** | Conecta directamente a equipos físicos | Automatiza la configuración remota |
| **Troubleshooting** | Guía de diagnóstico por capas OSI | Reduce tiempo de resolución de problemas |
| **Exportación de Datos** | Descarga configuraciones en múltiples formatos | Facilita documentación y respaldo |

### 2.2 Arquitectura de la Herramienta

La herramienta utiliza una arquitectura modular basada en HTML5, CSS3 y JavaScript puro. No requiere instalación de servidores ni dependencias externas complejas. Su estructura se organiza en las siguientes capas:

```
┌─────────────────────────────────────┐
│     INTERFAZ DE USUARIO (UI)        │
│  (Pestañas, Formularios, Gráficos)  │
├─────────────────────────────────────┤
│    LÓGICA DE NEGOCIO (JavaScript)   │
│  (Cálculos, Validaciones, Eventos)  │
├─────────────────────────────────────┤
│     ALMACENAMIENTO LOCAL            │
│  (localStorage, sessionStorage)     │
├─────────────────────────────────────┤
│   COMUNICACIÓN SERIAL (Web API)     │
│  (Conexión COM, Envío de comandos)  │
└─────────────────────────────────────┘
```

---

## 3. Guía de Inicio Rápido

### 3.1 Requisitos del Sistema

**Hardware Mínimo:**
- Procesador: Intel Core i5 o equivalente
- RAM: 4 GB
- Almacenamiento: 100 MB de espacio libre
- Conexión de red: Para acceder a la herramienta en línea

**Software Requerido:**
- Navegador web moderno: Chrome 90+, Firefox 88+, Edge 89+, Safari 14+
- Sistema operativo: Windows 10/11, macOS 10.15+, Linux (cualquier distribución)
- Para conexión serial: Puerto COM disponible o adaptador USB-Serial

### 3.2 Acceso a la Herramienta

**Opción 1: Descarga Local**
1. Descarga el archivo `herramienta_red_v8_final.html` desde el repositorio GitHub
2. Guarda el archivo en una carpeta accesible (ej: `C:\Herramientas\Red`)
3. Abre el archivo con tu navegador web (doble clic o arrastra a la ventana del navegador)

**Opción 2: Acceso en Línea**
1. Visita el repositorio GitHub: https://github.com/Luisa1946/Red-Empresarial-Multi-Sede
2. Descarga el archivo HTML directamente
3. Abre en tu navegador

### 3.3 Primera Sesión: Configuración Inicial

**Paso 1: Familiarización con la Interfaz**

Al abrir la herramienta, verás la siguiente estructura:

- **Encabezado (Header):** Logo, título y badges informativos
- **Navegación Principal:** Pestañas con las diferentes funcionalidades
- **Área de Contenido:** Donde se despliegan los formularios y resultados
- **Pie de Página:** Enlaces y información adicional

**Paso 2: Navegar a la Pestaña "Configuración"**

1. Haz clic en la pestaña **⚙️ Configuración** en el menú superior
2. Verás dos secciones principales:
   - **Sedes Configuradas:** Lista de ubicaciones de tu red
   - **VLANs Configuradas:** Segmentos lógicos de tu red

**Paso 3: Editar Sedes**

Las sedes predeterminadas son:

| **Sede** | **Hosts** | **Red** |
|---|---|---|
| Sede 1 (Principal) | 1,600 | 10.10.0.0/21 |
| Sede 2 (Sucursal A) | 600 | 10.20.0.0/22 |
| Sede 3 (Sucursal B) | 400 | 10.30.0.0/23 |
| Sede 4 (Secundaria) | 800 | 10.40.0.0/22 |

Para modificar una sede:

1. Localiza la tarjeta de la sede que deseas editar
2. Haz clic en el campo de texto del nombre y cámbialo (ej: "Oficina Central" en lugar de "Sede 1")
3. Modifica el número de hosts si es necesario
4. Los cambios se reflejan automáticamente en toda la herramienta

**Paso 4: Editar VLANs**

Las VLANs predeterminadas incluyen:

| **ID** | **Nombre** | **Propósito** |
|---|---|---|
| 10 | ADMIN | Administración de equipos |
| 20 | DATOS | Tráfico de datos corporativo |
| 30 | VOZ | Telefonía IP |
| 40 | SERVIDORES | Servidores de aplicación |
| 50 | WIFI | Acceso inalámbrico |
| 60 | SEGURIDAD | Cámaras y sistemas de seguridad |
| 70 | GESTION | Gestión de red (SNMP, Syslog) |
| 80 | IOT | Dispositivos IoT |
| 90 | INVITADOS | Red de invitados aislada |

Para agregar una nueva VLAN:

1. Haz clic en el botón **+ Agregar VLAN**
2. Ingresa el ID (debe ser único, entre 1 y 4094)
3. Ingresa el nombre descriptivo
4. Haz clic en **Guardar**

---

## 4. Funcionalidades Principales

### 4.1 Pestaña "Resumen"

La pestaña **Resumen** proporciona una vista general de tu diseño de red con estadísticas clave.

**Elementos Principales:**

- **Tarjetas de Estadísticas:** Muestran el número de sedes, hosts totales, VLANs y protocolo de enrutamiento
- **Gráfico de Distribución:** Visualiza la proporción de hosts por sede
- **Tecnologías Implementadas:** Lista de componentes clave (VLANs, OSPF, Firewall, WiFi)

**Interpretación de Datos:**

La tarjeta de "Distribución de Hosts por Sede" utiliza gráficos de barras para mostrar el porcentaje de carga en cada ubicación. Esto es útil para:

- Identificar sedes con mayor demanda de ancho de banda
- Planificar redundancia en sedes críticas
- Distribuir recursos de forma equilibrada

### 4.2 Pestaña "Sedes"

Esta pestaña permite gestionar todas las ubicaciones de tu red de forma centralizada.

**Operaciones Disponibles:**

| **Operación** | **Pasos** | **Resultado** |
|---|---|---|
| **Agregar Sede** | Clic en "➕ Agregar Sede" | Nueva tarjeta de sede con valores por defecto |
| **Editar Sede** | Modifica campos de texto | Cambios reflejados en tiempo real |
| **Guardar** | Clic en "💾 Guardar" | Datos persistidos en localStorage |
| **Exportar** | Clic en "📥 Exportar JSON" | Descarga archivo de configuración |
| **Resetear** | Clic en "🔄 Resetear" | Restaura valores predeterminados |

**Ejemplo Práctico:**

Supongamos que deseas agregar una nueva sucursal:

1. Navega a la pestaña **🏢 Sedes**
2. Haz clic en **➕ Agregar Sede**
3. Aparecerá una nueva tarjeta con campos vacíos
4. Ingresa:
   - Nombre: "Sede 5 - Filial Monterrey"
   - Hosts: 500
5. Haz clic en **💾 Guardar**
6. La nueva sede se agregará automáticamente a todos los cálculos

### 4.3 Pestaña "VLANs"

Gestión centralizada de segmentación lógica de la red.

**Conceptos Clave:**

Una VLAN (Virtual LAN) es un grupo lógico de dispositivos que pueden comunicarse como si estuvieran en la misma red física, aunque estén conectados a diferentes switches. Esto permite:

- **Segmentación:** Separar tráfico de diferentes departamentos
- **Seguridad:** Aislar tráfico sensible (administración, servidores)
- **Eficiencia:** Reducir dominios de broadcast
- **Flexibilidad:** Reorganizar redes sin cambios físicos

**Tabla de VLANs Recomendadas:**

| **VLAN** | **Nombre** | **Dispositivos** | **Máscara** | **Justificación** |
|---|---|---|---|---|
| 10 | ADMIN | Switches, Routers, Firewalls | /29 | Acceso administrativo restringido |
| 20 | DATOS | PCs, Laptops, Impresoras | /22 | Tráfico corporativo principal |
| 30 | VOZ | Teléfonos IP, Gateways | /24 | Requiere QoS y baja latencia |
| 40 | SERVIDORES | Servidores de aplicación | /24 | Acceso controlado, backup |
| 50 | WIFI | Puntos de acceso, Clientes | /22 | Movilidad, mayor ancho de banda |
| 60 | SEGURIDAD | Cámaras, Sistemas de alarma | /25 | Tráfico de video, aislado |
| 70 | GESTION | Servidores SNMP, Syslog | /28 | Monitoreo centralizado |
| 80 | IOT | Sensores, Dispositivos inteligentes | /25 | Tráfico no crítico, aislado |
| 90 | INVITADOS | Clientes temporales | /24 | Acceso limitado, sin acceso interno |

### 4.4 Pestaña "Plan IP"

Cálculo automático del direccionamiento IP utilizando VLSM.

**¿Qué es VLSM?**

VLSM (Variable Length Subnet Masking) es una técnica que permite usar diferentes máscaras de subred en la misma red. Esto optimiza el uso del espacio de direcciones IP.

**Proceso de Cálculo:**

1. Ingresa la **IP Base** (ej: 10.10.0.0)
2. Ingresa el **Prefijo CIDR** (ej: 16)
3. Haz clic en **🧮 Calcular Direccionamiento**
4. La herramienta calcula automáticamente:
   - Subred para cada sede
   - Máscara de subred
   - Dirección de gateway
   - Dirección de broadcast
   - Rango de hosts disponibles

**Ejemplo de Cálculo:**

```
IP Base: 10.10.0.0/16
Prefijo: 16

Resultado:
├─ Sede 1: 10.10.0.0/21 (2,048 hosts)
├─ Sede 2: 10.20.0.0/22 (1,024 hosts)
├─ Sede 3: 10.30.0.0/23 (512 hosts)
└─ Sede 4: 10.40.0.0/22 (1,024 hosts)
```

**Tabla de Referencia VLSM:**

| **Prefijo** | **Máscara** | **Hosts Disponibles** | **Uso** |
|---|---|---|---|
| /30 | 255.255.255.252 | 2 | Enlaces punto a punto |
| /29 | 255.255.255.248 | 6 | Pequeños segmentos |
| /28 | 255.255.255.240 | 14 | Gestión, SNMP |
| /27 | 255.255.255.224 | 30 | Departamentos pequeños |
| /26 | 255.255.255.192 | 62 | Departamentos medianos |
| /25 | 255.255.255.128 | 126 | Departamentos grandes |
| /24 | 255.255.255.0 | 254 | Sede pequeña |
| /23 | 255.255.254.0 | 510 | Sede mediana |
| /22 | 255.255.252.0 | 1,022 | Sede grande |
| /21 | 255.255.248.0 | 2,046 | Sede principal |

### 4.5 Pestaña "Dispositivos"

Inventario de equipos de red por sede y capa.

**Capas de la Red:**

La arquitectura jerárquica se divide en tres capas:

1. **Capa Core (Núcleo):** Routers principales que interconectan sedes
   - Equipos: Cisco Catalyst 6800, Huawei NE8000
   - Función: Enrutamiento de alto rendimiento, OSPF

2. **Capa de Distribución:** Switches que agregan tráfico de acceso
   - Equipos: Cisco Catalyst 9300, Huawei S6720
   - Función: Agregación, filtrado, redundancia

3. **Capa de Acceso:** Switches que conectan usuarios finales
   - Equipos: Cisco Catalyst 2960X, Huawei S5720
   - Función: Conectividad de usuarios, control de VLAN

**Tabla de Dispositivos Recomendados:**

| **Capa** | **Fabricante** | **Modelo** | **Puertos** | **Características** |
|---|---|---|---|---|
| **Core** | Cisco | Catalyst 6800 | 48-96 | Redundancia, OSPF, QoS |
| **Core** | Huawei | NE8000 | 48-96 | Rendimiento, escalabilidad |
| **Distribución** | Cisco | Catalyst 9300 | 24-48 | PoE, Seguridad, Análisis |
| **Distribución** | Huawei | S6720 | 24-48 | Virtualización, Eficiencia |
| **Acceso** | Cisco | Catalyst 2960X | 24-48 | PoE, Económico, Confiable |
| **Acceso** | Huawei | S5720 | 24-48 | PoE, Gestión centralizada |

### 4.6 Pestaña "Comandos"

Generación automática de comandos CLI para configuración de equipos.

**Flujo de Trabajo:**

1. Selecciona el **Fabricante** (Cisco, Huawei, Fortinet)
2. Selecciona el **Tipo de Configuración**:
   - Configuración Básica (hostname, enable secret, SSH)
   - VLANs (creación de todas las VLANs)
   - Trunking (configuración de enlaces troncales)
   - OSPF (enrutamiento dinámico)
   - ACLs (listas de control de acceso)
   - SSH (acceso remoto seguro)

3. Los comandos se generan automáticamente
4. Haz clic en **📋 Copiar** para copiar al portapapeles
5. Abre una sesión SSH o Serial COM al equipo
6. Pega los comandos en la consola

**Ejemplo: Configuración Básica Cisco**

```
enable
configure terminal
hostname ROUTER-SEDE-1
enable secret 5 $1$mERr$hx5rVt7rPNoS4wqbXKX7m0
ip domain-name empresa.local
line vty 0 4
 password 7 070C285F4D06
 login
exit
exit
write memory
end
```

**Explicación Línea por Línea:**

| **Comando** | **Función** |
|---|---|
| `enable` | Entra en modo privilegiado |
| `configure terminal` | Entra en modo de configuración global |
| `hostname ROUTER-SEDE-1` | Asigna nombre al dispositivo |
| `enable secret` | Contraseña encriptada para acceso privilegiado |
| `ip domain-name` | Nombre de dominio para resolución DNS |
| `line vty 0 4` | Configura líneas de acceso remoto (SSH/Telnet) |
| `password` | Contraseña para acceso remoto |
| `login` | Habilita autenticación |
| `write memory` | Guarda la configuración en memoria no volátil |

### 4.7 Pestaña "Serial COM"

Conexión directa a equipos físicos mediante puerto serial.

**Requisitos Previos:**

- Navegador moderno con soporte para Web Serial API (Chrome 89+, Edge 89+)
- Cable serial USB (adaptador USB-Serial)
- Conocimiento del puerto COM del adaptador (ej: COM3, COM4)
- Velocidad de baudios correcta (típicamente 9600 para Cisco)

**Procedimiento de Conexión:**

1. Conecta el cable USB-Serial al equipo de red
2. Identifica el puerto COM en el Administrador de dispositivos (Windows)
3. En la herramienta, ve a la pestaña **🔌 Serial COM**
4. Selecciona la velocidad de baudios (9600 para Cisco)
5. Haz clic en **🔗 Conectar COM**
6. Selecciona el puerto COM en la ventana emergente
7. Verás el mensaje "[✅] Conexión serial establecida"

**Envío de Comandos:**

Una vez conectado, puedes:

- **Escribir comandos individuales:** Escribe en el campo de entrada y presiona Enter
- **Enviar bloques de configuración:** Copia y pega múltiples comandos
- **Ver respuestas en tiempo real:** El terminal muestra la salida del equipo

**Ejemplo de Sesión Serial:**

```
[✅] Conexión serial establecida
> enable
Password: *****
> configure terminal
Enter configuration commands, one per line. End with CNTL/Z.
(config)> hostname ROUTER-SEDE-1
(config)> exit
> write memory
Building configuration...
[OK]
```

---

## 5. Procedimientos Operacionales

### 5.1 Diseño de una Red Multi-Sede desde Cero

**Objetivo:** Diseñar una red para una empresa con 3 sedes

**Paso 1: Recopilar Requisitos**

Antes de usar la herramienta, documenta:

- Número de sedes y ubicación geográfica
- Cantidad de usuarios por sede
- Aplicaciones críticas (ERP, VoIP, Videoconferencia)
- Requisitos de seguridad
- Presupuesto disponible

**Paso 2: Configurar Sedes**

1. Abre la herramienta
2. Ve a **⚙️ Configuración**
3. Edita o agrega sedes:
   - Sede A (Oficina Principal): 800 hosts
   - Sede B (Sucursal 1): 300 hosts
   - Sede C (Sucursal 2): 200 hosts

**Paso 3: Definir VLANs**

1. Ve a **🔖 VLANs**
2. Mantén las VLANs estándar o personaliza según necesidades:
   - VLAN 10: ADMIN
   - VLAN 20: DATOS
   - VLAN 30: VOZ
   - VLAN 40: SERVIDORES

**Paso 4: Calcular Direccionamiento**

1. Ve a **🔢 Plan IP**
2. Ingresa IP Base: 172.16.0.0
3. Ingresa Prefijo: 14
4. Haz clic en **🧮 Calcular**
5. Revisa el resultado y ajusta si es necesario

**Paso 5: Generar Comandos**

1. Ve a **⌨️ Comandos**
2. Selecciona Fabricante: Cisco
3. Selecciona Tipo: Configuración Básica
4. Copia los comandos

**Paso 6: Desplegar en Equipos**

1. Abre sesión SSH o Serial COM a cada equipo
2. Pega los comandos
3. Verifica la configuración con comandos de validación

### 5.2 Validación de Configuración

**Comandos de Verificación (Cisco):**

```bash
# Verificar configuración de VLANs
show vlan brief

# Verificar interfaces y VLANs asignadas
show interface switchport

# Verificar enrutamiento OSPF
show ip ospf neighbor
show ip route ospf

# Verificar conectividad
ping 10.10.0.1
traceroute 10.20.0.1

# Verificar ACLs
show access-lists

# Verificar SSH
show ip ssh
```

**Interpretación de Resultados:**

| **Comando** | **Resultado Esperado** | **Problema si** |
|---|---|---|
| `show vlan brief` | Todas las VLANs listadas | Faltan VLANs o nombres incorrectos |
| `show ip ospf neighbor` | Vecinos OSPF activos | No hay vecinos (enlace caído) |
| `ping` | Respuestas recibidas (0% pérdida) | Pérdida de paquetes (problema de conectividad) |
| `show access-lists` | ACLs con reglas correctas | Reglas faltantes o incorrectas |

### 5.3 Troubleshooting Básico

**Problema 1: Los equipos de diferentes sedes no pueden comunicarse**

**Diagnóstico:**

1. Verifica que OSPF esté activo en todos los routers
2. Comprueba que los vecinos OSPF estén establecidos
3. Revisa que las rutas estén presentes en la tabla de enrutamiento
4. Verifica que no haya ACLs bloqueando el tráfico

**Solución:**

```bash
# En el router
show ip ospf neighbor
show ip route ospf

# Si no hay vecinos, revisa la configuración OSPF
show running-config | include ospf

# Si hay rutas, pero no hay conectividad, revisa ACLs
show access-lists
```

**Problema 2: Los usuarios no pueden acceder a servidores en otra VLAN**

**Diagnóstico:**

1. Verifica que el SVI (interfaz virtual) de la VLAN esté configurado
2. Comprueba que el gateway por defecto esté correcto
3. Revisa que no haya ACLs bloqueando inter-VLAN

**Solución:**

```bash
# Verificar SVIs
show interface vlan 20
show ip interface brief

# Verificar inter-VLAN routing
show ip route

# Si no hay ruta, configura el SVI
configure terminal
interface vlan 20
 ip address 10.20.0.1 255.255.252.0
 no shutdown
exit
```

**Problema 3: Conexión serial no funciona**

**Diagnóstico:**

1. Verifica que el cable USB esté conectado
2. Comprueba el puerto COM en Administrador de dispositivos
3. Verifica que la velocidad de baudios sea correcta
4. Revisa que el navegador sea compatible (Chrome/Edge)

**Solución:**

```
1. Desconecta y reconecta el cable USB
2. Abre Administrador de dispositivos (Windows)
3. Busca "Puertos (COM y LPT)"
4. Identifica el puerto COM del adaptador
5. En la herramienta, selecciona ese puerto
6. Verifica que la velocidad sea 9600 bps
```

---

## 6. Mejores Prácticas

### 6.1 Seguridad de Red

**Principios Fundamentales:**

1. **Segmentación:** Usa VLANs para separar tráfico por departamento
2. **Acceso Restringido:** Implementa ACLs para controlar flujo de tráfico
3. **Autenticación:** Requiere contraseñas fuertes para acceso administrativo
4. **Encriptación:** Usa SSH en lugar de Telnet para acceso remoto
5. **Monitoreo:** Implementa SNMP y Syslog para auditoría

**Configuración de Seguridad Recomendada:**

```
# ACL para proteger administración
access-list 10 permit 10.10.0.0 0.0.7.255
access-list 10 deny any

# Aplicar a líneas VTY
line vty 0 4
 access-class 10 in
 transport input ssh
```

### 6.2 Redundancia y Alta Disponibilidad

**Técnicas Recomendadas:**

1. **Spanning Tree Protocol (STP):** Previene bucles en la red
2. **OSPF Multi-área:** Distribuye carga de enrutamiento
3. **Redundancia de Enlace:** Usa EtherChannel para agregar ancho de banda
4. **Redundancia de Dispositivos:** Duplica equipos críticos (Core, Distribución)

**Configuración de EtherChannel (Cisco):**

```
interface range GigabitEthernet1/0/1-2
 channel-group 1 mode active
 no shutdown
exit

interface Port-channel 1
 switchport mode trunk
 switchport trunk allowed vlan all
```

### 6.3 Documentación

**Elementos Esenciales:**

1. **Diagrama de Topología:** Muestra conexiones físicas
2. **Tabla de Direccionamiento:** Documenta IPs por VLAN
3. **Tabla de VLANs:** Lista todas las VLANs y su propósito
4. **Configuración de Equipos:** Guarda running-config de cada dispositivo
5. **Registro de Cambios:** Documenta modificaciones y fechas

**Exportar Configuración:**

```bash
# Desde la herramienta
1. Ve a ⚙️ Configuración
2. Haz clic en 📥 Exportar JSON
3. Guarda el archivo con nombre descriptivo
4. Almacena en repositorio de control de versiones (Git)
```

---

## 7. Referencia de Comandos

### 7.1 Comandos Cisco Comunes

| **Comando** | **Función** | **Ejemplo** |
|---|---|---|
| `show version` | Muestra versión de IOS | `show version` |
| `show running-config` | Muestra configuración actual | `show running-config` |
| `show vlan brief` | Lista todas las VLANs | `show vlan brief` |
| `show interface status` | Estado de interfaces | `show interface status` |
| `show ip route` | Tabla de enrutamiento | `show ip route` |
| `show ip ospf neighbor` | Vecinos OSPF | `show ip ospf neighbor` |
| `ping` | Prueba conectividad | `ping 10.10.0.1` |
| `traceroute` | Traza ruta a destino | `traceroute 10.20.0.1` |
| `configure terminal` | Entra en config global | `configure terminal` |
| `write memory` | Guarda configuración | `write memory` |

### 7.2 Comandos Huawei Comunes

| **Comando** | **Función** | **Ejemplo** |
|---|---|---|
| `display version` | Muestra versión de VRP | `display version` |
| `display current-configuration` | Muestra config actual | `display current-configuration` |
| `display vlan` | Lista VLANs | `display vlan` |
| `display interface brief` | Estado de interfaces | `display interface brief` |
| `display ip routing-table` | Tabla de enrutamiento | `display ip routing-table` |
| `display ospf peer` | Vecinos OSPF | `display ospf peer` |
| `ping` | Prueba conectividad | `ping 10.10.0.1` |
| `tracert` | Traza ruta a destino | `tracert 10.20.0.1` |
| `system-view` | Entra en config global | `system-view` |
| `save` | Guarda configuración | `save` |

---

## 8. Solución de Problemas Avanzada

### 8.1 Matriz de Diagnóstico OSI

Cuando un problema de red ocurra, diagnostica por capas:

| **Capa** | **Problema** | **Herramientas** | **Solución** |
|---|---|---|---|
| **1 (Física)** | Cable desconectado, puerto caído | `show interface status` | Reconectar cable, reemplazar puerto |
| **2 (Enlace)** | STP bloqueando puerto, VLAN incorrecta | `show spanning-tree`, `show vlan` | Ajustar prioridades STP, asignar VLAN |
| **3 (Red)** | Ruta no existe, ACL bloqueando | `show ip route`, `show access-lists` | Agregar ruta, modificar ACL |
| **4 (Transporte)** | Puerto cerrado, firewall bloqueando | `netstat`, `show access-lists` | Abrir puerto, permitir en firewall |
| **7 (Aplicación)** | Servicio no responde | `telnet`, `ssh` | Reiniciar servicio, revisar logs |

### 8.2 Comandos de Diagnóstico Avanzado

**Captura de Tráfico (Cisco):**

```bash
# Habilitar SPAN (Switch Port Analyzer)
configure terminal
monitor session 1 source interface GigabitEthernet1/0/1
monitor session 1 destination interface GigabitEthernet1/0/2
exit

# Ahora el tráfico de G1/0/1 se copia a G1/0/2
# Conecta un analizador de protocolos a G1/0/2
```

**Análisis de Logs:**

```bash
# Ver últimos eventos
show log

# Filtrar por tipo
show log | include ERROR

# Guardar en archivo
show running-config > config_backup.txt
```

---

## 9. Preguntas Frecuentes (FAQ)

### P1: ¿Puedo usar la herramienta sin conexión a Internet?

**R:** Sí. Descarga el archivo HTML y ábrelo localmente en tu navegador. Todas las funciones funcionan sin conexión (excepto la conexión serial COM, que requiere hardware).

### P2: ¿Qué navegador recomiendan?

**R:** Chrome 90+ o Edge 89+ son recomendados. Firefox y Safari también funcionan, pero la conexión serial COM requiere Chrome o Edge.

### P3: ¿Puedo exportar la configuración?

**R:** Sí. En la pestaña **⚙️ Configuración**, haz clic en **📥 Exportar JSON**. Esto descarga un archivo con toda tu configuración.

### P4: ¿Cómo reseteo a valores por defecto?

**R:** En la pestaña **⚙️ Configuración**, haz clic en **🔄 Resetear**. Confirma en el diálogo emergente.

### P5: ¿Soporta otras marcas de equipos?

**R:** Actualmente soporta Cisco, Huawei y Fortinet. Otras marcas pueden agregarse en futuras versiones.

---

## 10. Glosario de Términos

| **Término** | **Definición** |
|---|---|
| **ACL** | Lista de Control de Acceso - Reglas que permiten o deniegan tráfico |
| **VLAN** | Red de Área Local Virtual - Segmentación lógica de una red |
| **OSPF** | Open Shortest Path First - Protocolo de enrutamiento dinámico |
| **SVI** | Interfaz Virtual de Switch - Interfaz lógica para inter-VLAN routing |
| **VLSM** | Variable Length Subnet Masking - Técnica de subneteo flexible |
| **STP** | Spanning Tree Protocol - Protocolo para prevenir bucles |
| **SSH** | Secure Shell - Protocolo de acceso remoto seguro |
| **QoS** | Calidad de Servicio - Priorización de tráfico |
| **PoE** | Power over Ethernet - Alimentación por cable Ethernet |
| **Backbone** | Red troncal que interconecta redes secundarias |

---

## 11. Referencias y Recursos Adicionales

### 11.1 Documentación Oficial

- **Cisco IOS Command Reference:** https://www.cisco.com/c/en/us/support/ios-nx-os-software/index.html
- **Huawei VRP Documentation:** https://support.huawei.com/
- **Fortinet FortiGate Documentation:** https://docs.fortinet.com/

### 11.2 Estándares IEEE

- **IEEE 802.1Q:** Estándar para VLANs
- **IEEE 802.1D:** Estándar para Spanning Tree Protocol
- **IEEE 1063-2001:** Estándar para documentación técnica

### 11.3 Tutoriales en Línea

- **Cisco Learning Network:** https://learningnetwork.cisco.com/
- **Huawei Training:** https://e-learning.huawei.com/
- **Fortinet Training Institute:** https://training.fortinet.com/

---

## 12. Historial de Cambios

| **Versión** | **Fecha** | **Cambios** |
|---|---|---|
| 1.0 | Mayo 2026 | Versión inicial del manual |
| 1.1 | Mayo 2026 | Agregadas secciones de troubleshooting avanzado |
| 1.2 | Mayo 2026 | Actualizado con ejemplos prácticos |

---

## 13. Información de Contacto y Soporte

**Repositorio GitHub:**  
https://github.com/Luisa1946/Red-Empresarial-Multi-Sede

**Reportar Problemas:**  
Abre un "Issue" en el repositorio GitHub con descripción detallada del problema

**Sugerencias de Mejora:**  
Envía sugerencias a través de "Discussions" en GitHub

---

**Documento Preparado por:** Equipo de Ingeniería de Telecomunicaciones  
**Última Actualización:** Mayo 12, 2026  
**Clasificación:** Documentación Técnica Pública  
**Licencia:** Creative Commons Attribution 4.0 International

---

*Este manual sigue los estándares IEEE 1063-2001 para documentación técnica y está diseñado para técnicos de nivel principiante a intermedio. Se recomienda revisar regularmente para actualizaciones y mejoras.*
