import { parseDates } from './parseDates';

export const editNote = (notes, id, content) => {
	let index = notes.findIndex(item => item.id === id);
	const newNotes = JSON.parse(JSON.stringify(notes));
	newNotes[index].content = content;
	newNotes[index].dates = parseDates(content);
	return newNotes;
};
