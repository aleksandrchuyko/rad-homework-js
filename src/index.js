import initNotes from './data/notes.json';
import initCategories from './data/categories.json';
import { render } from './js/render';

global.notes = [...initNotes];
const categories = [...initCategories];


import './js/handlers';

render(global.notes);