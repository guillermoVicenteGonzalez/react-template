# React + TypeScript + Vite

## Todos

- [x] Estructura de directorios
- [ ] Blueprints
  - [x] Components
  - [ ] Layouts
  - [ ] Views
  - [ ] Widgets
  - [ ] Services ?
  - [ ] Hooks ?
  - [ ] Stores ?
- [x] Eslint + prettier
- [x] tsconfig
  - [x] Absolute imports
- [x] Router
- [x] Redux => zustand
- [x] Storybook
- [x] vscode configs
- [ ] Docker
- [ ] Husky + conventional commits
- [ ] ficheros .env
- [ ] Readme
- [x] Base css
- [ ] Other modules
  <!-- - [ ] Tailwind ? -->
  - [x] Scss
  - [x] Axios
  - [ ] CVA

### Estructura de directorios: "Screaming Architecture"

El patrón "Screaming architecture" tiene como premisa principal conseguir que sea la propia arquitectura la que describa el mismo en lugar de describir el framework o herramienta utilizado. En el caso de react, un enfoque mas tradicional organizaría los directorios en "components", "views", "hooks".

El patrón que se propone es hibrido, la estructura de directorios de primer nivel seguira lo propuesto por "Screaming architecture" organizando los subniveles según el area del sistema al que afecten, por ejemplo, en una aplicacion de tienda online, el primer nivel podria ser "login", "chart",... de manera que login encapsule el codigo que UNICAMENTE tiene que ver con el proceso de login, etc. Se utilizará el directorio "common" para almacenar codigo de funcionalidad mas general o que abarca más areas.

Los subniveles inferiores seguiran un patrón mas tradicional organizando los directorios por "tipo de codigo". El resultado es el siguiente

- src

  - modules

    - common

      - components
      - layouts
      - ...

    - login
    - components
      ...

    - chart
      - components
        ...

### Tipos de componente

### Blueprints

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
	languageOptions: {
		// other options...
		parserOptions: {
			project: ["./tsconfig.node.json", "./tsconfig.app.json"],
			tsconfigRootDir: import.meta.dirname,
		},
	},
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
	// Set the react version
	settings: { react: { version: "18.3" } },
	plugins: {
		// Add the react plugin
		react,
	},
	rules: {
		// other rules...
		// Enable its recommended rules
		...react.configs.recommended.rules,
		...react.configs["jsx-runtime"].rules,
	},
});
```
