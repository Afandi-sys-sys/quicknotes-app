// 1. Select HTML elements using querySelector
const noteForm = document.querySelector("#note-form");
const noteInput = document.querySelector("#note-input");
const noteCategory = document.querySelector("#note-category");
const searchInput = document.querySelector("#search-input");
const notesList = document.querySelector("#notes-list");
const noteCount = document.querySelector("#note-count");
const errorMessage = document.querySelector("#error-message");

// 2. Load notes from localStorage
let notes = [];

try {
  const savedNotes = localStorage.getItem("QuickNotes");

  if (savedNotes) {
    const parsedNotes = JSON.parse(savedNotes);

    if (Array.isArray(parsedNotes)) {
      notes = parsedNotes.filter(
        (note) =>
          note &&
          typeof note.id === "number" &&
          typeof note.text === "string" &&
          typeof note.category === "string" &&
          typeof note.createdAt === "string",
      );
    }
  }
} catch (error) {
  console.error("Error loading notes:", error);
}

// 3. Save notes to localStorage
function saveNotes() {
  try {
    localStorage.setItem("QuickNotes", JSON.stringify(notes));
    return true;
  } catch (error) {
    console.error("Error saving notes:", error);

    errorMessage.textContent =
      "Unable to save notes. Check your browser storage.";

    return false;
  }
}

// 4. Render notes and update the counter
function render() {
  // Clear the existing list
  notesList.replaceChildren();

  // Search note text and category
  const searchTerm = searchInput.value.trim().toLowerCase();
  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(searchTerm),
  );

  // Display the correct total count
  if (notes.length === 0) {
    noteCount.textContent = "No notes yet.";
  } else if (notes.length === 1) {
    noteCount.textContent = "1 note";
  } else {
    noteCount.textContent = `${notes.length} notes`;
  }

  // Display a message if there are no matching notes
  if (filteredNotes.length === 0) {
    const message = document.createElement("li");

    message.textContent = searchTerm
      ? "No notes match your search."
      : "Your notes will appear here.";

    notesList.appendChild(message);
    return;
  }

  // Create each note card
  filteredNotes.forEach((note) => {
    const listItem = document.createElement("li");

    // Apply the category-specific CSS class
    listItem.classList.add(`category-${note.category.toLowerCase()}`);

    // Note text
    const noteText = document.createElement("p");
    noteText.textContent = note.text;

    // Note category
    const categoryText = document.createElement("p");
    categoryText.textContent = `Category: ${note.category}`;

    // Creation date
    const date = document.createElement("small");
    date.textContent = `Created: ${new Date(note.createdAt).toLocaleString()}`;

    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";

    deleteButton.setAttribute("aria-label", `Delete note: ${note.text}`);

    deleteButton.addEventListener("click", () => {
      deleteNote(note.id);
    });

    // Add elements to the card safely
    listItem.append(noteText, categoryText, date, deleteButton);

    notesList.appendChild(listItem);
  });
}

// 5. Add a new note
noteForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const text = noteInput.value.trim();
  const category = noteCategory.value;

  // Validate empty notes
  if (text.length === 0) {
    errorMessage.textContent = "Please type a note first.";
    noteInput.focus();
    return;
  }

  // Validate the 200-character limit
  if (text.length > 200) {
    errorMessage.textContent = "Notes must be 200 characters or fewer.";

    noteInput.focus();
    return;
  }

  // Create the note object
  const newNote = {
    id: Date.now(),
    text: text,
    category: category,
    createdAt: new Date().toISOString(),
  };

  // Add the note
  notes.push(newNote);

  // Save it before updating the display
  if (!saveNotes()) {
    notes.pop();
    return;
  }

  // Clear the form and any previous error
  errorMessage.textContent = "";
  noteForm.reset();

  // Refresh the notes list
  render();

  noteInput.focus();
});

// 6. Delete a note
function deleteNote(id) {
  const previousNotes = notes;

  notes = notes.filter((note) => note.id !== id);

  if (!saveNotes()) {
    notes = previousNotes;
    return;
  }

  errorMessage.textContent = "";
  render();
}

const clearAllButton = document.querySelector("#clear-all-btn");

clearAllButton.addEventListener("click", () => {
    if (notes.length === 0) {
        return;
    }

    if (confirm("Delete all notes?")) {
        const previousNotes = notes;

        notes = [];

        if (!saveNotes()) {
            notes = previousNotes;
            return;
        }

        errorMessage.textContent = "";
        render();
    }
});

// 7. Search notes as the user types
searchInput.addEventListener("input", render);

// 8. Clear validation errors when the user edits the note
noteInput.addEventListener("input", () => {
  errorMessage.textContent = "";
});

// 9. Display saved notes when the page loads
render();
