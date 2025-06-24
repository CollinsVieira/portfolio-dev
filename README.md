# Portfolio Personal

Un portfolio personal moderno y responsive desarrollado con [Astro](https://astro.build) y [Tailwind CSS](https://tailwindcss.com).

## 🚀 Características

- **Diseño Responsive**: Se adapta perfectamente a dispositivos móviles, tablets y desktop
- **Rendimiento Optimizado**: Construido con Astro para máxima velocidad
- **Diseño Moderno**: Interfaz limpia y profesional con Tailwind CSS
- **Componentes Reutilizables**: Arquitectura modular con componentes Astro
- **Iconos SVG**: Iconos personalizados para tecnologías y redes sociales

## 🛠️ Tecnologías Utilizadas

- **Astro** - Framework web para sitios estáticos
- **Tailwind CSS** - Framework CSS utility-first
- **TypeScript** - Tipado estático
- **PNPM** - Gestor de paquetes

## 📦 Instalación

1. **Clona el repositorio**
   ```bash
   git clone <tu-repositorio>
   cd portfolio-dev
   ```

2. **Instala las dependencias**
   ```bash
   pnpm install
   ```

3. **Ejecuta el servidor de desarrollo**
   ```bash
   pnpm dev
   ```

4. **Abre tu navegador**
   ```
   http://localhost:4321
   ```

## 🏗️ Scripts Disponibles

- `pnpm dev` - Inicia el servidor de desarrollo
- `pnpm build` - Construye el proyecto para producción
- `pnpm preview` - Previsualiza la build de producción

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Badge.astro
│   ├── Experience.astro
│   ├── Header.astro
│   ├── Projects.astro
│   └── ...
├── icons/              # Iconos SVG personalizados
│   ├── React.astro
│   ├── Django.astro
│   └── ...
├── layouts/            # Layouts de página
├── pages/              # Páginas del sitio
├── styles/             # Estilos globales
└── assets/             # Imágenes y recursos
```

## 🎨 Personalización

### Agregar Nuevos Proyectos

Edita el array `PROJECTS` en `src/components/Projects.astro`:

```javascript
const PROJECTS = [
    {
        title: "Mi Nuevo Proyecto",
        description: "Descripción del proyecto",
        link: "#",
        image: "./src/assets/mi-imagen.webp",
        github: "https://github.com/usuario/repo",
        tags: ["React", "Node.js"],
    },
    // ...
];
```

### Agregar Nuevos Iconos

1. Crea un nuevo archivo `.astro` en `src/icons/`
2. Importa el icono en `Projects.astro`
3. Agrégalo al objeto `ICONS`

## 🚀 Despliegue

El proyecto está optimizado para despliegue en plataformas como:

- **Netlify**
- **Vercel**
- **GitHub Pages**
- **Cloudflare Pages**

## 📝 Licencia

Este proyecto es de uso personal. Siéntete libre de usarlo como base para tu propio portfolio.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request para sugerencias y mejoras.

---

Desarrollado con ❤️ usando Astro y Tailwind CSS

```sh
pnpm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
