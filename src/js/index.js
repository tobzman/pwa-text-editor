import "../css/style.css";

document.addEventListener("DOMContentLoaded", () => {
  const textEditor = document.getElementById("text-editor");

  textEditor.addEventListener("input", (event) => {
    const text = event.target.value;
    saveTextToIndexedDB(text);
  });

  loadTextFromIndexedDB().then((text) => {
    textEditor.value = text;
  });
});

function saveTextToIndexedDB(text) {}

async function loadTextFromIndexedDB() {}
