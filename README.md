# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


## nam_sol_coding_assignment12
 
This project was bootstrapped with Create React App and containerized using Docker.
 
### Project Setup
 
First, clone the repository to your local machine:
git clone https://github.com/starbucksnpc/storybook_portfolio.git
 
## Docker
 
This application is containerized using Docker. You can build and run the application using Docker.
 
## Building the Docker Image
 
To build the Docker image, navigate to the project directory and run:
 
docker image build -t nam_sol_coding_assignment12:latest .
 
This command builds a Docker image with the tag nam_sol_coding_assignment12.
 
### Running the Docker Container
 
To run the Docker container, use the following command:
 
docker run -dp 8083:6006 --name nam_sol_coding_assignment12 nam_sol_coding_assignment12:latest