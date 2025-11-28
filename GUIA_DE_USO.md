# 🎮 GUÍA DE USO - COD ZOMBIES WEB

## 📖 CÓMO USAR EL PROYECTO

### 1️⃣ ABRIR EL PROYECTO

1. Descarga la carpeta completa `proyecto-cod-zombies`
2. Abre `index.html` en tu navegador (Chrome, Firefox, Edge)
3. ¡Listo! El sitio funcionará localmente

### 2️⃣ PROBAR EL LOGIN

**Credenciales de prueba (modo temporal):**
- Email: cualquier@email.com
- Password: cualquier contraseña de 6+ caracteres

Ejemplos válidos:
```
Email: test@zombies.com
Password: 123456

Email: richtofen@grupo935.com
Password: element115
```

### 3️⃣ NAVEGACIÓN

```
┌─────────────────────────────────────┐
│         PÁGINA DE LOGIN             │
│         (index.html)                │
│                                     │
│  📧 Email: _____________           │
│  🔒 Password: __________           │
│                                     │
│      [INICIAR MISIÓN] ←─────────┐  │
└─────────────────────────────────────┘
                │                      
                │ (login exitoso)     
                ↓                      
┌─────────────────────────────────────┐
│         PÁGINA HOME                 │
│         (home.html)                 │
│                                     │
│  🎬 SECCIÓN DE VIDEO                │
│  👥 OPERADORES PRIMIS               │
│  🧪 PERKS (6 bebidas)               │
│  🔫 ARSENAL (6 armas)               │
│                                     │
│            [CERRAR SESIÓN] ←────────┤
└─────────────────────────────────────┘
```

## 🎨 ELEMENTOS VISUALES

### PÁGINA DE LOGIN
```
╔════════════════════════════════════════╗
║                                        ║
║     BLACK OPS ZOMBIES                  ║
║  (efecto glitch con brillo rojo)       ║
║                                        ║
║  CLASIFICADO - ACCESO RESTRINGIDO      ║
║  (texto verde neón parpadeante)        ║
║                                        ║
║  👤 AGENTE                             ║
║  [________________]                    ║
║                                        ║
║  🔒 CÓDIGO DE ACCESO                   ║
║  [________________]                    ║
║                                        ║
║  ┌──────────────────┐                 ║
║  │ INICIAR MISIÓN   │ ← (botón rojo)  ║
║  └──────────────────┘                 ║
║                                        ║
║  ⚠ ADVERTENCIA: SOLO PERSONAL          ║
║     AUTORIZADO DEL GRUPO 935 ⚠         ║
║                                        ║
╚════════════════════════════════════════╝
```

### PÁGINA HOME - PERSONAJES
```
┌─────────────┬─────────────┬─────────────┬─────────────┐
│  🧪         │  🍺         │  ⚔️         │  💪         │
│ RICHTOFEN   │  NIKOLAI    │   TAKEO     │  DEMPSEY    │
│             │             │             │             │
│ Científico  │  Soldado    │  Capitán    │  Marine     │
│ Grupo 935   │  Ruso       │  Japonés    │  EEUU       │
│             │             │             │             │
│ ⚡ Vel: 8/10 │ ⚡ Vel: 6/10 │ ⚡ Vel: 9/10 │ ⚡ Vel: 7/10 │
│ 💪 Fue: 7/10 │ 💪 Fue: 9/10 │ 💪 Fue: 7/10 │ 💪 Fue: 10/10│
└─────────────┴─────────────┴─────────────┴─────────────┘
```

### PÁGINA HOME - PERKS
```
┌──────────────┬──────────────┬──────────────┐
│ 🛡️           │ ⚡           │ 💉           │
│ JUGGERNOG    │ SPEED COLA   │ QUICK REVIVE │
│ 💰 2500 pts  │ 💰 3000 pts  │ 💰 1500 pts  │
│              │              │              │
│ (borde rojo) │(borde verde) │ (borde azul) │
└──────────────┴──────────────┴──────────────┘

┌──────────────┬──────────────┬──────────────┐
│ 🎯           │ 🏃           │ 💥           │
│ DOUBLE TAP   │ STAMIN-UP    │ PHD FLOPPER  │
│ 💰 2000 pts  │ 💰 2000 pts  │ 💰 2000 pts  │
│              │              │              │
│(borde naranja)│(borde amarillo)│(borde morado)│
└──────────────┴──────────────┴──────────────┘
```

### PÁGINA HOME - ARMAS
```
┌─────────────────────────────────────┐
│ ⭐ LEGENDARIA                       │
│                                     │
│ RAY GUN                             │
│ Arma de Energía                     │
│                                     │
│ Daño:      [████████████] 100%     │
│ Cadencia:  [████████    ] 70%      │
│ Munición:  [███████     ] 60%      │
│                                     │
│ (borde dorado con brillo)           │
└─────────────────────────────────────┘
```

## ⚙️ FUNCIONALIDADES IMPLEMENTADAS

✅ **Login Funcional (Temporal)**
   - Validación de email y password
   - Redirección automática
   - Mensajes de error/éxito
   - Animaciones de carga

✅ **Protección de Página**
   - No se puede acceder a home.html sin login
   - Redirección automática si no hay sesión
   - SessionStorage para mantener sesión

✅ **Cerrar Sesión**
   - Botón funcional
   - Limpia la sesión
   - Redirecciona al login

✅ **Video Integrado**
   - Espacio reservado para video
   - Controles estándar de HTML5
   - Intento de autoplay (puede ser bloqueado)

✅ **Efectos Visuales**
   - Glitch effect en títulos
   - Animaciones hover en tarjetas
   - Scanner line animado
   - Efectos de brillo y sombras
   - Transiciones suaves

✅ **Responsive Design**
   - Funciona en móviles
   - Funciona en tablets
   - Funciona en desktop

## 🔧 PERSONALIZACIÓN

### Cambiar Colores:
Edita `css/estilos.css` en la sección `:root`
```css
:root {
    --color-primary: #8B0000;    /* Rojo principal */
    --color-secondary: #FF4500;  /* Naranja */
    --color-accent: #00FF00;     /* Verde */
}
```

### Cambiar Video:
Edita `home.html` línea del video
```html
<source src="TU_VIDEO.mp4" type="video/mp4">
```

### Agregar Más Personajes/Armas:
Copia el bloque HTML de una tarjeta existente y modifica el contenido

## 📱 COMPATIBILIDAD

✅ Chrome (recomendado)
✅ Firefox
✅ Edge
✅ Safari
✅ Opera
✅ Mobile browsers

## ⚠️ NOTAS IMPORTANTES

1. **Firebase NO está configurado todavía**
   - El login es temporal
   - Usa sessionStorage
   - No es persistente (se borra al cerrar el navegador)

2. **Imágenes de personajes**
   - Son placeholders con emojis
   - Puedes agregar imágenes reales más tarde

3. **Video de ejemplo**
   - Actualmente usa un video de W3Schools
   - Reemplazar con video real de COD Zombies

## 🚀 SIGUIENTE PASO: FIREBASE

Cuando estés listo para agregar Firebase:

1. Descomentar scripts en HTML
2. Configurar firebaseConfig en app.js
3. Crear proyecto en Firebase Console
4. Habilitar Authentication
5. Crear usuario de prueba
6. ¡Probar!

---

**🎮 ¡DISFRUTA TU SITIO DE COD ZOMBIES! 🧟**

*"Knowledge will take you to the path."* - Edward Richtofen
