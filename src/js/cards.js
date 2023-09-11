import { openDatabase, addNote, getAllNotes, deleteNote } from "./database";

const form = document.getElementById("contact-form");

window.deleteCard = async (e) => {
  let id = parseInt(e.id);

  await deleteNoteById(id);

  fetchContactCards();
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = form.elements["name"].value;
  const home = form.elements["home-phone"].value;
  const cell = form.elements["cell-phone"].value;
  const email = form.elements["email"].value;

  const contact = { name, home, cell, email };
  addNote(contact);

  form.reset();

  fetchContactCards();
});

const fetchContactCards = async () => {
  const db = await openDatabase();

  const result = await getAllNotes(db);

  let cards = "";

  for (let data of result) {
    cards += `
    <div class="card card-rounded col-md-3 m-2">
      <div class="card-header card-rounded">
        <h1>${data.name}</h1>
      </div>
      <div class="card-body">
        <p>Home Phone: ${data.home}</p>
        <p>Cell Phone: ${data.cell}</p>
        <p>Email: ${data.email}</p>
      </div>
      <div class="flex-row justify-flex-end p-1">
        <button class="btn btn-sm btn-danger" id="${data.id}" onclick="deleteCard(this)">Delete</button>
      </div>
    </div>
    `;
  }

  document.getElementById("card-group").innerHTML = cards;
};

fetchContactCards();
