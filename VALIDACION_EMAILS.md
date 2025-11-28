# 📧 VALIDACIÓN DE EMAILS - GUÍA COMPLETA

## ✅ EMAILS VÁLIDOS (Funcionarán)

```
✓ usuario@gmail.com
✓ test@hotmail.com
✓ admin@yahoo.com
✓ contacto@outlook.com
✓ info@empresa.com
✓ juan.perez@gmail.com
✓ maria_lopez@hotmail.com
✓ carlos-garcia@yahoo.es
✓ soporte123@dominio.com
✓ usuario.nombre.apellido@gmail.com
✓ test_2024@correo.mx
✓ admin@sub.dominio.com
✓ usuario@dominio.co.uk
```

---

## ❌ EMAILS INVÁLIDOS (No funcionarán)

### **Sin símbolo @**
```
✗ usuario.gmail.com
  Error: "Dirección de correo electrónico no válida"

✗ testhotmail.com
  Error: "Dirección de correo electrónico no válida"
```

### **Múltiples @ (más de uno)**
```
✗ usuario@@gmail.com
  Error: "El correo debe tener solo un símbolo @"

✗ test@correo@gmail.com
  Error: "El correo debe tener solo un símbolo @"
```

### **Sin dominio o dominio incompleto**
```
✗ usuario@
  Error: "Dominio de correo no válido"

✗ usuario@g
  Error: "Dominio de correo no válido"

✗ usuario@gm
  Error: "Dominio de correo no válido"
```

### **Sin punto en el dominio**
```
✗ usuario@gmailcom
  Error: "El dominio debe incluir un punto (ej: gmail.com)"

✗ test@hotmail
  Error: "El dominio debe incluir un punto (ej: gmail.com)"
```

### **Extensión de dominio inválida**
```
✗ usuario@gmail.c
  Error: "Extensión de dominio no válida"

✗ test@hotmail.x
  Error: "Extensión de dominio no válida"
```

### **Empieza o termina con punto**
```
✗ .usuario@gmail.com
  Error: "El correo no puede empezar o terminar con punto"

✗ usuario.@gmail.com
  Error: "El correo no puede empezar o terminar con punto"
```

### **Con espacios**
```
✗ usuario @gmail.com
  Error: "Dirección de correo electrónico no válida"

✗ test@ gmail.com
  Error: "Dirección de correo electrónico no válida"

✗ user name@gmail.com
  Error: "Dirección de correo electrónico no válida"
```

### **Caracteres especiales inválidos**
```
✗ usuario#@gmail.com
  Error: "Dirección de correo electrónico no válida"

✗ test$@hotmail.com
  Error: "Dirección de correo electrónico no válida"

✗ admin%@yahoo.com
  Error: "Dirección de correo electrónico no válida"

✗ user&@gmail.com
  Error: "Dirección de correo electrónico no válida"
```

**Nota:** Solo se permiten: letras, números, puntos (.), guiones (-) y guión bajo (_)

---

## 🎯 EJEMPLOS DE PRUEBA

### Test 1: Gmail mal escrito
```
Entrada: usuario@gmailcom
Resultado: ❌ "El dominio debe incluir un punto (ej: gmail.com)"
```

### Test 2: Sin @
```
Entrada: usuariogmail.com
Resultado: ❌ "Dirección de correo electrónico no válida"
```

### Test 3: Doble @
```
Entrada: usuario@@gmail.com
Resultado: ❌ "El correo debe tener solo un símbolo @"
```

### Test 4: Sin dominio completo
```
Entrada: usuario@g
Resultado: ❌ "Dominio de correo no válido"
```

### Test 5: Extensión incompleta
```
Entrada: usuario@gmail.c
Resultado: ❌ "Extensión de dominio no válida"
```

### Test 6: Email válido de Gmail
```
Entrada: usuario@gmail.com
Resultado: ✅ Borde VERDE → Login exitoso
```

### Test 7: Email válido de Hotmail
```
Entrada: test@hotmail.com
Resultado: ✅ Borde VERDE → Login exitoso
```

---

## 🎨 INDICADORES VISUALES

### Mientras escribes:
- **Borde ROJO** + Brillo rojo = Email inválido
- **Borde VERDE** + Brillo verde = Email válido
- **Borde GRIS** = Sin validar (campo vacío)
- **Borde ROJO OSCURO** = Campo activo (escribiendo)

