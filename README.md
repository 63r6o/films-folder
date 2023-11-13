# films-Folder <img width="50" alt="films-folder-logo" src="https://github.com/63r6o/films-folder/assets/102681223/5388d47c-5ce1-4ebf-b1ab-c364f7ef567b">

A Next.js project using the new app router, incorporating TypeScript, Tailwind CSS, and the TMDB API.

It has been deployed [here](https://films-folder.vercel.app/).

## Features

### 1. Main Screen

- Displays information about a randomly selected movie currently playing in theaters.
- Showcases a marquee of trending movies.
  ![main-screen](https://github.com/63r6o/films-folder/assets/102681223/42f65d37-0e75-4316-b74b-6ae63e2a1689)

### 2. Search Screen

- Enables users to search for movies by name, providing a convenient way to discover specific titles.
  ![search-screen](https://github.com/63r6o/films-folder/assets/102681223/4136b4f3-3104-4125-8a8e-4fc6da87df80)

### 3. Details Page

- Offers in-depth information about a selected movie, allowing users to delve into additional details.
  ![details-screen](https://github.com/63r6o/films-folder/assets/102681223/361c36a6-92ee-47e5-a5ff-d9d7082d85c9)

## Getting Started

To run the project locally, follow these steps:

1. Create a `.env` file in the root directory with your TMDB API token.

   ```
   TMDB_API_TOKEN=your_api_token_here
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Fonts

This project uses the [Pleatures font](https://www.fontspace.com/pleatures-font-f96081).

## To-Do List

- [x] Implement proper pagination.
- [x] Clean up the CSS.
- [x] Integrate error handling.
- [x] Add metadata, enhance SEO and accessibility.
