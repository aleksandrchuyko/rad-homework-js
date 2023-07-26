import { countCategories } from './utils/countCategories';

const noteList = document.querySelector('.noteList');

export const render = notes => {
	let notesMarkup = notes.reduce((acc, note) => {
		if (note.active !== true) {
			return acc;
		}
    return (acc += `<tr>
            <td>${note.createdAt}</td>
            <td>${note.category}</td>
            <td>${note.content}</td>
            <td>${note.dates}</td>
            <td>
              <button type="button" class="edit-btn" data-id="${note.id}">
                Edit
              </button><button type="button" class="archive-btn" data-id="${note.id}">
                Archive
              </button>
              <button type="button" class="delete-btn" data-id="${note.id}">
                Delete
              </button>
            </td>
          </tr>`);
  }, ``);

	noteList.innerHTML = notesMarkup;
	console.log(countCategories(notes));
};
