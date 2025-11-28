// ============================================
// CONFIGURACIÓN DE FIREBASE
// (Se agregará cuando esté listo)
// ============================================

const firebaseConfig = {
  apiKey: "AIzaSyCBhHnDiEPDzhh7rM5nxUSFjN_FRPWxDcw",
  authDomain: "cod-zombies-web.firebaseapp.com",
  projectId: "cod-zombies-web",
  storageBucket: "cod-zombies-web.firebasestorage.app",
  messagingSenderId: "558578035176",
  appId: "1:558578035176:web:38c8fb795e4f21f86cdc5d"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();


// ============================================
// LÓGICA DEL LOGIN (VERSIÓN TEMPORAL)
// ============================================

// Por ahora usaremos un login temporal para probar la interfaz
const loginForm = document.getElementById("loginForm");
const mensajeElement = document.getElementById("mensaje");

if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        
        // Limpiar mensaje anterior
        mensajeElement.innerText = "";
        
        // VALIDACIONES ESPECÍFICAS
        
        // 1. Verificar que el email no esté vacío
        if (!email) {
            mensajeElement.innerText = "❌ Error: Debes ingresar un correo electrónico";
            mensajeElement.style.color = "#FF4500";
            return;
        }
        
        // 2. Validar formato de email (más estricto)
        // Acepta: usuario@dominio.com, usuario.nombre@dominio.com, etc.
        // Rechaza: espacios, caracteres especiales inválidos, sin @, sin dominio válido
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
        if (!emailRegex.test(email)) {
            mensajeElement.innerText = "❌ Error: Dirección de correo electrónico no válida";
            mensajeElement.style.color = "#FF4500";
            return;
        }
        
        // 3. Validaciones adicionales de formato
        // No puede empezar o terminar con punto
        if (email.startsWith('.') || email.endsWith('.')) {
            mensajeElement.innerText = "❌ Error: El correo no puede empezar o terminar con punto";
            mensajeElement.style.color = "#FF4500";
            return;
        }
        
        // Verificar que tenga un @ y solo uno
        const atCount = (email.match(/@/g) || []).length;
        if (atCount !== 1) {
            mensajeElement.innerText = "❌ Error: El correo debe tener solo un símbolo @";
            mensajeElement.style.color = "#FF4500";
            return;
        }
        
        // Verificar que tenga dominio válido después del @
        const parts = email.split('@');
        const domain = parts[1];
        
        if (!domain || domain.length < 3) {
            mensajeElement.innerText = "❌ Error: Dominio de correo no válido";
            mensajeElement.style.color = "#FF4500";
            return;
        }
        
        // Verificar que el dominio tenga un punto
        if (!domain.includes('.')) {
            mensajeElement.innerText = "❌ Error: El dominio debe incluir un punto (ej: gmail.com)";
            mensajeElement.style.color = "#FF4500";
            return;
        }
        
        // Verificar que la extensión del dominio sea válida (al menos 2 letras)
        const domainParts = domain.split('.');
        const extension = domainParts[domainParts.length - 1];
        
        if (extension.length < 2) {
            mensajeElement.innerText = "❌ Error: Extensión de dominio no válida";
            mensajeElement.style.color = "#FF4500";
            return;
        }
        
        // 3. Verificar que la contraseña no esté vacía
        if (!password) {
            mensajeElement.innerText = "❌ Error: Debes ingresar una contraseña";
            mensajeElement.style.color = "#FF4500";
            return;
        }
        
        // 4. Verificar longitud mínima de contraseña
        if (password.length < 6) {
            mensajeElement.innerText = "❌ Error: La contraseña debe tener al menos 6 caracteres";
            mensajeElement.style.color = "#FF4500";
            return;
        }
        
        // Mostrar mensaje de carga
        mensajeElement.innerText = "⏳ Verificando credenciales del Grupo 935...";
        mensajeElement.style.color = "#00FF00";
        
        // Autenticación con Firebase
        auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                mensajeElement.innerText = "✅ Acceso concedido. Redirigiendo...";
                mensajeElement.style.color = "#00FF00";
                
                setTimeout(() => {
                    window.location.href = "home.html";
                }, 1000);
            })
            .catch(err => {
                let errorMessage = "❌ Error: ";
                
                switch(err.code) {
                    case 'auth/user-not-found':
                        errorMessage += "Usuario no encontrado. Verifica tu correo.";
                        break;
                    case 'auth/wrong-password':
                        errorMessage += "Contraseña incorrecta.";
                        break;
                    case 'auth/invalid-email':
                        errorMessage += "Formato de correo inválido.";
                        break;
                    case 'auth/user-disabled':
                        errorMessage += "Esta cuenta ha sido deshabilitada.";
                        break;
                    case 'auth/too-many-requests':
                        errorMessage += "Demasiados intentos. Intenta más tarde.";
                        break;
                    default:
                        errorMessage += err.message;
                }
                
                mensajeElement.innerText = errorMessage;
                mensajeElement.style.color = "#FF4500";
            });
                }, 1000);
            } else {
                // Si no hay usuarios registrados, permitir acceso temporal (para pruebas)
                if (users.length === 0) {
                    sessionStorage.setItem("zombiesAuth", "true");
                    sessionStorage.setItem("userEmail", email);
                    
                    mensajeElement.innerText = "✅ Acceso concedido. Redirigiendo...";
                    mensajeElement.style.color = "#00FF00";
                    
                    setTimeout(() => {
                        window.location.href = "home.html";
                    }, 1000);
                } else {
                    // Credenciales incorrectas
                    mensajeElement.innerText = "❌ Error: Correo o contraseña incorrectos";
                    mensajeElement.style.color = "#FF4500";
                }
            }
        

    
    // VALIDACIÓN EN TIEMPO REAL
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    
    // Validar email mientras escribe (validación completa)
    emailInput.addEventListener("blur", () => {
        const email = emailInput.value.trim();
        
        if (email) {
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const atCount = (email.match(/@/g) || []).length;
            
            // Verificaciones básicas
            if (!emailRegex.test(email) || 
                atCount !== 1 || 
                email.startsWith('.') || 
                email.endsWith('.')) {
                emailInput.style.borderColor = "#FF4500";
                emailInput.style.boxShadow = "0 0 10px rgba(255, 69, 0, 0.5)";
            } else {
                // Verificar dominio
                const parts = email.split('@');
                const domain = parts[1];
                
                if (!domain || !domain.includes('.') || domain.length < 3) {
                    emailInput.style.borderColor = "#FF4500";
                    emailInput.style.boxShadow = "0 0 10px rgba(255, 69, 0, 0.5)";
                } else {
                    // Email válido - borde verde
                    emailInput.style.borderColor = "#00FF00";
                    emailInput.style.boxShadow = "0 0 10px rgba(0, 255, 0, 0.3)";
                }
            }
        } else {
            emailInput.style.borderColor = "#333";
            emailInput.style.boxShadow = "none";
        }
    });
    
    // Limpiar borde cuando empiece a escribir
    emailInput.addEventListener("focus", () => {
        emailInput.style.borderColor = "#8B0000";
        emailInput.style.boxShadow = "0 0 15px rgba(139, 0, 0, 0.5)";
        mensajeElement.innerText = "";
    });
    
    // Validación de contraseña en tiempo real
    passwordInput.addEventListener("blur", () => {
        const password = passwordInput.value;
        
        if (password) {
            if (password.length < 6) {
                passwordInput.style.borderColor = "#FF4500";
                passwordInput.style.boxShadow = "0 0 10px rgba(255, 69, 0, 0.5)";
            } else {
                passwordInput.style.borderColor = "#00FF00";
                passwordInput.style.boxShadow = "0 0 10px rgba(0, 255, 0, 0.3)";
            }
        } else {
            passwordInput.style.borderColor = "#333";
            passwordInput.style.boxShadow = "none";
        }
    });
    
    passwordInput.addEventListener("focus", () => {
        passwordInput.style.borderColor = "#8B0000";
        passwordInput.style.boxShadow = "0 0 15px rgba(139, 0, 0, 0.5)";
        mensajeElement.innerText = "";
    });


// ============================================
// EFECTOS VISUALES ADICIONALES
// ============================================

// Efecto de escritura en el título (opcional)
window.addEventListener('load', () => {
    // Añadir efectos de sangre aleatoria
    const body = document.body;
    
    // Crear efecto de interferencia ocasional
    setInterval(() => {
        if (Math.random() > 0.95) {
            body.style.filter = 'hue-rotate(10deg)';
            setTimeout(() => {
                body.style.filter = 'none';
            }, 100);
        }
    }, 3000);
});

// Efecto de sonido al hacer hover en botones (opcional)
// Puedes descomentar esto si quieres agregar efectos de sonido
/*
const buttons = document.querySelectorAll('button');
buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        // Aquí puedes agregar un sonido
        // const audio = new Audio('path/to/sound.mp3');
        // audio.play();
    });
});
*/
