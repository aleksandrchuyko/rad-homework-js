import { addForm, addButton, addModalCloseButton } from './refs';
import { notes } from '../index';

addForm.addEventListener('submit', e => {
  e.preventDefault();
  newNotes = [
    ...notes,
    {
      id: notes[notes.length - 1].id + 1,
      createdAt: new Date(),
      content: e.target.content.value,
      category: e.target.category.value,
      active: true,
      dates: [],
    },
  ];
  console.log(newNotes);
});

addButton.addEventListener('click', () => {
  const backdrop = document.querySelector('.backdrop-new');
  backdrop.classList.remove(['is-hidden']);
});

addModalCloseButton.addEventListener('click', () => {
  const backdrop = document.querySelector('.backdrop-new');
  backdrop.classList.add(['is-hidden']);
});
