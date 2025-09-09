const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Función para obtener todos los archivos de imagen
function getImageFiles(dir, extensions = ['.png', '.jpg', '.jpeg']) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else if (extensions.includes(path.extname(item).toLowerCase())) {
        files.push(fullPath);
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Función para optimizar una imagen
async function optimizeImage(inputPath) {
  const ext = path.extname(inputPath).toLowerCase();
  const dir = path.dirname(inputPath);
  const name = path.basename(inputPath, ext);
  
  // Crear versión WebP
  const webpPath = path.join(dir, `${name}.webp`);
  
  try {
    await sharp(inputPath)
      .webp({ 
        quality: 85,
        effort: 6 // Máximo esfuerzo de compresión
      })
      .toFile(webpPath);
    
    // Crear versión AVIF (más moderna y eficiente)
    const avifPath = path.join(dir, `${name}.avif`);
    await sharp(inputPath)
      .avif({ 
        quality: 80,
        effort: 9 // Máximo esfuerzo de compresión
      })
      .toFile(avifPath);
    
    // Optimizar la imagen original
    const optimizedPath = path.join(dir, `${name}-optimized${ext}`);
    
    if (ext === '.png') {
      await sharp(inputPath)
        .png({ 
          quality: 90,
          compressionLevel: 9,
          adaptiveFiltering: true
        })
        .toFile(optimizedPath);
    } else {
      await sharp(inputPath)
        .jpeg({ 
          quality: 85,
          progressive: true,
          mozjpeg: true
        })
        .toFile(optimizedPath);
    }
    
    // Obtener tamaños de archivo
    const originalSize = fs.statSync(inputPath).size;
    const webpSize = fs.statSync(webpPath).size;
    const avifSize = fs.statSync(avifPath).size;
    const optimizedSize = fs.statSync(optimizedPath).size;
    
    console.log(`✅ ${path.basename(inputPath)}:`);
    console.log(`   Original: ${(originalSize / 1024).toFixed(1)}KB`);
    console.log(`   WebP: ${(webpSize / 1024).toFixed(1)}KB (${((1 - webpSize/originalSize) * 100).toFixed(1)}% reducción)`);
    console.log(`   AVIF: ${(avifSize / 1024).toFixed(1)}KB (${((1 - avifSize/originalSize) * 100).toFixed(1)}% reducción)`);
    console.log(`   Optimizado: ${(optimizedSize / 1024).toFixed(1)}KB (${((1 - optimizedSize/originalSize) * 100).toFixed(1)}% reducción)`);
    console.log('');
    
  } catch (error) {
    console.error(`❌ Error optimizando ${inputPath}:`, error.message);
  }
}

// Función principal
async function main() {
  const publicDir = path.join(__dirname, '..', 'public', 'images');
  
  if (!fs.existsSync(publicDir)) {
    console.error('❌ Directorio public/images no encontrado');
    return;
  }
  
  console.log('🚀 Iniciando optimización de imágenes...');
  console.log(`📁 Escaneando: ${publicDir}`);
  
  const imageFiles = getImageFiles(publicDir);
  
  if (imageFiles.length === 0) {
    console.log('ℹ️  No se encontraron imágenes para optimizar');
    return;
  }
  
  console.log(`📸 Encontradas ${imageFiles.length} imágenes`);
  console.log('');
  
  for (const imagePath of imageFiles) {
    await optimizeImage(imagePath);
  }
  
  console.log('✨ Optimización completada!');
  console.log('');
  console.log('📝 Próximos pasos:');
  console.log('1. Reemplaza las imágenes originales con las versiones optimizadas');
  console.log('2. Actualiza los componentes para usar el componente OptimizedImage');
  console.log('3. Configura el servidor para servir WebP/AVIF cuando sea compatible');
}

// Verificar si Sharp está instalado
try {
  require.resolve('sharp');
  main().catch(console.error);
} catch (error) {
  console.error('❌ Sharp no está instalado. Ejecuta: npm install sharp --save-dev');
  process.exit(1);
}