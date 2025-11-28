# 🎬 GUÍA: CÓMO AGREGAR O CAMBIAR EL VIDEO

## 📹 MÉTODOS DISPONIBLES

Tienes **3 opciones** para agregar video a tu sitio:

1. **Video desde URL externa** (YouTube, Google Drive, etc.) ⭐ MÁS FÁCIL
2. **Video alojado en tu carpeta** (archivo local)
3. **Video embebido de YouTube/Vimeo** (iframe)

---

## 🌐 OPCIÓN 1: VIDEO DESDE URL EXTERNA

### A) YouTube (Público)

Si tienes un video en YouTube:

**Paso 1:** Sube tu video a YouTube o encuentra uno existente

**Paso 2:** Obtén el enlace directo:
- Esta opción NO funciona directamente con YouTube
- Mejor usa la **Opción 3 (Embed)** para YouTube

### B) Google Drive (Mejor opción para archivos grandes)

**Paso 1:** Sube el video a Google Drive

**Paso 2:** Haz clic derecho → "Obtener enlace" → "Cualquiera con el enlace"

**Paso 3:** Copia el ID del video de este formato:
```
https://drive.google.com/file/d/ESTE_ES_EL_ID/view
```

**Paso 4:** Abre `home.html` y busca la línea 41:
```html
<source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
```

**Paso 5:** Reemplázala con:
```html
<source src="https://drive.google.com/uc?export=download&id=TU_ID_AQUI" type="video/mp4">
```

**Ejemplo completo:**
```html
<source src="https://drive.google.com/uc?export=download&id=1a2b3c4d5e6f7g8h9i0j" type="video/mp4">
```

### C) Enlace directo a archivo .mp4

Si tienes un enlace directo a un archivo MP4:

**En `home.html` línea 41:**
```html
<!-- Reemplaza esto: -->
<source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">

<!-- Por esto: -->
<source src="https://tu-enlace-directo.com/video.mp4" type="video/mp4">
```

---

## 📁 OPCIÓN 2: VIDEO LOCAL (EN TU CARPETA)

Si quieres guardar el video en tu proyecto:

### Paso 1: Preparar el video

1. Descarga o graba tu video de COD Zombies
2. Renómbralo a algo simple: `zombies-intro.mp4`
3. **IMPORTANTE:** El archivo debe ser `.mp4` para mejor compatibilidad

### Paso 2: Guardar en carpeta

Crea una carpeta `videos` en tu proyecto:

```
proyecto-cod-zombies/
├── index.html
├── home.html
├── css/
├── js/
├── img/
└── videos/              ← NUEVA CARPETA
    └── zombies-intro.mp4
```

### Paso 3: Actualizar home.html

Abre `home.html` y busca la línea 41:

**ANTES:**
```html
<source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
```

**DESPUÉS:**
```html
<source src="videos/zombies-intro.mp4" type="video/mp4">
```

### ⚠️ Consideraciones:

- **Tamaño del video:** Los archivos grandes (>10MB) pueden tardar en cargar
- **Formato:** Usa MP4 (H.264) para mejor compatibilidad
- **GitHub Pages:** Si subes a GitHub, archivos >100MB no se permiten

---

## 🎥 OPCIÓN 3: VIDEO EMBEBIDO (YouTube/Vimeo)

### YouTube (Método recomendado para videos de YouTube)

**Paso 1:** Encuentra tu video en YouTube

**Paso 2:** Haz clic en "Compartir" → "Insertar"

**Paso 3:** Copia el código que se ve así:
```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" ...></iframe>
```

**Paso 4:** En `home.html`, REEMPLAZA todo el bloque del video (líneas 38-43):

**ANTES:**
```html
<video id="missionVideo" width="100%" controls poster="">
    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
    Tu navegador no soporta la reproducción de video.
</video>
```

**DESPUÉS:**
```html
<iframe 
    width="100%" 
    height="600" 
    src="https://www.youtube.com/embed/VIDEO_ID" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen
    style="border-radius: 10px;">
</iframe>
```

**Ejemplo con video real:**
```html
<iframe 
    width="100%" 
    height="600" 
    src="https://www.youtube.com/embed/QtBDL8EiNZo" 
    frameborder="0" 
    allowfullscreen
    style="border-radius: 10px;">
</iframe>
```

---

## 🎨 AGREGAR IMAGEN DE PORTADA (POSTER)

Si quieres una imagen antes de que se reproduzca el video:

### Paso 1: Guarda una imagen en `/img/`
```
img/video-poster.jpg
```

### Paso 2: Agrega el atributo poster:
```html
<video id="missionVideo" width="100%" controls poster="img/video-poster.jpg">
    <source src="videos/zombies-intro.mp4" type="video/mp4">
</video>
```

---

## 🔧 CONFIGURACIONES ADICIONALES

### Reproducción automática (autoplay)

```html
<video id="missionVideo" width="100%" controls autoplay muted>
    <source src="videos/zombies-intro.mp4" type="video/mp4">
</video>
```

⚠️ **Nota:** Los navegadores bloquean autoplay sin `muted`

### Video en bucle (loop)

