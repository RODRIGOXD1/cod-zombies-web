# 🖼️ GUÍA: CÓMO AGREGAR IMÁGENES AL PROYECTO

## 📁 PASO 1: PREPARAR LAS IMÁGENES

### Imágenes necesarias:

**Personajes Primis (4 imágenes):**
- `richtofen.jpg` o `.png` - Edward Richtofen
- `nikolai.jpg` o `.png` - Nikolai Belinski  
- `takeo.jpg` o `.png` - Takeo Masaki
- `dempsey.jpg` o `.png` - Tank Dempsey

**Perks (6 imágenes - OPCIONAL):**
- `juggernog.png` - Perk rojo
- `speed-cola.png` - Perk verde
- `quick-revive.png` - Perk azul
- `double-tap.png` - Perk naranja
- `stamin-up.png` - Perk amarillo
- `phd-flopper.png` - Perk morado

### Recomendaciones:
- **Formato**: JPG o PNG
- **Tamaño**: Mínimo 300x400px para personajes
- **Tamaño**: 200x200px para perks (si decides usarlas)
- **Peso**: Menos de 500KB por imagen (optimizado para web)

---

## 📂 PASO 2: GUARDAR LAS IMÁGENES

1. Crea la carpeta `img` dentro de tu proyecto si no existe:
```
proyecto-cod-zombies/
├── img/              ← Carpeta de imágenes
│   ├── richtofen.jpg
│   ├── nikolai.jpg
│   ├── takeo.jpg
│   ├── dempsey.jpg
│   ├── juggernog.png (opcional)
│   └── ...
├── css/
├── js/
├── index.html
└── home.html
```

2. Copia tus imágenes a esta carpeta

---

## ✏️ PASO 3: ACTIVAR LAS IMÁGENES EN CSS

Abre el archivo `css/estilos.css` y busca la sección:
```css
/* IMÁGENES DE PERSONAJES PRIMIS */
```

### Para Richtofen:
Busca:
```css
.primis-1 {
    /* RICHTOFEN - Descomentar cuando tengas la imagen */
    /* background-image: url('../img/richtofen.jpg'); */
```

Cambia a:
```css
.primis-1 {
    background-image: url('../img/richtofen.jpg');
    /* Ya no necesitas el gradient y emoji, pero puedes dejarlo como respaldo */
```

### Para Nikolai:
```css
.primis-2 {
    background-image: url('../img/nikolai.jpg');
```

### Para Takeo:
```css
.primis-3 {
    background-image: url('../img/takeo.jpg');
```

### Para Dempsey:
```css
.primis-4 {
    background-image: url('../img/dempsey.jpg');
```

---

## 🎨 PASO 4 (OPCIONAL): AGREGAR IMÁGENES A PERKS

Si quieres poner imágenes en los perks en lugar de emojis:

### Opción A: Usando CSS (Recomendado)

Agrega estas clases en `css/estilos.css` después de `.perk-icon`:

```css
/* Imágenes de Perks */
.juggernog .perk-icon {
    background-image: url('../img/juggernog.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 80px;
    height: 80px;
    margin: 0 auto 15px;
    font-size: 0; /* Oculta el emoji */
}

.speed-cola .perk-icon {
    background-image: url('../img/speed-cola.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 80px;
    height: 80px;
    margin: 0 auto 15px;
    font-size: 0;
}

/* Repite para los otros perks... */
```

### Opción B: Usando HTML

En `home.html`, busca cada perk y reemplaza el emoji:

**ANTES:**
```html
<div class="perk-icon">🛡️</div>
```

**DESPUÉS:**
```html
<div class="perk-icon">
    <img src="img/juggernog.png" alt="Juggernog" style="width: 80px; height: 80px;">
</div>
```

---

## 🎯 EJEMPLO COMPLETO: RICHTOFEN

### Archivo: css/estilos.css

**ANTES:**
```css
.primis-1 {
    /* background-image: url('../img/richtofen.jpg'); */
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    background-image: url('data:image/svg+xml...');
}
```

**DESPUÉS:**
```css
.primis-1 {
    background-image: url('../img/richtofen.jpg');
    background-size: cover;
    background-position: center;
    /* Opcionalmente puedes agregar un filtro oscuro */
    position: relative;
}

/* Agregar overlay oscuro (opcional) */
.primis-1::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%);
}
```

---

## 🔍 VERIFICAR QUE FUNCIONA

1. **Abre** `home.html` en tu navegador
2. **Refresca** la página (Ctrl + F5 o Cmd + Shift + R)
3. **Verifica** que las imágenes se carguen correctamente
4. Si no aparecen:
   - Revisa que el nombre del archivo sea exacto (mayúsculas/minúsculas)
   - Verifica que la ruta sea correcta: `../img/nombre.jpg`
   - Abre la consola del navegador (F12) para ver errores

---

## 🚫 PROBLEMAS COMUNES

### ❌ La imagen no aparece:

**Problema**: Nombre de archivo incorrecto
```css
/* MAL - sensible a mayúsculas */
background-image: url('../img/Richtofen.jpg');

/* BIEN */
background-image: url('../img/richtofen.jpg');
```

**Problema**: Ruta incorrecta
```css
/* MAL - falta ../ */
background-image: url('img/richtofen.jpg');

/* BIEN - desde CSS necesitas ../ */
background-image: url('../img/richtofen.jpg');
```

**Problema**: Extensión equivocada
```css
/* Si tu archivo es .png, no pongas .jpg */
background-image: url('../img/richtofen.png');
```

---

## 💡 TIPS EXTRAS

### 1. Optimizar imágenes antes de usarlas:
- Usa herramientas como TinyPNG.com
- Reduce el tamaño sin perder calidad
- Mejora velocidad de carga

### 2. Agregar efecto hover a personajes:
```css
.character-card:hover .card-image {
    transform: scale(1.1);
    transition: transform 0.3s ease;
}
```

### 3. Filtros CSS para las imágenes:
```css
.primis-1 {
    background-image: url('../img/richtofen.jpg');
    filter: brightness(0.9) contrast(1.1);
}
```

### 4. Si quieres mantener el emoji como respaldo:
```css
.primis-1 {
    /* La imagen real */
    background-image: url('../img/richtofen.jpg');
    /* Si falla, mostrará el emoji */
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%), 
                url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="50" font-size="40" fill="%238B0000">🧪</text></svg>');
}
```

---

## 📝 CHECKLIST FINAL

- [ ] Imágenes guardadas en la carpeta `/img/`
- [ ] Nombres de archivo correctos (sin espacios, minúsculas)
- [ ] CSS actualizado con las rutas correctas
- [ ] Página refrescada en el navegador
- [ ] Imágenes visibles y cargando correctamente
- [ ] Sin errores en la consola (F12)

---

## 🎮 ¡LISTO!

Ahora tu sitio de COD Zombies tendrá imágenes reales de los personajes y perks.

**¿Necesitas ayuda?** Revisa la consola del navegador (F12) para ver si hay errores en las rutas.

🧟 *"In the end, we will all be consumed by the darkness."* - Richtofen
