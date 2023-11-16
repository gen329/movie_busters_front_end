Movie Busters! Application
Welcome to Movie Busters! This application is a movie management application designed to facilitate the management of a collection of movies. Users can perform various actions such as viewing, adding, editing, and deleting movie details and reviews.

Table of Contents
Introduction
Components
Routing
Installation
Usage
Technologies Used
Contributing

This application utilizes React and React Router to provide an interactive user interface to manage movies and their respective details and reviews.

To browse through our movies, type this in after your localhost url:
- /movies - All Movies (Index)
- /movies/new - New Movie (New)
- /movies/:id - Movie Details (Show)
- /movies/:id/edit - Edit Movie (Edit)

Installation
Clone the repository:
bash
Copy code
git clone <repository_url>
cd movie-management-app
Save to grepper
Install dependencies:
bash
Copy code
npm install
Save to grepper
Set up environment variables:

Create a .env file in the root directory.
Define the necessary environment variables:
env
Copy code
VITE_API_URL=your_backend_api_url
VITE_OMDB_API_KEY=your_omdb_api_key
Start the application:
bash
Copy code
npm start
Save to grepper
Usage
Access the application via the provided URL.
Use the navigation links to browse, add, edit, or delete movies and reviews.
Technologies Used
React
React Router
Contributing
Contributions via issues or pull requests are welcome!

