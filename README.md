# QuickNotes

A clean, fast, and responsive note-taking web application built with HTML, CSS, and JavaScript. This toolkit allows users to capture, organize, search, and delete notes effortlessly. Here you get to capture ideas and thoughts or to do at the speed of thought before they disappear.

## Features

- **Add Notes**: Create notes with custom categories (Personal, School, Work, Other)
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **Local Storage**: Notes are automatically saved and restored when the page reloads
- **Search Functionality**: Instantly filter notes by text or category
- **Character Limit**: Notes are capped at 200 characters to keep them concise
- **Delete Notes**: Remove unwanted notes with a single click
- **Category-Based Styling**: Different background colors for each category
- **Validation**: Real-time feedback for empty or oversized notes
- **Accessibility**: Proper ARIA labels and keyboard navigation

## Tech Stack

- **HTML**: Semantic structure and accessibility
- **CSS**: Custom properties, responsive design, category-specific styling
- **JavaScript**: DOM manipulation, event handling, local storage management

## Getting Started

1. **Clone the repository**
   bash
   git clone <repository-url>
   cd quicknotes-app

2. **Open the application**
   Simply open `index.html` in your web browser:

   bash

   # On macOS

   open index.html

   # On Windows

   start index.html

   # On Linux

   xdg-open index.html

## Usage

### Adding a Note

1. Enter your note text in the "New Note" field
2. Select a category from the dropdown menu
3. Click the "Add Note" button

### Searching Notes

1. Type in the search box under "My Notes"
2. Results will filter automatically as you type

### Deleting a Note

1. Click the "Delete" button on any note card
2. The note will be permanently removed

## File Structure

quicknotes-app/
├── index.html # Main application interface
├── style.css # Styles and theme variables
└── script.js # Core logic and event handling

## Styling

The application uses a dark, warm color palette with distinct colors for each category:

| Category | Background Color |
| -------- | ---------------- |
| Personal | #1D2937          |
| School   | #8C7354          |
| Work     | #365344          |
| Other    | #634a32          |

## Performance

- **Efficient DOM Updates**: Uses `replaceChildren()` for cleaner rendering
- **Optimized Searching**: Filters notes in real-time without page reloads
- **Small Footprint**: No external libraries or frameworks required

## Accessibility

- **Semantic HTML**: Proper use of `<header>`, `<main>`, `<footer>`, and `<section>`
- **ARIA Labels**: Descriptive labels for interactive elements
- **Keyboard Support**: Full keyboard navigation and focus management
- **Error Handling**: Clear error messages for validation failures

## Deployment

To deploy this application, simply host the `index.html` file along with `style.css` and `script.js` on any static hosting service:

- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting
- Cloudflare Pages

## What I learned

1. Through this project i learnt that it is a must to link the style.css and the script.js to the html. This is to bring the responsiveness and the appearance of the webpage.

2. Git and Github. I learned how to divide work into tasks that atre manageable and also how to make changes.

3. Javascript interactivity. I learned how javascript nnbrings interactivity to a webpage.
