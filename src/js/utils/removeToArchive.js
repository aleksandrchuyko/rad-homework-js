export const removeToArchive = (notes, id) => { 
	notes = JSON.parse(JSON.stringify(notes));
	let note = notes.find(item => item.id === id);
	note.active = false;
	return notes;
}