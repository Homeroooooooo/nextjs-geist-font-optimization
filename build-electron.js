const { execSync } = require('child_process')
const path = require('path')
const fs = require('fs')

console.log('🚀 Construyendo aplicación de escritorio...')

try {
  // Paso 1: Construir la aplicación Next.js
  console.log('📦 Construyendo aplicación Next.js...')
  execSync('npm run build', { stdio: 'inherit' })

  // Paso 2: Exportar como sitio estático
  console.log('📤 Exportando aplicación...')
  execSync('npm run export', { stdio: 'inherit' })

  // Paso 3: Copiar archivos necesarios
  console.log('📋 Preparando archivos para Electron...')
  
  // Asegurarse de que existe la carpeta out
  if (!fs.existsSync('out')) {
    throw new Error('La carpeta out no existe. Ejecuta npm run export primero.')
  }

  // Paso 4: Construir el ejecutable
  console.log('🔨 Construyendo ejecutable...')
  execSync('npm run dist', { stdio: 'inherit' })

  console.log('✅ ¡Aplicación construida exitosamente!')
  console.log('📁 Los ejecutables están en la carpeta dist/')

} catch (error) {
  console.error('❌ Error durante la construcción:', error.message)
  process.exit(1)
}
