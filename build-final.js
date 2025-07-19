const { execSync } = require('child_process')
const path = require('path')
const fs = require('fs')

console.log('🚀 Construyendo aplicación de escritorio solo para Excel...')

try {
  // Paso 1: Construir la aplicación Next.js
  console.log('📦 Construyendo aplicación Next.js...')
  execSync('npm run build', { stdio: 'inherit' })

  // Paso 2: Construir el ejecutable con Electron
  console.log('🔨 Construyendo ejecutable...')
  execSync('npx electron-builder --publish=never', { stdio: 'inherit' })

  console.log('✅ ¡Aplicación construida exitosamente!')
  console.log('📁 Los ejecutables están en la carpeta dist/')

} catch (error) {
  console.error('❌ Error durante la construcción:', error instanceof Error ? error.message : String(error))
  process.exit(1)
}
