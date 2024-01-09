# Monsters Inc
This is an admin console for the monsters db

## Project structure
This is de basic structure of the project follow the same design patterns to keep project organized
```bash
.
├── index.html # Initial hmtl file where React is going to be mounted
├── public/ # Static dir that will be replaced in built root
└── src/ # Project main folder
    ├── assets/ # Global assets that could be accessed by any page or component
    ├── components/ # Generic componets that are not assigned to any route
    ├── pages/ # Components that are assigned to a route
    └── styles/ # Global styles

```
### Routing
For routing use the `src/main.jsx` file all components imported into this component must come from the `pages` folder

### Pages
Pages must be assigned to a specific route and they should only care for basic positioning of different componets and basic elements inside of them, they should not carry much logic. Each page is represented by its folder with the name of the page a `index.jsx` file representing the react component and `index.scss` file representing tha basic styles for this page in particular.

### Components
All of the components shoud not be assigned any route and should be imported into **Pages**. All components are selfcontained with its specific assest, styles and `index.jsx` file. Components should be atomic.

Component styles should be _scoped_ meaning that each component should have a container `div` with a unique `className` in order for styles not to overlap with other components or pages.


## Getting started
1. Create a `.env` file on the root of the project, us as refference `.env.example`
2. Install dependencies `npm install`
3. Run in development mode `npm run dev`