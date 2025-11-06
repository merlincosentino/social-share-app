# 🌐 Social Share

![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

Una mini red social desarrollada con **Next.js 15**, **TypeScript**, **Redux Toolkit** y **TailwindCSS 4**. Permite a los usuarios autenticarse, crear publicaciones con imágenes o videos y comentar en tiempo real (simulado).

![social-share-cover](https://user-images.githubusercontent.com/merlincosentino/social-share-app/preview.png)

---

## 🚀 Demo

Visita la demo desplegada en Vercel:

🔗 **[https://social-share-app.vercel.app](https://social-share-app.vercel.app)**

🧑‍💻 **Credenciales de demostración:**

| Usuario       | Contraseña |
| ------------- | ---------- |
| demo@mail.com | 123456     |

---

## ✨ Características Principales

- **Autenticación de Usuarios:** Inicio de sesión con credenciales (email/contraseña) o a través de proveedores OAuth como GitHub.
- **Creación de Publicaciones:** Los usuarios pueden crear y compartir publicaciones que incluyen texto, imágenes y videos.
- **Feed de Publicaciones:** Un feed principal renderizado en el servidor (SSR) para un rendimiento óptimo.
- **Comentarios en Tiempo Real:** Sistema de comentarios simulado para una experiencia interactiva.
- **Diseño Responsive:** Interfaz adaptable a diferentes tamaños de pantalla gracias a TailwindCSS.

---

## 🛠️ Stack Tecnológico

- **Framework:** Next.js 15 (con App Router)
- **Autenticación:** NextAuth.js (Credentials y GitHub OAuth)
- **Gestión de Estado:** Redux Toolkit y Redux Persist
- **Formularios:** Formik y Yup para validaciones
- **Estilos:** TailwindCSS 4 con un color de marca configurable
- **Lenguaje:** TypeScript
- **Componentes:** Estructura basada en Atomic Design y Storybook para visualización.

---

## 🧠 Arquitectura

El proyecto sigue una estructura modular y escalable, organizando el código por funcionalidad y responsabilidad.

```
src/
├── app/              # Rutas y páginas de Next.js (App Router)
│   ├── feed/         # Feed principal (SSR)
│   └── ...
├── components/       # Componentes atómicos y reutilizables
├── features/         # Lógica de negocio y slices de Redux
├── interfaces/       # Tipos e interfaces globales de TypeScript
├── lib/              # Configuraciones y helpers (auth, datos mock)
└── store/            # Configuración de Redux, persistencia y providers
```

---

## ⚙️ Primeros Pasos

Sigue estos pasos para levantar el proyecto en tu entorno local.

### 1. Clonar el Repositorio

```bash
git clone https://github.com/merlincosentino/social-share-app.git
cd social-share-app
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Configurar Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto y añade las siguientes variables:

```env
GITHUB_ID=<tu client id>
GITHUB_SECRET=<tu client secret>
NEXTAUTH_SECRET=<string aleatorio>
NEXTAUTH_URL=http://localhost:3000
```

### 4. Ejecutar en Desarrollo

```bash
npm run dev
```

### 5. Abrir en el Navegador

Visita http://localhost:3000 para ver la aplicación en funcionamiento.

---

## 🎨 Personalización

### Color de Marca

El color principal del proyecto está centralizado en `globals.css` para una fácil personalización.

```css
:root {
---
  --brand: #9333ea; /* Púrpura por defecto */
  --brand-hover: #7e22ce;
}
```

Puedes usar estas variables directamente en TailwindCSS:

```html
<button className="text-brand hover:text-brand-hover">Click</button>
```

---

## 🧪 Storybook

El proyecto incluye Storybook para visualizar y desarrollar componentes atómicos de forma aislada.

```bash
npm run storybook
```

Historias disponibles:

- PrimaryButton.stories.tsx

- PostCard.stories.tsx

- UploadFileButton.stories.tsx

---

👨‍💻 Autor
**Merlín Cosentino** - Desarrollador Full Stack

📄 Licencia
Este proyecto fue desarrollado como desafío técnico.
Uso libre con atribución.
