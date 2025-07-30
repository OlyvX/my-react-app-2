# 🏋️‍♂️ FitPulse — Fitness Landing Page

**FitPulse** is a modern, responsive fitness landing page built with **React** and **TypeScript (TSX)**. It's designed to showcase fitness programs, training benefits, and promote a healthier lifestyle.

The project features a fully automated **CI/CD pipeline** using **AWS CodePipeline** and **CodeBuild**, with the final site hosted as a static web app on an **Amazon S3 bucket**.

---

## 🌐 Live Demo

🔗 [View Live Site on S3](https://fitpulse-web-bucket.s3-website-us-east-1.amazonaws.com)

> Note: Hosted on a public Amazon S3 static site endpoint (no custom domain or CloudFront yet).

---

## 🛠️ Tech Stack

- ⚛️ **React** (with TSX)
- 🟦 **TypeScript**
- 🎯 **AWS CodePipeline** – orchestrates automated deployment
- 🧱 **AWS CodeBuild** – builds the React project
- 🪣 **Amazon S3** – hosts the static frontend
- 🔐 **GitHub Actions** – (optional future integration)
- 🧩 **AWS IAM** – manages secure access between AWS services

---

## 🔄 CI/CD Workflow

1. Code is pushed to the `main` branch on GitHub.  
2. **AWS CodePipeline** detects the change.  
3. **CodeBuild** runs the following:  
   ```bash
   npm install
   npm run build

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
