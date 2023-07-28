import { countCategories } from './utils/countCategories';

const noteList = document.querySelector('.noteList');
const statisticList = document.querySelector('.statistic');
const archiveList = document.querySelector('.archiveList');

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
  
  let categories = countCategories(notes);
  
  let statisticMarkup = categories.reduce((acc, category) => {
    return (acc += `<tr>
            <td>${category.name}</td>
            <td>${category.active}</td>
            <td>${category.archived}</td>
          </tr>`);
  }, ``);

  statisticList.innerHTML = statisticMarkup;

  let archivedMarkup = notes.reduce((acc, note) => {
    if (note.active === true) {
			return acc;
		}
    return (acc += `<tr>
            <td>${note.createdAt}</td>
            <td>${note.category}</td>
            <td>${note.content}</td>
            <td>
              <button type="button" class="unarchive-btn" data-id="${note.id}">
                Unarchive
              </button>
              <button type="button" class="delete-btn" data-id="${note.id}">
                Delete
              </button>
            </td>
          </tr>`);
  }, ``);

  archiveList.innerHTML = archivedMarkup;

};
