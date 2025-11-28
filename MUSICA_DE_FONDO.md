# 🎵 GUÍA: MÚSICA DE FONDO AUTOMÁTICA

## ✨ NUEVA FUNCIONALIDAD AGREGADA

Tu sitio ahora tiene **música de fondo automática** que se reproduce cuando pausas el video.

---

## 🎮 CÓMO FUNCIONA:

1. **Cuando el video se está reproduciendo** → La música está pausada
2. **Cuando PAUSAS el video** → La música empieza automáticamente 🎵
3. **Cuando vuelves a REPRODUCIR el video** → La música se pausa
4. **Cuando el video TERMINA** → La música empieza automáticamente

---

## 📁 CÓMO AGREGAR TU CANCIÓN:

### PASO 1: Consigue tu canción

**Opciones recomendadas:**

**🎵 Música de COD Zombies (recomendada):**
- "115" - Elena Siegman
- "Abracadavre" - Elena Siegman  
- "Beauty of Annihilation" - Elena Siegman
- "The One" - Kevin Sherwood
- "Damned" (tema principal)

**Dónde conseguirla:**
- YouTube → Descarga con convertidor (MP3)
- Spotify (si tienes Premium)
- Servicios de música sin copyright

**⚠️ IMPORTANTE:** Asegúrate de que la música sea para uso personal o tenga licencia libre.

---

### PASO 2: Preparar el archivo

1. **Formato:** MP3 (recomendado) o OGG
2. **Nombre del archivo:** `background-music.mp3`
3. **Tamaño:** Menos de 5MB (para carga rápida)
4. **Calidad:** 128kbps es suficiente

---

### PASO 3: Guardar en la carpeta correcta

```
proyecto-cod-zombies/
└── audio/
    └── background-music.mp3  ← AQUÍ
```

**Instrucciones:**
1. Abre la carpeta `audio` en tu proyecto
2. Copia/pega tu archivo `background-music.mp3`
3. ¡Listo!

---

## ⚙️ PERSONALIZACIÓN

### Cambiar el volumen de la música:

En `js/auth.js` (línea ~65), cambia:

```javascript
backgroundMusic.volume = 0.5;  // 0.5 = 50%
```

**Opciones:**
- `0.3` = 30% (suave)
- `0.5` = 50% (medio) ✅ actual
- `0.7` = 70% (alto)
- `1.0` = 100% (máximo)

---

### Cambiar el nombre del archivo:

Si tu canción se llama diferente (ej: `zombies-song.mp3`):

**En `home.html` (línea ~109):**

```html
<!-- CAMBIA ESTO: -->
<source src="audio/background-music.mp3" type="audio/mpeg">

<!-- POR ESTO: -->
<source src="audio/zombies-song.mp3" type="audio/mpeg">
```

---

### Quitar el loop (que se repita):

Si NO quieres que la música se repita en bucle:

**En `home.html` (línea ~108):**

```html
<!-- CAMBIA ESTO: -->
<audio id="backgroundMusic" loop>

<!-- POR ESTO: -->
<audio id="backgroundMusic">
```

---

## 🧪 PROBAR LA FUNCIONALIDAD:

1. Abre `home.html` en tu navegador
2. El video debería empezar automáticamente
3. **Pausa el video** → La música debe empezar
4. **Reproduce el video** → La música debe pausarse
5. **Pausa de nuevo** → La música debe volver

---

## 🎯 EJEMPLO DE CÓDIGO COMPLETO:

```html
<!-- En home.html -->
<audio id="backgroundMusic" loop>
    <source src="audio/background-music.mp3" type="audio/mpeg">
    <source src="audio/background-music.ogg" type="audio/ogg">
    Tu navegador no soporta audio HTML5.
</audio>
```

```javascript
// En auth.js
video.addEventListener('pause', () => {
    console.log("⏸️ Video pausado");
    
    if (backgroundMusic && backgroundMusic.paused) {
        backgroundMusic.play();
        console.log("🎵 Música de fondo reproduciendo...");
    }
});
```

---

## 📝 ARCHIVOS MODIFICADOS:

✅ `home.html` - Agregado reproductor de audio
✅ `js/auth.js` - Agregada lógica de control de música
✅ `audio/` - Nueva carpeta creada
✅ `audio/README.md` - Instrucciones

---

## 🔧 SOLUCIÓN DE PROBLEMAS:

### ❌ La música no suena:

**Problema 1:** No hay archivo de audio
- **Solución:** Agrega `background-music.mp3` en la carpeta `/audio/`

**Problema 2:** El navegador bloqueó el autoplay
- **Solución:** Esto es normal, el usuario debe interactuar primero (hacer clic en el video)

**Problema 3:** Formato de audio no soportado
- **Solución:** Usa MP3 (funciona en todos los navegadores)

**Problema 4:** El volumen está muy bajo
- **Solución:** Aumenta el volumen en `auth.js`: `backgroundMusic.volume = 0.8;`

---

### ❌ La música no se pausa cuando reproduzco el video:

**Solución:** 
1. Abre la consola (F12)
2. Busca errores en rojo
3. Verifica que el código de `auth.js` esté correcto

---

## 💡 TIPS PRO:

1. **Usa música instrumental** para no distraer del contenido
2. **Ajusta el volumen** al 40-50% para mejor experiencia
3. **Usa formato MP3** para compatibilidad universal
4. **Comprime el audio** para carga más rápida
5. **Loop activado** mantiene la música continua

---

## 🎮 CANCIONES RECOMENDADAS DE COD ZOMBIES:

1. **"115"** - Elena Siegman (la más icónica)
2. **"The One"** - Kevin Sherwood
3. **"Beauty of Annihilation"** - Elena Siegman
4. **"Coming Home"** - Elena Siegman
5. **"Damned"** (tema de menú)

---

**¡Disfruta tu música de fondo automática estilo Zombies!** 🎵🧟
