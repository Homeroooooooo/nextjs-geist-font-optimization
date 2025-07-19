# Buscador de Datos - Aplicación de Escritorio

Esta es una aplicación de escritorio que permite importar y buscar datos desde archivos Excel o bases de datos.

## 🚀 Características

- **Importación de Excel**: Soporte para .xlsx, .xls y .csv
- **Conexión a Bases de Datos**: MySQL, PostgreSQL y SQLite
- **Búsqueda Avanzada**: Exacta y parcial con filtros por columna
- **Exportación**: CSV, Excel y JSON
- **Interfaz Moderna**: Diseño limpio y profesional
- **Multiplataforma**: Windows, macOS y Linux

## 📦 Instalación

### Opción 1: Ejecutar desde código fuente

1. Clonar el repositorio
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Ejecutar en modo desarrollo:
   ```bash
   npm run electron-dev
   ```

### Opción 2: Instalar ejecutable

Descargar el ejecutable correspondiente desde la carpeta `dist/`:
- Windows: `Buscador de Datos Setup.exe`
- macOS: `Buscador de Datos.dmg`
- Linux: `Buscador de Datos.AppImage`

## 🛠️ Desarrollo

### Scripts disponibles

- `npm run dev`: Inicia el servidor de desarrollo Next.js
- `npm run electron-dev`: Inicia la aplicación en modo desarrollo
- `npm run build`: Construye la aplicación Next.js
- `npm run export`: Exporta la aplicación como sitio estático
- `npm run dist`: Construye el ejecutable para la plataforma actual
- `npm run pack`: Crea un paquete sin comprimir

### Estructura del proyecto

```
├── electron/
│   ├── main.js      # Punto de entrada de Electron
│   ├── preload.js   # Script de precarga
├── src/
│   ├── app/         # Aplicación Next.js
│   ├── components/  # Componentes React
│   ├── lib/         # Utilidades
│   └── types/       # Tipos TypeScript
├── public/          # Archivos estáticos
└── dist/            # Ejecutables generados
```

## 🔧 Configuración de Bases de Datos

### MySQL
- Host: localhost (por defecto)
- Puerto: 3306
- Usuario: tu_usuario
- Contraseña: tu_contraseña
- Base de datos: nombre_de_tu_bd

### PostgreSQL
- Host: localhost (por defecto)
- Puerto: 5432
- Usuario: tu_usuario
- Contraseña: tu_contraseña
- Base de datos: nombre_de_tu_bd

### SQLite
- Ruta al archivo: /ruta/completa/a/tu/base_de_datos.db

## 📋 Uso

1. **Abrir la aplicación**: Ejecutar el archivo descargado o usar `npm run electron-dev`
2. **Cargar datos**: 
   - Seleccionar "Cargar Excel" para archivos .xlsx, .xls o .csv
   - Seleccionar "Conectar Base de Datos" para conectarse a una BD
3. **Buscar**: Usar la barra de búsqueda con opciones de filtrado
4. **Exportar**: Usar los botones de exportación para descargar resultados

## 🐛 Solución de Problemas

### Error de conexión a base de datos
- Verificar que el servidor esté ejecutándose
- Comprobar credenciales y permisos
- Asegurarse de que el puerto esté disponible

### Error al importar archivos
- Verificar que el archivo no esté corrupto
- Asegurarse de que el formato sea compatible
- Comprobar que el archivo no esté abierto en otro programa

## 📞 Soporte

Para reportar problemas o solicitar nuevas funciones, abrir un issue en el repositorio.
