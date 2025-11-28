// ============================================
// FIREBASE YA ESTÁ CONFIGURADO EN app.js
// Aquí solo obtenemos la referencia de auth
// ============================================



// ============================================
// LÓGICA DEL REGISTRO
// ============================================

const registerForm = document.getElementById("registerForm");
const mensajeRegistro = document.getElementById("mensajeRegistro");

if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const email = document.getElementById("registerEmail").value.trim();
        const password = document.getElementById("registerPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        
        // Limpiar mensaje anterior
        mensajeRegistro.innerText = "";
        
        // ============================================
        // VALIDACIONES ESPECÍFICAS
        // ============================================
        
        // 1. Verificar que el email no esté vacío
        if (!email) {
            mensajeRegistro.innerText = "❌ Error: Debes ingresar un correo electrónico";
            mensajeRegistro.style.color = "#FF4500";
            return;
        }
        
        // 2. Validar formato de email (más estricto)
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
        if (!emailRegex.test(email)) {
            mensajeRegistro.innerText = "❌ Error: Dirección de correo electrónico no válida";
            mensajeRegistro.style.color = "#FF4500";
            return;
        }
        
        // 3. Validaciones adicionales de formato
        if (email.startsWith('.') || email.endsWith('.')) {
            mensajeRegistro.innerText = "❌ Error: El correo no puede empezar o terminar con punto";
            mensajeRegistro.style.color = "#FF4500";
            return;
        }
        
        const atCount = (email.match(/@/g) || []).length;
        if (atCount !== 1) {
            mensajeRegistro.innerText = "❌ Error: El correo debe tener solo un símbolo @";
            mensajeRegistro.style.color = "#FF4500";
            return;
        }
        
        const parts = email.split('@');
        const domain = parts[1];
        
        if (!domain || domain.length < 3) {
            mensajeRegistro.innerText = "❌ Error: Dominio de correo no válido";
            mensajeRegistro.style.color = "#FF4500";
            return;
        }
        
        if (!domain.includes('.')) {
            mensajeRegistro.innerText = "❌ Error: El dominio debe incluir un punto (ej: gmail.com)";
            mensajeRegistro.style.color = "#FF4500";
            return;
        }
        
        const domainParts = domain.split('.');
        const extension = domainParts[domainParts.length - 1];
        
        if (extension.length < 2) {
            mensajeRegistro.innerText = "❌ Error: Extensión de dominio no válida";
            mensajeRegistro.style.color = "#FF4500";
            return;
        }
        
        // 4. Verificar que la contraseña no esté vacía
        if (!password) {
            mensajeRegistro.innerText = "❌ Error: Debes ingresar una contraseña";
            mensajeRegistro.style.color = "#FF4500";
            return;
        }
        
        // 5. Verificar longitud mínima de contraseña
        if (password.length < 6) {
            mensajeRegistro.innerText = "❌ Error: La contraseña debe tener al menos 6 caracteres";
            mensajeRegistro.style.color = "#FF4500";
            return;
        }
        
        // 6. Verificar que las contraseñas coincidan
        if (password !== confirmPassword) {
            mensajeRegistro.innerText = "❌ Error: Las contraseñas no coinciden";
            mensajeRegistro.style.color = "#FF4500";
            return;
        }
        
        // Mostrar mensaje de procesamiento
        mensajeRegistro.innerText = "⏳ Creando cuenta en el Grupo 935...";
        mensajeRegistro.style.color = "#00FF00";
        
        // Registrar usuario en Firebase
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                mensajeRegistro.innerText = "✅ Cuenta creada exitosamente! Redirigiendo al login...";
                mensajeRegistro.style.color = "#00FF00";
                
                setTimeout(() => {
                    window.location.href = "index.html";
                }, 1500);
            })
            .catch(err => {
                let errorMessage = "❌ Error: ";
                
                switch(err.code) {
                    case 'auth/email-already-in-use':
                        errorMessage += "Este correo ya está registrado. Intenta iniciar sesión.";
                        break;
                    case 'auth/invalid-email':
                        errorMessage += "Formato de correo inválido.";
                        break;
                    case 'auth/weak-password':
                        errorMessage += "La contraseña es muy débil. Usa al menos 6 caracteres.";
                        break;
                    default:
                        errorMessage += err.message;
                }
                
                mensajeRegistro.innerText = errorMessage;
                mensajeRegistro.style.color = "#FF4500";
            });
    });
    
    // ============================================
    // VALIDACIÓN EN TIEMPO REAL
    // ============================================
    
    const emailInput = document.getElementById("registerEmail");
    const passwordInput = document.getElementById("registerPassword");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    
    // Validar email mientras escribe
    emailInput.addEventListener("blur", () => {
        const email = emailInput.value.trim();
        
        if (email) {
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const atCount = (email.match(/@/g) || []).length;
            
            if (!emailRegex.test(email) || 
                atCount !== 1 || 
                email.startsWith('.') || 
                email.endsWith('.')) {
                emailInput.style.borderColor = "#FF4500";
                emailInput.style.boxShadow = "0 0 10px rgba(255, 69, 0, 0.5)";
            } else {
                const parts = email.split('@');
                const domain = parts[1];
                
                if (!domain || !domain.includes('.') || domain.length < 3) {
                    emailInput.style.borderColor = "#FF4500";
                    emailInput.style.boxShadow = "0 0 10px rgba(255, 69, 0, 0.5)";
                } else {
                    emailInput.style.borderColor = "#00FF00";
                    emailInput.style.boxShadow = "0 0 10px rgba(0, 255, 0, 0.3)";
                }
            }
        }
    });
    
    emailInput.addEventListener("focus", () => {
        emailInput.style.borderColor = "#8B0000";
        emailInput.style.boxShadow = "0 0 15px rgba(139, 0, 0, 0.5)";
        mensajeRegistro.innerText = "";
    });
    
    // Validar contraseña
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
        }
    });
    
    passwordInput.addEventListener("focus", () => {
        passwordInput.style.borderColor = "#8B0000";
        passwordInput.style.boxShadow = "0 0 15px rgba(139, 0, 0, 0.5)";
        mensajeRegistro.innerText = "";
    });
    
    // Validar confirmación de contraseña
    confirmPasswordInput.addEventListener("blur", () => {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        
        if (confirmPassword) {
            if (password !== confirmPassword) {
                confirmPasswordInput.style.borderColor = "#FF4500";
                confirmPasswordInput.style.boxShadow = "0 0 10px rgba(255, 69, 0, 0.5)";
            } else {
                confirmPasswordInput.style.borderColor = "#00FF00";
                confirmPasswordInput.style.boxShadow = "0 0 10px rgba(0, 255, 0, 0.3)";
            }
        }
    });
    
    confirmPasswordInput.addEventListener("focus", () => {
        confirmPasswordInput.style.borderColor = "#8B0000";
        confirmPasswordInput.style.boxShadow = "0 0 15px rgba(139, 0, 0, 0.5)";
        mensajeRegistro.innerText = "";
    });
    
    // Validar en tiempo real mientras escribe la confirmación
    confirmPasswordInput.addEventListener("input", () => {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        
        if (confirmPassword.length > 0) {
            if (password === confirmPassword) {
                confirmPasswordInput.style.borderColor = "#00FF00";
                confirmPasswordInput.style.boxShadow = "0 0 10px rgba(0, 255, 0, 0.3)";
            } else {
                confirmPasswordInput.style.borderColor = "#FF4500";
                confirmPasswordInput.style.boxShadow = "0 0 10px rgba(255, 69, 0, 0.5)";
            }
        }
    });
}

// ============================================
// EFECTOS VISUALES ADICIONALES
// ============================================

window.addEventListener('load', () => {
    const body = document.body;
    
    setInterval(() => {
        if (Math.random() > 0.95) {
            body.style.filter = 'hue-rotate(10deg)';
            setTimeout(() => {
                body.style.filter = 'none';
            }, 100);
        }
    }, 3000);
});





// Console Easter Egg
console.log(`
%c
██████╗ ███████╗ ██████╗ ██╗███████╗████████╗██████╗  ██████╗ 
██╔══██╗██╔════╝██╔════╝ ██║██╔════╝╚══██╔══╝██╔══██╗██╔═══██╗
██████╔╝█████╗  ██║  ███╗██║███████╗   ██║   ██████╔╝██║   ██║
██╔══██╗██╔══╝  ██║   ██║██║╚════██║   ██║   ██╔══██╗██║   ██║
██║  ██║███████╗╚██████╔╝██║███████║   ██║   ██║  ██║╚██████╔╝
╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝ 
%c
🧟 NUEVO RECLUTA - GRUPO 935 🧟
`, 
'color: #8B0000; font-weight: bold;',
'color: #00FF00; font-weight: bold; font-size: 14px;'
);
