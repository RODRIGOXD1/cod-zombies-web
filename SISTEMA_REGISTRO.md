# 📝 GUÍA DEL SISTEMA DE REGISTRO

## 🎮 CÓMO FUNCIONA

### 1️⃣ **REGISTRAR UNA NUEVA CUENTA**

1. Abre `index.html` (página de login)
2. Haz clic en **"Regístrate aquí"** (abajo del botón)
3. Serás redirigido a `register.html`
4. Completa el formulario:
   - **Correo electrónico**: ejemplo@gmail.com
   - **Contraseña**: mínimo 6 caracteres
   - **Confirmar contraseña**: debe coincidir

5. Haz clic en **"REGISTRAR AGENTE"**
6. Si todo está bien: ✅ "Cuenta creada exitosamente"
7. Serás redirigido automáticamente a `home.html`

---

### 2️⃣ **INICIAR SESIÓN CON CUENTA REGISTRADA**

1. Abre `index.html` (página de login)
2. Ingresa el correo y contraseña que registraste
3. Haz clic en **"INICIAR MISIÓN"**
4. Si las credenciales son correctas: ✅ Login exitoso
5. Si son incorrectas: ❌ "Correo o contraseña incorrectos"

---

## 🔐 VALIDACIONES DEL REGISTRO

### ✅ **Validación de Email:**
- Formato válido (usuario@dominio.com)
- No puede empezar/terminar con punto
- Solo un símbolo @
- Dominio debe incluir punto
- Extensión mínima de 2 letras

### ✅ **Validación de Contraseña:**
- Mínimo 6 caracteres
- No puede estar vacía

### ✅ **Confirmación de Contraseña:**
- Debe coincidir exactamente con la contraseña
- Validación en tiempo real (mientras escribes)

### ✅ **Email Duplicado:**
- No puedes registrar dos veces el mismo correo
- Error: "Este correo ya está registrado"

---

## 🎨 **INDICADORES VISUALES**

### **Borde de campos:**
- 🔴 **ROJO** = Campo inválido
- 🟢 **VERDE** = Campo válido
- ⚫ **GRIS** = Sin validar
- 🔴 **OSCURO** = Campo activo (escribiendo)

### **Mensajes:**
- ❌ **ROJO** = Error (con explicación específica)
- 🟢 **VERDE** = Éxito
- ⏳ **VERDE** = Procesando...

---

## 🧪 **EJEMPLOS DE PRUEBA**

### **Caso 1: Registro exitoso**
```
1. Ir a register.html
2. Email: test@gmail.com
3. Contraseña: 123456
4. Confirmar: 123456
5. Clic en "REGISTRAR AGENTE"
✅ Resultado: Cuenta creada → Redirige a home.html
```

### **Caso 2: Contraseñas no coinciden**
```
1. Email: admin@hotmail.com
2. Contraseña: 123456
3. Confirmar: 654321
4. Clic en "REGISTRAR AGENTE"
❌ Error: "Las contraseñas no coinciden"
```

### **Caso 3: Email duplicado**
```
1. Registrar: test@gmail.com (primera vez)
✅ Cuenta creada

2. Intentar registrar test@gmail.com otra vez
❌ Error: "Este correo ya está registrado"
```

### **Caso 4: Contraseña muy corta**
```
1. Email: user@yahoo.com
2. Contraseña: 12345
3. Confirmar: 12345
4. Clic en "REGISTRAR AGENTE"
❌ Error: "La contraseña debe tener al menos 6 caracteres"
```

### **Caso 5: Login con cuenta registrada**
```
1. Registrar: prueba@gmail.com / password: abc123
✅ Cuenta creada

2. Cerrar sesión
3. Ir a index.html
4. Email: prueba@gmail.com
5. Password: abc123
6. Clic en "INICIAR MISIÓN"
✅ Acceso concedido → Redirige a home.html
```

### **Caso 6: Login con credenciales incorrectas**
```
1. Email: prueba@gmail.com
2. Password: incorrect123
3. Clic en "INICIAR MISIÓN"
❌ Error: "Correo o contraseña incorrectos"
```

---

## 📂 **ALMACENAMIENTO (VERSIÓN TEMPORAL)**

