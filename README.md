# 🌍 Hola Mundo — Práctica DevOps

Aplicación web "Hola Mundo" construida con **Node.js**, contenerizada con **Docker** y publicada en **Docker Hub**. Parte de la práctica de ciclo completo de DevOps.

---

## 📁 Estructura del proyecto

```
hola-mundo/
├── public/
│   └── index.html      # Página web
├── server.js           # Servidor Node.js
├── package.json        # Metadata del proyecto
├── Dockerfile          # Instrucciones para construir la imagen
├── .dockerignore       # Archivos ignorados por Docker
└── .gitignore          # Archivos ignorados por Git
```

---

## 🚀 Correr localmente (sin Docker)

```bash
node server.js
```

Abrir: http://localhost:3000

---

## 🐳 Docker — Paso a paso

### 1. Construir la imagen
```bash
docker build -t tuletta/hola-mundo .
```

### 2. Verificar que la imagen fue creada
```bash
docker images
```

### 3. Correr el contenedor localmente
```bash
docker run -p 3000:3000 tuletta/hola-mundo
```

Abrir: http://localhost:3000

### 4. (Opcional) Correr en background
```bash
docker run -d -p 3000:3000 --name hola-mundo tuletta/hola-mundo
```

### 5. Ver contenedores corriendo
```bash
docker ps
```

### 6. Detener el contenedor
```bash
docker stop hola-mundo
```

---

## 🌐 Subir imagen a Docker Hub

### 1. Iniciar sesión en Docker Hub
```bash
docker login
```
*(Ingresar tu usuario: `tuletta` y tu contraseña)*

### 2. Hacer push de la imagen
```bash
docker push tuletta/hola-mundo
```

### 3. Verificar en Docker Hub
Ir a: https://hub.docker.com/r/tuletta/hola-mundo

### 4. (Opcional) Descargar y correr desde Docker Hub
```bash
docker pull tuletta/hola-mundo
docker run -p 3000:3000 tuletta/hola-mundo
```

---

## 🔧 Git — Subir al repositorio

### Configuración inicial (solo la primera vez)
```bash
git config --global user.name "Tuletta"
git config --global user.email "tu-email@ejemplo.com"
```

### Inicializar y subir el proyecto
```bash
# 1. Inicializar repositorio Git local
git init

# 2. Agregar el remote apuntando a tu repo
git remote add origin https://github.com/Tuletta/-Practica-Entrega-Continua.git

# 3. Agregar todos los archivos al staging
git add .

# 4. Hacer el primer commit
git commit -m "feat: app hola mundo con Node.js, Dockerfile y README"

# 5. Renombrar la rama a main (si es necesario)
git branch -M main

# 6. Subir al repositorio remoto
git push -u origin main
```

### Actualizaciones futuras
```bash
git add .
git commit -m "descripción del cambio"
git push
```

---

## 🔄 Flujo DevOps completo

```
Código (Node.js)
     ↓
Git commit + push → GitHub
     ↓
docker build → Imagen local
     ↓
docker push → Docker Hub
     ↓
docker pull + run → Producción
```
