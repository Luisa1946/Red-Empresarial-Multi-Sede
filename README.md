# Herramienta de Diseño de Red Empresarial Multi-Sede

Esta herramienta interactiva basada en HTML y JavaScript ha sido diseñada para facilitar el diseño, la automatización y el troubleshooting de redes empresariales multi-sede. Incorpora funcionalidades clave para ingenieros de red, administradores de sistemas y estudiantes, permitiendo una gestión más eficiente de la infraestructura de red.

## 🚀 Funcionalidades Principales

### 1. Calculadora de Direccionamiento IP Dinámica (VLSM)

Una potente calculadora de subredes que permite generar un plan de direccionamiento IP completo y optimizado para redes multi-sede. Basada en los requisitos de hosts por sede, la herramienta calcula automáticamente:

-   **Red Base:** La dirección de red inicial para cada sede.
-   **Máscara de Subred:** La máscara de red adecuada para el número de hosts requerido.
-   **Gateway:** La dirección IP del gateway para cada subred.
-   **Broadcast:** La dirección de broadcast de cada subred.
-   **Hosts Disponibles:** El número total de hosts que pueden ser asignados en cada subred.
-   **Validación:** Compara los hosts disponibles con los hosts requeridos para asegurar una asignación eficiente.

**Uso:** Simplemente ingresa una IP base y un prefijo CIDR inicial en la pestaña "Plan IP", y la herramienta generará el direccionamiento completo para las sedes definidas.

### 2. Conexión Serial COM — Terminal Interactiva

Esta funcionalidad permite la conexión directa a equipos de red físicos (como routers y switches Cisco) a través de un puerto serial COM, utilizando la Web Serial API del navegador. Esto elimina la necesidad de software externo como PuTTY para configuraciones iniciales o troubleshooting en consola.

-   **Conexión Directa:** Establece una comunicación serial con el dispositivo.
-   **Selector de Baudios:** Permite elegir la velocidad de comunicación (9600 bps es el estándar para consolas Cisco).
-   **Terminal en Tiempo Real:** Muestra la salida del dispositivo y permite enviar comandos CLI.
-   **Historial de Comandos:** Navega entre comandos enviados previamente usando las flechas arriba/abajo.
-   **Comandos Rápidos:** Botones predefinidos para comandos comunes de verificación (`show ip interface brief`, `show vlan brief`, etc.).
-   **Envío de Configuraciones por Lotes:** Permite enviar múltiples comandos secuencialmente con un delay configurable, ideal para aplicar configuraciones completas de VLANs, OSPF, etc.

**Requisitos:**
-   Navegador compatible con Web Serial API (Chrome 89+, Edge 89+, Opera 75+).
-   Adaptador USB-Serial o cable de consola conectado al equipo de red.

### 3. Troubleshooting de Red

Una sección dedicada a la resolución de problemas comunes en redes empresariales. Incluye:

-   **Guías de Diagnóstico:** Pasos lógicos para identificar y resolver fallas.
-   **Comandos de Verificación:** Comandos CLI esenciales para el diagnóstico en diferentes capas del modelo OSI.
-   **Matriz de Errores Comunes:** Soluciones a problemas típicos relacionados con VLANs, Trunking, OSPF, etc.

### 4. Generación de Comandos CLI por Fabricante

La herramienta también proporciona bloques de comandos CLI pregenerados para diferentes fabricantes (Cisco, Huawei, Fortinet) y tipos de dispositivos (Core, Distribución, Acceso), facilitando el despliegue de configuraciones estándar para:

-   VLANs y Trunking
-   VTP (VLAN Trunking Protocol)
-   Spanning Tree Protocol (PVST+)
-   OSPF (Open Shortest Path First)
-   ACLs de seguridad

## 🛠️ Estructura del Proyecto

```
Red-Empresarial-Multi-Sede/
├── index.html                  # Archivo principal de la herramienta
├── js/
│   ├── calculadora_vlsm_corregida.js # Lógica de la calculadora IP
│   └── serial_com_controller.js  # Lógica de la conexión Serial COM
└── README.md                   # Este archivo
```

## 🚀 Cómo Empezar

1.  **Clonar el Repositorio:**
    ```bash
    git clone https://github.com/Luisa1946/Red-Empresarial-Multi-Sede.git
    ```
2.  **Abrir la Herramienta:**
    Navega a la carpeta clonada y abre `index.html` en un navegador compatible con Web Serial API (Chrome, Edge).

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras un error o tienes una sugerencia de mejora, por favor, abre un *issue* o envía un *pull request*.

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles. (Nota: El archivo LICENSE no está incluido en este momento, pero se recomienda añadirlo).

---

**Desarrollado por Manus AI**
