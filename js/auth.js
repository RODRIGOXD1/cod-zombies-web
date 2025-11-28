// ============================================
// PROTECCIÓN DE PÁGINA HOME
// ============================================

// Verificar si el usuario está autenticado
// NOTA: Cuando agregues Firebase, esto se reemplazará con:
// firebase.auth().onAuthStateChanged(user => {
//     if (!user) {
//         window.location.href = "index.html";
//     } else {
//         // Usuario autenticado - mostrar información
//         console.log("Usuario autenticado:", user.email);
//     }
// });

// Verificar autenticación con Firebase
firebase.auth().onAuthStateChanged(user => {
    if (!user) {
        // No está autenticado - redirigir al login
        window.location.href = "index.html";
    } else {
        // Usuario autenticado
        console.log("✅ Usuario autenticado:", user.email);
    }
});
// ============================================
// BOTÓN DE CERRAR SESIÓN
// ============================================

const cerrarBtn = document.getElementById("cerrar");

if (cerrarBtn) {
    cerrarBtn.addEventListener("click", () => {
        // Animación de salida
        cerrarBtn.innerText = "🔓 Cerrando sesión...";
        cerrarBtn.disabled = true;
        
        setTimeout(() => {
            // NOTA: Cuando agregues Firebase, esto se reemplazará con:
            // auth.signOut().then(() => {
            //     sessionStorage.clear();
            //     window.location.href = "index.html";
            // });
            
           // Cerrar sesión con Firebase
            auth.signOut().then(() => {
                window.location.href = "index.html";
            });
        }, 800);
    });
}

// ============================================
// CONTROL DEL VIDEO Y MÚSICA DE FONDO
// ============================================

// Reproducir video automáticamente después de 2 segundos
window.addEventListener('load', () => {
    const video = document.getElementById("missionVideo");
    const backgroundMusic = document.getElementById("backgroundMusic");
    
    if (video) {
        // Configurar volumen de la música (50% por defecto)
        if (backgroundMusic) {
            backgroundMusic.volume = 0.5;
        }
        
        // Efecto de carga
        setTimeout(() => {
            // Intentar reproducir automáticamente (algunos navegadores lo bloquean)
            video.play().catch(err => {
                console.log("La reproducción automática fue bloqueada. El usuario debe hacer clic en play.");
            });
        }, 2000);
        
        // ============================================
        // EVENTOS DEL VIDEO - CONTROL DE MÚSICA
        // ============================================
        
        // Cuando el video se reproduce, pausar la música
        video.addEventListener('play', () => {
            console.log("📹 Reproduciendo archivo clasificado...");
            
            if (backgroundMusic && !backgroundMusic.paused) {
                backgroundMusic.pause();
                console.log("🎵 Música de fondo pausada");
            }
        });
        
        // Cuando el video se pausa, reproducir la música
        video.addEventListener('pause', () => {
            console.log("⏸️ Video pausado");
            
            if (backgroundMusic && backgroundMusic.paused) {
                backgroundMusic.play().catch(err => {
                    console.log("No se pudo reproducir la música automáticamente:", err);
                });
                console.log("🎵 Música de fondo reproduciendo...");
            }
        });
        
        // Cuando el video termina, reproducir la música
        video.addEventListener('ended', () => {
            console.log("✅ Archivo completado");
            
            if (backgroundMusic && backgroundMusic.paused) {
                backgroundMusic.play().catch(err => {
                    console.log("No se pudo reproducir la música automáticamente:", err);
                });
                console.log("🎵 Música de fondo reproduciendo...");
            }
        });
    }
});

// ============================================
// EFECTOS VISUALES ADICIONALES
// ============================================

// Animación de aparición de elementos al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

// Observar todas las tarjetas
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.character-card, .perk-card, .weapon-card');
    
    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});

// Efecto de parpadeo aleatorio en el título
setInterval(() => {
    const titles = document.querySelectorAll('.glitch');
    titles.forEach(title => {
        if (Math.random() > 0.9) {
            title.style.textShadow = `
                0 0 20px #ff0000,
                0 0 40px #ff0000,
                2px 2px 0 #00ff00,
                -2px -2px 0 #ff0000
            `;
            setTimeout(() => {
                title.style.textShadow = `
                    0 0 10px #ff0000,
                    0 0 20px #ff0000,
                    0 0 30px #ff0000
                `;
            }, 100);
        }
    });
}, 2000);

// Console Easter Egg
console.log(`
%c
██████╗ ██╗      █████╗  ██████╗██╗  ██╗     ██████╗ ██████╗ ███████╗
██╔══██╗██║     ██╔══██╗██╔════╝██║ ██╔╝    ██╔═══██╗██╔══██╗██╔════╝
██████╔╝██║     ███████║██║     █████╔╝     ██║   ██║██████╔╝███████╗
██╔══██╗██║     ██╔══██║██║     ██╔═██╗     ██║   ██║██╔═══╝ ╚════██║
██████╔╝███████╗██║  ██║╚██████╗██║  ██╗    ╚██████╔╝██║     ███████║
╚═════╝ ╚══════╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝     ╚═════╝ ╚═╝     ╚══════╝
%c
🧟 ZOMBIES MODE ACTIVATED 🧟
Grupo 935 - Investigación Clasificada
Element 115 Research Division
`, 
'color: #8B0000; font-weight: bold;',
'color: #00FF00; font-weight: bold; font-size: 14px;'
);

console.log("%c⚠ ADVERTENCIA: Esta consola está siendo monitoreada por el Grupo 935", 
    "color: #FF4500; font-size: 12px; font-weight: bold;");
