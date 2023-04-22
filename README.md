# Gigachad Maker

Gigachad Makes helps you create a "Gigachad Meme" video by using the [Remotion](https://github.com/remotion-dev/remotion) library for React framework.

You simply upload 4 images in the "public" folder in your project, and Remotion takes those images and creates a video for you. You can then export it as a gif or a video.

## Why I Created This Project

As a frontend developer, I wanted to improve my skills in CSS and get more comfortable using 3rd party libraries to build things.

Remotion is a great library that allows you to create videos programmatically using React components. By creating this project, I was able to not only learn more about React and TypeScript, but also improve my skills in CSS and Tailwind.

## How to Use This Project

This project is initialized with [Remotion Tailwind Template](https://github.com/remotion-dev/template-tailwind).

You can follow the steps after cloning the project.

### 1 - Install Dependencies

```console
npm i
```

### 2 - Add Images

- Create a `public` folder in your project.
- Add 4 images to `public` folder.

### 3 - Start Preview

```console
npm start
```

### 4 - Render video

```console
npm run build
```

### 5 - Render video

- Your video will be ready at `out` folder.

### Upgrade Remotion

```console
npm run upgrade
```

## Roadmap

- Integrate [Server Side Rendering](https://www.remotion.dev/docs/ssr)

## Lessons Learned

- First, i tried to tackle this problem using FFmpeg in a React project. Even though i could create a basic slideshow creator with it, i couldn't advance more because of lack of deep understanding about the concept behind FFmpeg. Remotion uses FFmpeg under the hood and being able to create videos with pure CSS helped me a ton. I gave up on client-site rendering when i switched to Remotion, but maybe we can find a workaround in the future.

## Tech Stack

- React, TypeScript, TailwindCSS, Remotion

## About Remotion

Get started with Remotion by reading the [fundamentals page](https://www.remotion.dev/docs/the-fundamentals).

Get started with Tailwind by reading the ["Utility first" page](https://tailwindcss.com/docs/utility-first)

They provide help [on their Discord server](https://remotion.dev/discord).

Found an issue with Remotion? [File an issue here](https://github.com/remotion-dev/remotion/issues/new).

Remotion License: Notice that for some entities a company license is needed. Read [the terms here](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md).
