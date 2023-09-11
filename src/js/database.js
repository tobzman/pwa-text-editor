let db;

function initializeDatabase() {
  openDatabase()
    .then((database) => {
      db = database;
      console.log("Database opened successfully.");
    })
    .catch((error) => {
      console.error("Error opening the database:", error);
    });
}

function addNewNote() {
  const note = {
    title: "Sample Note",
    content: "This is a sample note content.",
  };

  addNote(db, note)
    .then((noteId) => {
      console.log("Note added with ID:", noteId);
    })
    .catch((error) => {
      console.error("Error adding the note:", error);
    });
}

function getAllNotes() {
  getAllNotes(db)
    .then((notes) => {
      console.log("All notes:", notes);
    })
    .catch((error) => {
      console.error("Error retrieving notes:", error);
    });
}

function deleteNoteById(noteId) {
  deleteNote(db, noteId)
    .then(() => {
      console.log("Note deleted successfully.");
    })
    .catch((error) => {
      console.error("Error deleting the note:", error);
    });
}

initializeDatabase();

addNewNote();
getAllNotes();
const noteIdToDelete = 1;
deleteNoteById(noteIdToDelete);
