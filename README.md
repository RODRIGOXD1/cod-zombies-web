# 🧟 Call of Duty: Black Ops Zombies - Sitio Web

## 📋 Descripción del Proyecto

Sitio web temático inspirado en **Call of Duty: Black Ops Zombies** con sistema de autenticación usando Firebase. El proyecto incluye una página de login y una página principal protegida con contenido multimedia y categorías temáticas.

## 🎮 Características

### Página de Login
- Diseño temático del Grupo 935
- Autenticación con Firebase (pendiente de configurar)
- Efectos visuales: glitch, scanner, blood splatter
- Responsive design

### Página Home (Protegida)
- **Sección de Video**: Reproducción de contenido multimedia clasificado
- **Operadores Primis**: Tarjetas de los 4 personajes icónicos
  - Edward Richtofen
  - Nikolai Belinski
  - Takeo Masaki
  - Tank Dempsey
  
- **Perks (Mejoras)**: 6 bebidas icónicas
  - Juggernog (Salud)
  - Speed Cola (Recarga rápida)
  - Quick Revive (Revivir)
  - Double Tap (Cadencia)
  - Stamin-Up (Resistencia)
  - PhD Flopper (Explosivos)

- **Arsenal**: Armas legendarias
  - Ray Gun
  - Thunder Gun
  - Wunderwaffe DG-2
  - Pack-a-Punched M1911
  - Galil Mejorada
  - Monkey Bomb

## 📁 Estructura del Proyecto

```
proyecto-cod-zombies/
│
├── index.html          # Página de login
├── home.html           # Página principal protegida
│
├── css/
│   └── estilos.css     # Estilos principales
│
├── js/
│   ├── app.js          # Lógica del login
│   └── auth.js         # Protección de página
│
├── img/
│   └── (imágenes del proyecto)
│
└── README.md           # Este archivo
```

## 🚀 Estado Actual

### ✅ Completado
- [x] Estructura HTML completa
- [x] Diseño CSS con temática Zombies
- [x] Sistema de login temporal (sin Firebase)
- [x] Protección de página home
- [x] Sección de video con espacio reservado
- [x] Categorías de personajes Primis
- [x] Grid de Perks con efectos
- [x] Arsenal de armas con stats
- [x] Efectos visuales y animaciones
- [x] Responsive design

### ⏳ Pendiente
- [ ] Configurar Firebase Authentication
- [ ] Crear proyecto en Firebase Console
- [ ] Agregar credenciales de Firebase
- [ ] Crear usuario de prueba en Firebase
- [ ] Subir a GitHub
- [ ] Publicar en GitHub Pages
- [ ] Agregar video real de COD Zombies

## 🔧 Próximos Pasos

### 1. Configurar Firebase

1. Ir a: https://console.firebase.google.com
2. Crear proyecto: "cod-zombies-web"
3. Habilitar Authentication → Email/Password
4. Crear usuario de prueba:
   - Email: usuario@ejemplo.com
   - Password: 123456

5. Copiar configuración de Firebase y pegarla en `js/app.js`:

```javascript
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_AUTH_DOMAIN",
    projectId: "TU_PROJECT_ID",
    storageBucket: "TU_STORAGE_BUCKET",
    messagingSenderId: "TU_MESSAGING_SENDER_ID",
    appId: "TU_APP_ID"
};
```

6. Descomentar los scripts de Firebase en `index.html` y `home.html`:

```html
<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-auth.js"></script>
```

### 2. Publicar en GitHub Pages

1. Crear repositorio en GitHub
2. Subir archivos manualmente o usar Git
3. Activar GitHub Pages en Settings → Pages
4. Verificar funcionamiento

## 🎨 Paleta de Colores

- **Primary**: #8B0000 (Rojo oscuro)
- **Secondary**: #FF4500 (Naranja rojizo)
- **Accent**: #00FF00 (Verde neón)
- **Dark**: #0a0a0a (Negro)
- **Text**: #e0e0e0 (Gris claro)

## 🎯 Tipografías

- **Títulos**: Metal Mania (Google Fonts)
- **Horror**: Creepster (Google Fonts)
- **General**: Orbitron (Google Fonts)

## 💻 Tecnologías Utilizadas

- HTML5
- CSS3 (Grid, Flexbox, Animaciones)
- JavaScript (ES6+)
- Firebase Authentication (pendiente)
- GitHub Pages (pendiente)

## 📝 Notas

- El login actual es temporal y usa `sessionStorage`
- Las imágenes de personajes son placeholders con emojis
- El video usa un ejemplo de W3Schools
- Todos los efectos son CSS puro, sin librerías externas

## 🔐 Credenciales de Prueba (Temporales)

Cualquier email y contraseña de 6+ caracteres funcionará en el modo temporal.

Cuando Firebase esté configurado:
- Email: usuario@ejemplo.com
- Password: 123456

## 👨‍💻 Autor

Proyecto creado para la asignatura de **Aplicaciones Web**
- Universidad Tecnológica del Centro
- Carrera: Desarrollo de Software e Innovación Digital

## 📅 Fecha de Entrega

28 de Noviembre de 2025

---

**⚠ ADVERTENCIA: SOLO PERSONAL AUTORIZADO DEL GRUPO 935 ⚠**

🧟 *"The path is placed before us. For now, we must walk it."* - Edward Richtofen
```
