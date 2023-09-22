This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Karen Milena Buitrago López
Bogotá, Colombia
karenmbuitrago@gmail.com


## Getting Started

First, run the development server:

```bash
npm run dev
```

## Where in the world Project

Este proyecto es una aplicación web construida con Next.js y React que muestra información sobre países a partir de una API externa y permite a los usuarios explorar los detalles de cada país.

## Arquitectura de la Aplicación

La aplicación sigue una arquitectura de componentes, con los siguientes elementos clave:

- **Components**: Contiene los componentes React reutilizables, como `CountryDetail`, `Dashboard`, y `Header`.
- **Context**: Incluye el contexto de la aplicación para manejar el tema de vista oscura.
- **Layouts**: Define el diseño general de la aplicación, con un `MainLayout` para páginas comunes.
- **Lib**: Contiene un módulo `api.js` que se utiliza para interactuar con la API de países.
- **Pages**: Las páginas de Next.js que representan las vistas de la aplicación, incluyendo `countries/[country].js`.
- **Styles**: Contiene archivos Sass para gestionar los estilos de la aplicación.

## Uso de la API

He utilizado Axios para realizar peticiones HTTP a la API de países.

```javascript

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1/",
});
```

## Funcionalidades Principales

- Búsqueda de países por nombre.
- Filtrado de países por región.
- Visualización de detalles de cada país al hacer clic en su enlace.


## Instrucciones para Ejecutar

1. Clona este repositorio en tu máquina local:

https://github.com/karenmbuitrago1/challengeFrontEnd-BIA

2. Instala las dependencias:

```
npm install
```

3. Inicia la aplicación:


```
npm run dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).


## Autores / créditos
* **Karen Buitrago** - *Prueba técnica para Bia*


