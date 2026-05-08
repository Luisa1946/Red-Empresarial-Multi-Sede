# 🌐 Herramienta de Ingeniería de Red Empresarial Multi-Sede

Esta plataforma es el resultado de un proceso iterativo de ingeniería de software aplicado a la administración de redes. Lo que comenzó como un visualizador de comandos estáticos evolucionó hasta convertirse en una terminal de gestión de infraestructura en tiempo real.

---

## 📖 Bitácora de Desarrollo: El Camino a la Versión 6

A continuación se detalla el proceso técnico y los hitos alcanzados en cada etapa del desarrollo:

### 🔹 Fase 1: Digitalización del Diseño (v1)
*   **Objetivo:** Transformar un diseño de red universitario (basado en un modelo jerárquico Core-Distribución-Acceso) en una interfaz web funcional.
*   **Logro:** Creación de la base de datos de comandos CLI para Cisco, Huawei y Fortinet.
*   **Desafío:** La información era estática y difícil de aplicar en entornos reales.

### 🔹 Fase 2: Contextualización de la Sede 1 (v2)
*   **Objetivo:** Adaptar los comandos a una topología real con 1600 hosts.
*   **Logro:** Integración de configuraciones específicas para switches Catalyst 9500 (Core) y 9300 (Distribución). Se introdujo la automatización mediante scripts de Python (Netmiko).
*   **Aprendizaje:** El despliegue manual seguía siendo un cuello de botella.

### 🔹 Fase 3: Dinamismo en el Direccionamiento (v3 - v4)
*   **Objetivo:** Eliminar la rigidez del direccionamiento IP estático.
*   **Logro:** Desarrollo de la **Calculadora VLSM Dinámica**. Implementamos algoritmos en JavaScript para calcular máscaras, gateways y broadcasts en tiempo real basados en una IP semilla.
*   **Mejora Técnica:** En la v4 se optimizó el algoritmo para manejar prefijos CIDR variables con precisión matemática.

### 🔹 Fase 4: La Evolución de la Conectividad (v5)
*   **Objetivo:** Facilitar el acceso a los equipos físicos.
*   **Intento:** Se crearon generadores de archivos de sesión para PuTTY (.reg y .bat).
*   **Pivot Técnico:** Identificamos que depender de software externo (PuTTY) y archivos descargables interrumpía el flujo de trabajo del ingeniero.

### 🔹 Fase 5: Conexión Directa y Diagnóstico (v6 - Final) 🚀
*   **Objetivo:** Eliminar intermediarios y proporcionar herramientas de diagnóstico.
*   **Innovación Radical:** Implementamos la **Web Serial API**. Esto permite que el navegador se comunique directamente con el puerto COM del PC, enviando comandos CLI sin salir de la herramienta.
*   **Robustez:** Se añadió el panel de **Troubleshooting**, una matriz de diagnóstico basada en el modelo OSI con comandos de verificación rápida.

---

## 🛠️ Capacidades Técnicas por Versión

| Característica | v1 | v2 | v3 | v4 | v5 | v6 (Final) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| Comandos CLI Multi-vendor | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Configuración Sede 1 (1600 hosts) | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Calculadora IP Dinámica | ❌ | ❌ | ✅ | ✅ | ✅ | ✅ |
| Troubleshooting & Diagnóstico | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| Automatización vía PuTTY (.bat) | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ (Obsoleto) |
| **Conexión Serial COM Directa** | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |

---

## 🚀 Funcionalidades Estrella

### 1. Terminal Serial Integrada
Utiliza tecnología de vanguardia para conectar tu cable de consola directamente al navegador. Soporta:
- Selección de Baud Rate (9600 - 115200).
- Envío de comandos por lotes (Batch) con delay programable.
- Historial de comandos interactivo.

### 2. Motor VLSM Inteligente
Calcula subredes para 4 sedes universitarias con un solo clic. Valida automáticamente si la IP base y el prefijo son suficientes para la densidad de hosts requerida, evitando errores de diseño comunes.

### 3. Centro de Troubleshooting
Una guía interactiva que separa el diagnóstico por capas:
- **Capa Física:** Estado de interfaces.
- **Capa de Enlace:** VLANs y Spanning Tree.
- **Capa de Red:** Vecindades OSPF y tablas de enrutamiento.

---

## 📂 Estructura del Repositorio

-   `index.html`: **Acceso directo a la herramienta final.**
-   `/js`: Motores lógicos de cálculo y comunicación.
-   `/versiones`: El "museo" del proyecto, con cada etapa del desarrollo preservada para estudio.

---
**Ingeniería y Desarrollo:** Manus AI
**Repositorio de:** Luisa1946