```html
<video id="missionVideo" width="100%" controls loop>
    <source src="videos/zombies-intro.mp4" type="video/mp4">
</video>
```

### Sin controles (solo reproducción)

```html
<video id="missionVideo" width="100%" autoplay muted loop>
    <source src="videos/zombies-intro.mp4" type="video/mp4">
</video>
```

---

## 📍 UBICACIÓN EXACTA EN EL CÓDIGO

En el archivo `home.html`, busca la **línea 41**:

```html
<source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
```

Esta es la línea que debes cambiar según el método que elijas.

---

## 🎯 EJEMPLOS COMPLETOS

### Ejemplo 1: Video de YouTube

```html
<div class="video-wrapper">
    <iframe 
        width="100%" 
        height="600" 
        src="https://www.youtube.com/embed/QtBDL8EiNZo" 
        frameborder="0" 
        allowfullscreen
        style="border-radius: 10px;">
    </iframe>
    
    <div class="video-overlay">
        <p class="classified-stamp">CLASIFICADO</p>
    </div>
</div>
```

### Ejemplo 2: Video local con poster

```html
<div class="video-wrapper">
    <video id="missionVideo" width="100%" controls poster="img/zombies-poster.jpg">
        <source src="videos/zombies-intro.mp4" type="video/mp4">
        Tu navegador no soporta la reproducción de video.
    </video>
    
    <div class="video-overlay">
        <p class="classified-stamp">CLASIFICADO</p>
    </div>
</div>
```

### Ejemplo 3: Video de Google Drive

```html
<div class="video-wrapper">
    <video id="missionVideo" width="100%" controls>
        <source src="https://drive.google.com/uc?export=download&id=1a2b3c4d5e6f7g8h9i0j" type="video/mp4">
        Tu navegador no soporta la reproducción de video.
    </video>
    
    <div class="video-overlay">
        <p class="classified-stamp">CLASIFICADO</p>
    </div>
</div>
```

---

## 🎬 RECOMENDACIONES PARA VIDEOS DE COD ZOMBIES

### Dónde encontrar videos:

1. **YouTube:**
   - Busca: "Call of Duty Black Ops Zombies intro"
   - Busca: "COD Zombies cinematic"
   - Busca: "Black Ops Zombies trailer"

2. **Ejemplos de videos buenos:**
   - Cinemáticas oficiales de COD
   - Trailers de mapas de Zombies
   - Intros de misiones
   - Gameplay épico

### Duración recomendada:
- **Intro corta:** 30 segundos - 1 minuto
- **Intro completa:** 2-3 minutos
- **Evitar:** Videos muy largos (>5 minutos)

---

## 🐛 SOLUCIÓN DE PROBLEMAS

### ❌ El video no se reproduce

**Problema:** Formato no compatible
- **Solución:** Usa `.mp4` con codec H.264

**Problema:** URL incorrecta
- **Solución:** Verifica que la URL sea accesible públicamente

**Problema:** Archivo muy grande
- **Solución:** Comprime el video o usa YouTube

### ❌ El video no se ve en GitHub Pages

**Problema:** Archivo demasiado grande
- **Solución:** Usa YouTube o Google Drive en lugar de archivo local

### ❌ El video de YouTube no funciona

**Problema:** Usaste el enlace normal en lugar del embed
- **Solución:** Usa `/embed/` en lugar de `/watch?v=`
- **Correcto:** `https://www.youtube.com/embed/VIDEO_ID`
- **Incorrecto:** `https://www.youtube.com/watch?v=VIDEO_ID`

---

## ✅ VERIFICAR QUE FUNCIONA

1. Abre `home.html` en tu navegador
2. Inicia sesión
3. El video debe aparecer y reproducirse
4. Verifica que los controles funcionan
5. Prueba en diferentes navegadores (Chrome, Firefox, Edge)

---

## 💡 TIPS EXTRAS

### Optimizar video para web:
- Usa herramientas como HandBrake para comprimir
- Formato: MP4 (H.264)
- Resolución: 1280x720 (HD) es suficiente
- Bitrate: 2-5 Mbps

### Múltiples formatos (mejor compatibilidad):
```html
<video id="missionVideo" width="100%" controls>
    <source src="videos/zombies.mp4" type="video/mp4">
    <source src="videos/zombies.webm" type="video/webm">
    <source src="videos/zombies.ogv" type="video/ogg">
    Tu navegador no soporta la reproducción de video.
</video>
```

---

## 📝 RESUMEN RÁPIDO

**La forma más fácil (YouTube):**
1. Encuentra video en YouTube
2. Clic en "Compartir" → "Insertar"
3. Copia el código iframe
4. Pégalo en `home.html` línea 38-43
5. ¡Listo!

**La forma local (tu propio video):**
1. Guarda video como `videos/zombies-intro.mp4`
2. Cambia línea 41 a: `<source src="videos/zombies-intro.mp4" type="video/mp4">`
3. ¡Listo!

---

🎮 **¡Ahora tu sitio tendrá un video épico de COD Zombies!** 🧟

*"The truth is buried deep... or is it?"* - Richtofen
