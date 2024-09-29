# FAD: Empowering Your Path to Citizenship (SH-24)

### Introduction:

FAD is an innovative educational web application designed to assist individuals navigating the complex U.S. residency process. Our platform aims to connect users with the right resources and contacts to facilitate their journey toward citizenship. By leveraging AI technologies and immersive educational tools, we strive to create an accessible and supportive community for aspiring citizens.

 ### Project Goals:

Empower Users: Provide personalized guidance and resources to individuals seeking assistance in their residency journey.

Community Connection: Foster a supportive network that connects users with legal experts, consultants, and other individuals who can provide relevant support.

Intelligent Assistance: Utilize AI-driven features to curate personalized lists of potential contacts and resources tailored to individual needs.
Challenges Addressed

Complexity of the Residency Process: The U.S. immigration system can be overwhelming, with numerous steps and requirements. Our platform simplifies this process by offering clear pathways and resources.

Resource Accessibility: Many individuals struggle to find credible resources and contacts. Our intelligent assistant curates a list of recommended professionals based on user input, ensuring easy access to reliable information.

### Key Features:

AI-Powered Intelligent Assistant: A sophisticated assistant that analyzes user needs and preferences to generate a curated list of contacts, including immigration lawyers, consultants, and community organizations.

Resource Database: A comprehensive repository of educational materials, guides, and articles related to the residency process, available in multiple languages for inclusivity.

User-Centric Design: An intuitive interface that ensures easy navigation and accessibility for all users, regardless of technical proficiency.

### Technologies Stack:

Front-end: HTML, CSS, JavaScript (React)
Back-end: Python (Flask), Firestore for database management
AI Integration: OpenAI API for intelligent assistance and resource curation
Deployment: Cloud services for scalability and accessibility

## Concluding Notes:

FAD is dedicated to promoting social good by empowering individuals in their pursuit of citizenship. Our platform combines advanced AI technologies with a supportive community to ensure users receive the guidance and resources they need. Join us in transforming the immigration experience for countless individuals and families across the U.S.


##### Great efforts from the FAD dev team were made this weekedn and we are proud of the work we were able to accomplish. Future additions will be made to bring this dream alive!!!! So stay tuned :) 




# Technical Notes

# React + TypeScript + Vite

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
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
