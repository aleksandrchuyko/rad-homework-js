import { parseDates } from './parseDates';

export const addNote = (notes, formRef) => {
let date = new Date();
  return [
    ...notes,
    {
      id: notes[notes.length - 1].id + 1,
      createdAt:
        parseInt(date.getDate()) +
        '/' +
        parseInt(date.getMonth() + 1) +
        '/' +
        date.getFullYear(),
      content: formRef.target.content.value,
      category: formRef.target.category.value,
      active: true,
      dates: parseDates(formRef.target.content.value),
    },
	];
}