### Al enviar el formulario:
- **Mensaje rojo** = Error específico
- **Mensaje verde** = "Verificando credenciales..."
- **Mensaje verde** = "Acceso concedido"

---

## 📋 REGLAS DE VALIDACIÓN

### Estructura de un email válido:
```
usuario@dominio.extension

Donde:
- usuario: letras, números, punto, guión, guión bajo
- @: obligatorio, solo UNO
- dominio: letras, números, punto, guión (mínimo 3 caracteres)
- extensión: letras (mínimo 2 caracteres)
```

### Ejemplos desglosados:

**juan.perez@gmail.com**
- ✅ usuario: juan.perez (letras + punto)
- ✅ @: presente, solo uno
- ✅ dominio: gmail (5 caracteres)
- ✅ extensión: com (3 caracteres)

**test_123@empresa.co.mx**
- ✅ usuario: test_123 (letras + guión bajo + números)
- ✅ @: presente, solo uno
- ✅ dominio: empresa.co (con subdominio)
- ✅ extensión: mx (2 caracteres)

---

## 🧪 CASOS ESPECIALES

### Dominios con subdominio (✅ VÁLIDOS):
```
✓ usuario@mail.google.com
✓ admin@empresa.com.mx
✓ test@sub.dominio.com
✓ info@support.microsoft.com
```

### Emails internacionales (✅ VÁLIDOS):
```
✓ usuario@correo.es
✓ admin@email.fr
✓ test@mail.de
✓ info@correo.mx
✓ soporte@empresa.co.uk
```

### Números en el email (✅ VÁLIDOS):
```
✓ usuario123@gmail.com
✓ test2024@hotmail.com
✓ admin1@empresa.com
✓ 123usuario@yahoo.com
```

---

## 💡 TIPS PARA USUARIOS

### ✅ Cómo escribir un email válido:
1. Escribe tu usuario (sin espacios)
2. Agrega el símbolo @ (solo uno)
3. Escribe el dominio completo (ej: gmail.com)
4. Verifica que el borde se ponga VERDE

### ❌ Errores comunes a evitar:
- No olvides el @
- No pongas espacios
- Escribe el dominio completo (gmail.com, no gmailcom)
- Usa solo un @
- Verifica que la extensión tenga al menos 2 letras

---

## 🔍 DEBUGGING (Para desarrolladores)

### Ver validación en consola:

Abre la consola del navegador (F12) y verás:
```javascript
// Email válido
Email: usuario@gmail.com
✅ Formato válido
✅ 1 símbolo @
✅ Dominio válido: gmail.com
✅ Extensión válida: com

// Email inválido
Email: usuario@gmailcom
❌ Dominio sin punto
```

### Regex usado:
```javascript
/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

Explicación:
^              : Inicio del string
[a-zA-Z0-9._-]+ : Usuario (letras, números, ., _, -)
@              : Símbolo @ obligatorio
[a-zA-Z0-9.-]+ : Dominio (letras, números, ., -)
\.             : Punto literal antes de extensión
[a-zA-Z]{2,}   : Extensión (mínimo 2 letras)
$              : Fin del string
```

---

## 🎮 PROBANDO LA VALIDACIÓN

### Pasos para probar:

1. Abre `index.html` en tu navegador
2. Intenta estos emails:

```
❌ Probar: usuario@gmailcom
   Ver: Mensaje de error

❌ Probar: test
   Ver: Mensaje de error

❌ Probar: admin@@gmail.com
   Ver: Mensaje de error

✅ Probar: test@gmail.com
   Ver: Borde verde + login exitoso
```

3. Observa los cambios de color en el borde
4. Lee los mensajes de error específicos

---

## 🚀 VENTAJAS DE ESTA VALIDACIÓN

✅ **Detecta errores comunes** (sin @, sin dominio, etc.)
✅ **Retroalimentación visual** (bordes de colores)
✅ **Mensajes específicos** (el usuario sabe qué corregir)
✅ **Validación en tiempo real** (mientras escribe)
✅ **Compatible con todos los dominios** (gmail, hotmail, yahoo, etc.)
✅ **Previene errores de tipeo** (gmailcom, @gmail, etc.)

---

**🎮 ¡Ahora tu login detecta emails mal escritos como gmailcom, @gmail, usuario@@gmail, etc.! 🧟**
