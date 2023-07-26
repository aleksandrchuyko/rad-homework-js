import initNotes from './data/notes.json';
import initCategories from './data/categories.json';
import { render } from './js/render';

export const notes = [...initNotes];
const categories = [...initCategories];


import './js/handlers';

render(notes, categories);