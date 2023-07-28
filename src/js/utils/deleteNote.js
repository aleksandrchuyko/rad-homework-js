export const deleteNote = (notes, id) => {
	const newNotes = JSON.parse(JSON.stringify(notes));
	return newNotes.filter(item => item.id !== id);
}