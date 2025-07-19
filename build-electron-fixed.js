const { execSync } = require('child_process')
const path = require('path')
const fs = require('fs')

console.log('🚀 Construyendo aplicación de escritorio...')

try {
  // Paso 1: Construir la aplicación Next.js
  console.log('📦 Construyendo aplicación Next.js...')
  execSync('npm run build', { stdio: 'inherit' })

  // Paso 2: No necesitamos export porque ya usamos output: export
  console.log('✅ Aplicación Next.js construida exitosamente')

  // Paso 3: Construir el ejecutable
  console.log('🔨 Construyendo ejecutable...')
  execSync('npm run dist', { stdio: 'inherit' })

  console.log('✅ ¡Aplicación construida exitosamente!')
  console.log('📁 Los ejecutables están en la carpeta dist/')

} catch (error) {
  console.error('❌ Error durante la construcción:', error instanceof Error ? error.message : String(error))
  process.exit(1)
}
