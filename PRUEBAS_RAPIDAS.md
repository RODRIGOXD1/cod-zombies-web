# 🧪 GUÍA RÁPIDA DE PRUEBAS - VALIDACIÓN DE EMAILS

## 🎯 Prueba estos casos para ver la validación en acción:

### ❌ CASO 1: Sin símbolo @
```
Escribe: usuariogmail.com
Resultado: ❌ "Dirección de correo electrónico no válida"
Borde: ROJO
```

### ❌ CASO 2: Gmail mal escrito (sin punto)
```
Escribe: usuario@gmailcom
Resultado: ❌ "El dominio debe incluir un punto (ej: gmail.com)"
Borde: ROJO
```

### ❌ CASO 3: Hotmail mal escrito
```
Escribe: test@hotmailcom
Resultado: ❌ "El dominio debe incluir un punto (ej: gmail.com)"
Borde: ROJO
```

### ❌ CASO 4: Doble arroba
```
Escribe: usuario@@gmail.com
Resultado: ❌ "El correo debe tener solo un símbolo @"
Borde: ROJO
```

### ❌ CASO 5: Solo arroba
```
Escribe: usuario@
Resultado: ❌ "Dominio de correo no válido"
Borde: ROJO
```

### ❌ CASO 6: Dominio incompleto
```
Escribe: usuario@g
Resultado: ❌ "Dominio de correo no válido"
Borde: ROJO
```

### ❌ CASO 7: Sin extensión completa
```
Escribe: usuario@gmail.c
Resultado: ❌ "Extensión de dominio no válida"
Borde: ROJO
```

### ❌ CASO 8: Con espacios
```
Escribe: usuario @gmail.com
Resultado: ❌ "Dirección de correo electrónico no válida"
Borde: ROJO
```

### ❌ CASO 9: Empieza con punto
```
Escribe: .usuario@gmail.com
Resultado: ❌ "El correo no puede empezar o terminar con punto"
Borde: ROJO
```

### ✅ CASO 10: Gmail correcto
```
Escribe: usuario@gmail.com
Resultado: ✅ Borde VERDE
Al hacer login: "✅ Acceso concedido. Redirigiendo..."
```

### ✅ CASO 11: Hotmail correcto
```
Escribe: test@hotmail.com
Resultado: ✅ Borde VERDE
Al hacer login: "✅ Acceso concedido. Redirigiendo..."
```

### ✅ CASO 12: Yahoo correcto
```
Escribe: admin@yahoo.com
Resultado: ✅ Borde VERDE
Al hacer login: "✅ Acceso concedido. Redirigiendo..."
```

### ✅ CASO 13: Email con números
```
Escribe: usuario123@gmail.com
Resultado: ✅ Borde VERDE
Al hacer login: "✅ Acceso concedido. Redirigiendo..."
```

### ✅ CASO 14: Email con guiones
```
Escribe: juan-perez@gmail.com
Resultado: ✅ Borde VERDE
Al hacer login: "✅ Acceso concedido. Redirigiendo..."
```

### ✅ CASO 15: Email con puntos
```
Escribe: juan.perez@gmail.com
Resultado: ✅ Borde VERDE
Al hacer login: "✅ Acceso concedido. Redirigiendo..."
```

---

## 🎨 COLORES DE VALIDACIÓN:

```
🔴 ROJO    = Email INVÁLIDO (error específico)
🟢 VERDE   = Email VÁLIDO (puede hacer login)
⚫ GRIS    = Sin validar (campo vacío)
🔴 OSCURO  = Campo activo (escribiendo)
```

---

## 📝 PASOS PARA PROBAR:

1. Abre `index.html` en tu navegador
2. Haz clic en el campo de email
3. Escribe uno de los casos de arriba
4. Haz clic fuera del campo (o presiona Tab)
5. Observa el color del borde
6. Si está verde, intenta hacer login con contraseña: `123456`

---

## 🎯 ERRORES MÁS COMUNES QUE AHORA DETECTA:

1. `gmailcom` en lugar de `gmail.com`
2. `@gmail` en lugar de `usuario@gmail.com`
3. `usuario` en lugar de `usuario@gmail.com`
4. `usuario@@gmail.com` (doble @)
5. `usuario @gmail.com` (con espacio)

---

**🎮 ¡Prueba todos los casos y verás cómo la validación funciona perfectamente! 🧟**
