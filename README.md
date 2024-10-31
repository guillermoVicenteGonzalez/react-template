# React + TypeScript + Vite

## Arquitectura: "Screaming Architecture"

El patrón "Screaming architecture" tiene como premisa principal conseguir que sea la propia arquitectura la que describa el mismo en lugar de describir el framework o herramienta utilizado. En el caso de react, un enfoque más tradicional organizaría los directorios en "components", "views", "hooks".

El patrón que se propone es híbrido, la estructura de directorios de primer nivel seguirá lo propuesto por "Screaming architecture" organizando los subniveles según el área del sistema al que afecten, por ejemplo, en una aplicación de tienda online, el primer nivel podría ser "login", "chart",... de manera que login encapsule el código que ÚNICAMENTE tiene que ver con el proceso de login, etc. Se utilizará el directorio "common" para almacenar código de funcionalidad más general o que abarca más áreas.

Los subniveles inferiores seguirán un patrón más tradicional, organizando los directorios por "tipo de código". El resultado es el siguiente

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

## Uso del repositorio y recomendaciones

### Blueprints

El arquetipo está sigue lo propuesto por "screaming architecture" pero toma ciertos conceptos de otros modelos como atomic design. Teniendo esto en cuenta, diferenciaremos los componentes de react en componentes, widgets, layouts y vistas, siendo los componentes los "átomos" y el resto de estructuras "Moléculas" cada vez más complejas.

Si se usa vscode, se ha incluido en la sección de extensiones recomendadas "teamchilla blueprints", que permite crear componente (o widgets, views etc) de manera automatizada y asegurando que se siguen todos los principios de diseño y buenas prácticas de código establecidos.

Para crear un componente basado en una blueprint, una vez instalada la extensión simplemente hay que hacer click derecho y seleccionar la opción "new file from blueprint". Esto creará un nuevo directorio con los siguientes ficheros fuente:

- `componente.tipo.tsx`: El fichero fuente principal del componente
- `componente.module.scss`: El fichero de estilos del componente. Se puede cambiar a css normal si se desea.
- `index.ts`: un simple fichero que facilita la exportación del componente
- `componente.stories.tsx`: El fichero necesario para que nuestro componente sea visible a través de storybook.

Se puede modificar la estructura del componente creado si así se desea, pero es recomendable no hacerlo para seguir un estilo consistente en el proyecto.

#### Ficheros

- `.blueprints/*`: cada directorio incluido compone una blueprint

## Modulos y dependencias

### Eslint + Prettier

Se ha configurado tanto Eslint como prettier para el formateo del codigo y la deteccion de errores. Algunas reglas de Prettier pueden colisionar con Eslint (tamaño de espaciados...). Para evitar que esto ocurra, se han definido las responsabilidades de cada uno, siendo Prettier el encargado unicamente del formateo de texto y Eslint de la deteccion y correccion de errores.
Tambien se ha proporcionado un fichero de preferencias de vscode local configurado de manera que cada vez que se guarde un fichero se ejecuten tanto eslint como prettier.

En cuanto a las reglas utilizadas, se ha extendido de recommended y se han instalado plugins adicionales para typescript, react y cssmodules (y se extiende de la configuracdión recomendada).

Se han configurado manualmente tanto reglas adicionales no incluidas en las recomendadas como reglas SI incluidas en las recomendadas pero que combiene tener a mano para reconfigurar rapidamente en caso de ser necesario.

La configuración de Eslint no es definitiva. Es necesario probarla y ver que obstaculos implica y que casos no contempla para refinarla poco a poco

### Zustand

### Axios

### React router

#### Ficheros

- `eslint.config.js`: Fichero de configuración de Eslint.
- `.prettierrc.json`: Fichero de configuración de prettier
- `.vscode/settings.json`: Fichero de preferencias de vscode configurado para automatizar la ejecución de prettier + eslint

## Recomendaciones
