# 🎬 React Movie App

A modern, responsive movie discovery application built with React, Vite, and Tailwind CSS. The app allows users to search for movies, view trending searches, and explore movie details with a beautiful, dark-themed interface.

## ✨ Features

- **Movie Search**: Search for movies with real-time results
- **Trending Movies**: View the most searched movies based on user activity
- **Responsive Design**: Optimized for desktop and mobile devices
- **Dark Theme**: Modern dark UI with gradient accents
- **Search Analytics**: Track search popularity using Appwrite database
- **Better Search Performance**:  useDebounced Enhances performance by delaying search execution until after a pause in user typing.

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS 4.x with custom theme
- **Backend**: Appwrite (Database & Analytics)
- **Movie Data**: The Movie Database (TMDB) API
- **Deployment**: GitHub Pages
- **Development**: ESLint, Hot Module Replacement (HMR)

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Appwrite account and project setup
- TMDB API key

### Installation

1. Clone the repository
```bash
git clone https://github.com/abdulrehmana28react_movieapp.git 
```

2. Navigate to project directory
```bash
cd react_movieapp 
```

3. Environment Setup
- Create a .env file in the root directory and add your configuration:
```bash
VITE_APPWRITE_ENDPOINT=your_appwrite_endpoint
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
VITE_TMDB_API_KEY=your_tmdb_api_key
```

4. Start the development server
```bash
npm run dev
# or
yarn dev
```

5. Open your browser and visit `http://localhost:5173`

## 📁 Project Structure

```
movieapp/
├── src/
│   ├── components/          # React components
│   ├── appwrite.js         # Appwrite configuration and API calls
│   ├── index.css           # Global styles and Tailwind configuration
│   └── main.jsx            # Application entry point
├── public/                 # Static assets
├── dist/                   # Build output
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── eslint.config.js        # ESLint configuration
└── README.md               # Project documentation
```

### 🎨 Styling & Theme

The application uses a custom Tailwind CSS theme with:

- Primary Color: Deep space blue (#030014)
- Typography: DM Sans and Bebas Neue fonts
- Color Palette: Light purples, grays, and dark tones
- Custom Utilities: Gradient text, fancy text effects, and hidden scrollbars

### 🗄️ Database Schema
The Appwrite collection stores search analytics with the following structure:
```bash
{
  searchTerm: String,    // The movie search query
  count: Number,         // Number of times searched
  movie_id: String,      // TMDB movie ID
  poster_url: String     // Movie poster URL
}
```

## 📱 Key Features Explained
**Search Functionality**
- Real-time movie search with debounced input.
- Updates search count in Appwrite database.
- Stores movie metadata for trending analysis

**Trending Movies**
- Displays top 5 most searched movies
- Ordered by search count (descending)
- Shows movie posters and stylized titles

**Responsive Design**
- Mobile-first approach
- Breakpoints: xs (480px), sm, md, lg
- Grid layouts adapt to screen size

## 🚀 Deployment
1. Build the project
```bash
npm run build
```
2. Deploy to GitHub Pages
```bash
npm run deploy
```
### Guide to deploy React app to github pages

```bash
https://drive.proton.me/urls/BA1Y7BZSBM#ip9NNRi57b4h
```

## 🤝 Contributing

- 1. Fork the repository
- 2. Create a feature branch (git checkout -b feature/amazing-feature)
- 3. Commit your changes (git commit -m 'Add some amazing feature')
- 4. Push to the branch (git push origin feature/amazing-feature)
- 5. Open a Pull Request

## 📄 License
This project is open source and available under the MIT License.

## 🙏 Acknowledgments
- The Movie Database (TMDB) for movie data
- Appwrite for backend services
- Tailwind CSS for styling
- Vite for build tooling