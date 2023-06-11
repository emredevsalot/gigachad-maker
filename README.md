# Gigachad Maker

Gigachad Maker allows you to **create a "Gigachad Meme" GIF** by leveraging the power of the **[Remotion](https://github.com/remotion-dev/remotion)** framework for React. With this tool, you can easily generate hilarious Gigachad memes to share with your friends and colleagues.

https://user-images.githubusercontent.com/72770244/233800637-564ac705-c7b9-4c12-b33f-ba7800a618ff.mp4

## Why I Created This Project

As a frontend developer, I wanted to showcase my skills and creativity by building a fun and engaging project.

It allowed me to explore Remotion and **get more comfortable using 3rd party libraries** to build things with React. Also I was able to improve my understanding of **TypeScript and Tailwind**.

## Technologies Used

- **React**: A popular JavaScript library for building user interfaces. It provides a flexible and efficient way to create dynamic web applications.
- **TypeScript**: A typed superset of JavaScript that enhances developer productivity by enabling static type checking and better tooling support.
- **TailwindCSS**: A utility-first CSS framework that offers a wide range of pre-built styling options and components. It enables rapid development and easy customization of the application's user interface.
- **Remotion**: Remotion is a framework for creating videos programmatically using React.

## Lessons Learned

- **Other solutions**: First, i tried to tackle this problem using FFmpeg in a React project. Even though i could create a basic slideshow creator with it, i couldn't advance more because of lack of deep understanding about the concept behind FFmpeg. Remotion uses FFmpeg under the hood and being able to create videos with pure CSS helped me a ton. I gave up on client-site rendering when i switched to Remotion, but maybe we can find a workaround in the future.
- **Integrating with Remotion**: I familiarized myself with the Remotion library and its capabilities for programmatically creating videos and GIFs using React components. I learned how to leverage Remotion's APIs to generate dynamic and visually appealing content.

## Quickstart

This project is initialized with [Remotion Tailwind Template](https://github.com/remotion-dev/template-tailwind).

### 1 - Clone the repository:
```console
git clone https://github.com/emredevsalot/gigachad-maker.git
```

### 2 - Navigate to the project directory:
```console
cd gigachad-maker
```

### 3 - Install Dependencies:
```console
npm install
```

### 4 - Add Images:
- Create a `public` folder in your project.
- Add 4 images to `public` folder.
- Change image names in `images` variable in `src/GigaChadMakerComp/index.tsx`

### 5 - Start Preview:
```console
npm start
```

### 6 - Render video:
```console
npm run build
```

### 7 - Voila:
- Your video will be ready at `out` folder.

## Roadmap

- Integrate [Server Side Rendering](https://www.remotion.dev/docs/ssr)

## About Remotion

Get started with Remotion by reading the [fundamentals page](https://www.remotion.dev/docs/the-fundamentals).

Get started with Tailwind by reading the ["Utility first" page](https://tailwindcss.com/docs/utility-first)

They provide help [on their Discord server](https://remotion.dev/discord).

Found an issue with Remotion? [File an issue here](https://github.com/remotion-dev/remotion/issues/new).

Remotion License: Notice that for some entities a company license is needed. Read [the terms here](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md).