### **Dónde se guardan las cuentas:**
- **localStorage**: Almacenamiento permanente del navegador
- **Clave**: `zombiesUsers`
- **Formato**: Array de objetos JSON

### **Ejemplo de datos almacenados:**
```json
[
  {
    "email": "test@gmail.com",
    "password": "123456"
  },
  {
    "email": "admin@hotmail.com",
    "password": "abc123"
  }
]
```

### **Ver tus cuentas registradas:**
1. Abre la consola del navegador (F12)
2. Ve a la pestaña "Console"
3. Escribe:
```javascript
JSON.parse(localStorage.getItem('zombiesUsers'))
```
4. Presiona Enter
5. Verás todas las cuentas registradas

### **Borrar todas las cuentas:**
```javascript
localStorage.removeItem('zombiesUsers')
```

---

## 🔄 **FLUJO COMPLETO**

```
┌─────────────────────────────────────┐
│      PÁGINA DE LOGIN                │
│      (index.html)                   │
│                                     │
│  ¿No tienes cuenta?                 │
│  [Regístrate aquí] ←───────┐       │
└─────────────────────────────────────┘
                │                      
                ↓                      
┌─────────────────────────────────────┐
│      PÁGINA DE REGISTRO             │
│      (register.html)                │
│                                     │
│  📧 Email                           │
│  🔒 Contraseña                      │
│  🔐 Confirmar Contraseña            │
│                                     │
│  [REGISTRAR AGENTE]                 │
│                                     │
│  ¿Ya tienes cuenta?                 │
│  [Iniciar Sesión] ──────────────────┤
└─────────────────────────────────────┘
                │                      
                │ (registro exitoso)  
                ↓                      
┌─────────────────────────────────────┐
│         PÁGINA HOME                 │
│         (home.html)                 │
│                                     │
│  Sesión iniciada automáticamente    │
│  Email: usuario@gmail.com           │
│                                     │
│  [CERRAR SESIÓN] → index.html       │
└─────────────────────────────────────┘
```

---

## 🔧 **CON FIREBASE (FUTURO)**

Cuando agregues Firebase, el sistema funcionará así:

### **Registro:**
```javascript
auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Usuario creado en Firebase
        // Auto-login y redirección
    })
    .catch((error) => {
        // Manejar errores de Firebase
        // email-already-in-use, weak-password, etc.
    });
```

### **Login:**
```javascript
auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Login exitoso
        // Redirección a home
    })
    .catch((error) => {
        // Credenciales incorrectas
    });
```

---

## ⚠️ **IMPORTANTE**

### **Modo actual (Sin Firebase):**
- ✅ Las cuentas se guardan en localStorage
- ✅ Solo en tu navegador
- ❌ No son persistentes entre diferentes navegadores
- ❌ Se borran si limpias los datos del navegador
- ⚠️ Las contraseñas NO están encriptadas (solo para desarrollo)

### **Con Firebase (Futuro):**
- ✅ Cuentas guardadas en la nube
- ✅ Acceso desde cualquier dispositivo
- ✅ Contraseñas encriptadas
- ✅ Persistencia real
- ✅ Recuperación de contraseña
- ✅ Verificación de email

---

## 🎯 **NAVEGACIÓN ENTRE PÁGINAS**

### **Desde Login → Registro:**
```
index.html → "Regístrate aquí" → register.html
```

### **Desde Registro → Login:**
```
register.html → "Iniciar Sesión" → index.html
```

### **Después de registrarse:**
```
register.html → (auto) → home.html
```

### **Después de iniciar sesión:**
```
index.html → (auto) → home.html
```

---

## 💡 **TIPS**

1. **Primera vez**: Si nunca has registrado una cuenta, puedes usar cualquier email/contraseña válidos para entrar (modo de prueba)

2. **Después del primer registro**: El sistema empezará a validar las credenciales contra las cuentas registradas

3. **Olvidaste tu contraseña**: Borra el localStorage y vuelve a registrarte (sin Firebase no hay recuperación)

4. **Ver si tienes cuentas**: Abre la consola (F12) y escribe:
```javascript
console.log(JSON.parse(localStorage.getItem('zombiesUsers')))
```

---

**🎮 ¡Ahora tu sitio tiene sistema completo de registro y login! 🧟**

*"A new recruit joins the fight..."* - Grupo 935
