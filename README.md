# Igbo Flashcards

This codebase is a simple flashcard app for learning Igbo. It's built with React, Vite, and Tailwind CSS.

## Word list

The words are inspired by [the Swadesh list](https://en.wikipedia.org/wiki/Swadesh_list), and our word->translation list is maintained in [this Google Sheet](https://docs.google.com/spreadsheets/d/16b5Z8RPludFVidmyLcLBxtveGk_UDSfEQiTHXyC0NiI/edit?usp=sharing).

## Audio

The audio is generated using [this script](./src/data/generate-audio-per-word.script.ts), which uses 

- the macos `say` command to generate the audio for english words.
- this [spitch.app](https://spitch.app/) api to generate the audio for igbo words and phrases.
- the `ffmpeg` command to convert the audio to mp3.

> [!NOTE]
> There is a bit of noise at the end of the audio files that sometimes sounds like "gbu". It's not deliberate, and I am discussing with the folks at spitch.app to see if they can fix it.

## Giving feedback

Feedback on words, examples and translations at https://mykeels.github.io/igbo-flashcards

Did you find an incorrect translation, perhaps? Or a missing example?

Please [let me know](https://docs.google.com/forms/d/e/1FAIpQLSeQ00Tb144rwK7PxPRIIL4ohYt0uyaAuqVHUfDjg6ikJobHoQ/viewform).

## Using the template

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
