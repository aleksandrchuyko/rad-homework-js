import {
  backdropNew,
  addForm,
  addButton,
  addModalCloseButton,
  backdropEdit,
  editForm,
  editModalCloseButton,
  noteList,
  backdropArchive,
  showArchiveButton,
  archiveModalCloseButton,
  archiveList,
} from './refs';
// import { notes } from '../index';
import { render } from './render';
import { addNote } from './utils/addNote';
import { deleteNote } from './utils/deleteNote';
import { editNote } from './utils/editNote';
import { removeToArchive } from './utils/removeToArchive';
import { unarchive } from './utils/unarchive';

addForm.addEventListener('submit', e => {
  e.preventDefault();

  global.notes = addNote(global.notes, e);

  e.target.content.value = '';
  backdropNew.classList.add(['is-hidden']);

  render(global.notes);
});

addButton.addEventListener('click', () => {
  backdropNew.classList.remove(['is-hidden']);
});

addModalCloseButton.addEventListener('click', () => {
  backdropNew.classList.add(['is-hidden']);
});

editForm.addEventListener('submit', e => {
  e.preventDefault();

  global.notes = editNote(
    global.notes,
    e.target.noteId.value,
    e.target.content.value
  );

  e.target.noteId.value = '';
  e.target.content.value = '';
  backdropEdit.classList.add(['is-hidden']);

  render(global.notes);
});

noteList.addEventListener('click', e => {
  if (!e.target.classList.contains('edit-btn')) {
    return;
  }
  let id = e.target.dataset.id;
  editForm.elements['noteId'].value = id;
  backdropEdit.classList.remove(['is-hidden']);
});

editModalCloseButton.addEventListener('click', () => {
  backdropEdit.classList.add(['is-hidden']);
});

noteList.addEventListener('click', e => {
  if (!e.target.classList.contains('delete-btn')) {
    return;
  }
  let id = e.target.dataset.id;
  global.notes = deleteNote(global.notes, id);

  render(global.notes);
});

noteList.addEventListener('click', e => {
  if (!e.target.classList.contains('archive-btn')) {
    return;
  }
  let id = e.target.dataset.id;
  global.notes = removeToArchive(global.notes, id);

  render(global.notes);
});

showArchiveButton.addEventListener('click', () => {
  backdropArchive.classList.remove(['is-hidden']);
});

archiveModalCloseButton.addEventListener('click', () => {
  backdropArchive.classList.add(['is-hidden']);
});

archiveList.addEventListener('click', e => {
  if (!e.target.classList.contains('unarchive-btn')) {
    return;
  }
  let id = e.target.dataset.id;
  global.notes = unarchive(global.notes, id);

  render(global.notes);
});

archiveList.addEventListener('click', e => {
  if (!e.target.classList.contains('delete-btn')) {
    return;
  }
  let id = e.target.dataset.id;
  global.notes = deleteNote(global.notes, id);

  render(global.notes);
});
