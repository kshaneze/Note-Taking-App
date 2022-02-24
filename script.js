'use strict';
// Select all elements needed for this task (querySelector)
const form = document.querySelector('.form');
const input = document.querySelector('.input__text');
const container = document.querySelector('.notes-container');
const button = document.querySelector('.btn');
const noteDiv = document.querySelector('.note');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelectorAll('.close-modal');
const btnView = document.querySelector('.btn-view');
let noteCount = 0;

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
              <p class="note__text">${input.value}</p>
              <button class="btn btn-view">View Detail</button>
  `);
    container.appendChild(divNotes);

    container.addEventListener('click', function (e) {
      if (!e.target.classList.contains('btn-view')) {
        return;
      }
      modal.classList.remove('hidden');
      overlay.classList.remove('hidden');

      modal.innerHTML += createdNote;
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

// // Create function that reads when the button is clicked on form
// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   // Clicking motion

//   const click = e.target;
//   // Every time i click on button, notCount is incremented by one. Then that count i store and use to count number of note
//   if (button.click) noteCount++;

//   // if input filed is empty note will not be added!
//   if (!input.value == '') {
//     // Create new div with same class as mine(note) with

//     const createDiv = document.createElement('div');
//     createDiv.classList.add('note');
//     createDiv.innerHTML = `
//      <h4 class="note__heading">Note ${noteCount}</h4>
//              <p class="note__text">${input.value}</p>

//              <div class="note__btn">
//                <button class="btn btn-view">View Detail</button>
//                </div>
//      `;

//     container.appendChild(createDiv);
//   } else return;

//   input.value = '';
//   input.focus();

//   const createModalPopup = function (e) {
//     if (!e.target.classList.contains('btn-view')) {
//       return;
//     }
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//   };

//   // creating modal window on button click
//   container.addEventListener('click', createModalPopup);
// });
