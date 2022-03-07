'use strict';
// Select all elements needed for this task (querySelector)
const form = document.querySelector('.form');
const input = document.querySelector('.input__text');
let container = document.querySelector('.notes-container');
const button = document.querySelector('.btn');
const noteDiv = document.querySelector('.note');

let modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelectorAll('.close-modal');
const btnView = document.querySelector('.btn-view');
let noteCount = 0;

// Focus input field
window.onload = function () {
  input.focus();
};
onload();

// Create function that reads when the button is clicked on form
form.addEventListener('submit', function (e) {
  e.preventDefault();

  // if input filed is empty note will not be added!
  if (!input.value == '') {
    // Every time i click on button, notCount is incremented by one. Then that count i store and use to count number of note
    if (button.click) noteCount++;
    // Creating div element where notes will go
    const divNotes = document.createElement('div');

    // Adding class to that div element
    divNotes.classList.add('note');

    // Inserting HTML content into created div
    const createdNote = (divNotes.innerHTML += `
  <h4 class="note__heading">Note ${noteCount}</h4>
              <p id="note${noteCount}" class="note__text">${input.value}</p>
              <button class="btn btn-view" value="${noteCount}">View Detail</button>
  `);
    container.appendChild(divNotes);

    // When we create one note, input field is back to being empty
    input.value = '';
    // imput field is focused;
    input.focus();

    // Adding event listener on note container
    container.addEventListener('click', function (e) {
      // in this container if we click somwhere and it doesnt contain btn-view claslist - WE WILL JUST RETURN
      if (!e.target.classList.contains('btn-view')) {
        return;
      }

      // Else
      let showNote;
      // Create shownote variable, where i will store value of clicked button (number), which i previously given value
      showNote = e.target.value;

      // Creating noteText varibale, that i will later display in modal window, by getting ElementById of note(showNote(e.target.value(which is value of button = notecount))
      let noteText = document.getElementById(`note${showNote}`).innerHTML;

      // Displaying modal window by removing hidden class
      modal.classList.remove('hidden');
      // Displaying overlay by removing hidden class
      overlay.classList.remove('hidden');

      // Inserting showNote for note count and noteText to display corrent(corresponding) notetext
      modal.innerHTML = `<h4 class="note__heading">Note ${showNote}</h4>
      <p class="note__text">${noteText}</p>
      <button class="close-modal">X</button>
      `;
    });

    modal.addEventListener('click', function (e) {
      if (!e.target.classList.contains('close-modal')) {
        return;
      }
      modal.classList.add('hidden');
      overlay.classList.add('hidden');
    });
  }
});
