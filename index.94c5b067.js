!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function e(t){return t&&t.__esModule?t.default:t}var n={},r={},a=t.parcelRequired7c6;null==a&&((a=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var a={id:t,exports:{}};return n[t]=a,e.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){r[t]=e},t.parcelRequired7c6=a),a.register("kMC0W",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if(Array.isArray(t))return r.default(t)};var n,r=(n=a("8NIkP"))&&n.__esModule?n:{default:n}})),a.register("8NIkP",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}})),a.register("7AJDX",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}})),a.register("8CtQK",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("auk6i",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){if(!t)return;if("string"==typeof t)return r.default(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(t,e)};var n,r=(n=a("8NIkP"))&&n.__esModule?n:{default:n}}));var o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(t){return c.default(t)||i.default(t)||s.default(t)||d.default()};var c=u(a("kMC0W")),i=u(a("7AJDX")),d=u(a("8CtQK")),s=u(a("auk6i"));function u(t){return t&&t.__esModule?t:{default:t}}var l;l=JSON.parse('[{"id":"0","createdAt":"1/5/2023","content":"It\'s time to return the books to the library","category":"Random Thought","active":false,"dates":[]},{"id":"1","createdAt":"3/5/2023","content":"I need ketchup, it\'s time to go to the store","category":"Task","active":true,"dates":[]},{"id":"2","createdAt":"16/5/2023","content":"Who painted the fence?","category":"Random Thought","active":true,"dates":[]},{"id":"3","createdAt":"1/6/2023","content":"Sport - is life...","category":"Idea","active":true,"dates":[]},{"id":"4","createdAt":"7/6/2023","content":"I\'m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021","category":"Task","active":true,"dates":["3/5/2021","5/5/2021"]},{"id":"5","createdAt":"21/6/2023","content":"Isn\'t it time to visit grandmother in the village?","category":"Random Thought","active":true,"dates":[]},{"id":"6","createdAt":"22/6/2023","content":"It would be wonderful to start my own business","category":"Idea","active":true,"dates":[]},{"id":"7","createdAt":"10/7/2023","content":"My smartphone needs an OS update. Maybe at 12/7/2023","category":"Task","active":true,"dates":["12/7/2023"]}]');var f;f=JSON.parse('["Random Thought","Task","Idea"]');var v=function(t){return t.reduce((function(t,n){var r=t.findIndex((function(t){return t.name===n.category}));return r>-1?n.active?t[r].active+=1:t[r].archived+=1:t=n.active?e(o)(t).concat([{name:n.category,active:1,archived:0}]):e(o)(t).concat([{name:n.category,active:0,archived:1}]),t}),[])},y=document.querySelector(".noteList"),g=document.querySelector(".statistic"),p=document.querySelector(".archiveList"),m=function(t){try{var e=t.reduce((function(t,e){return!0!==e.active?t:t+"<tr>\n            <td>".concat(e.createdAt,"</td>\n            <td>").concat(e.category,"</td>\n            <td>").concat(e.content,"</td>\n            <td>").concat(e.dates,'</td>\n            <td>\n              <button type="button" class="edit-btn" data-id="').concat(e.id,'">\n                Edit\n              </button><button type="button" class="archive-btn" data-id="').concat(e.id,'">\n                Archive\n              </button>\n              <button type="button" class="delete-btn" data-id="').concat(e.id,'">\n                Delete\n              </button>\n            </td>\n          </tr>')}),"");y.innerHTML=e;var n=v(t).reduce((function(t,e){return t+"<tr>\n            <td>".concat(e.name,"</td>\n            <td>").concat(e.active,"</td>\n            <td>").concat(e.archived,"</td>\n          </tr>")}),"");g.innerHTML=n;var r=t.reduce((function(t,e){return!0===e.active?t:t+"<tr>\n            <td>".concat(e.createdAt,"</td>\n            <td>").concat(e.category,"</td>\n            <td>").concat(e.content,'</td>\n            <td>\n              <button type="button" class="unarchive-btn" data-id="').concat(e.id,'">\n                Unarchive\n              </button>\n              <button type="button" class="delete-btn" data-id="').concat(e.id,'">\n                Delete\n              </button>\n            </td>\n          </tr>')}),"");p.innerHTML=r}catch(t){alert("Incorrect data! Unable to render...")}},h=document.querySelector(".noteList"),b=document.querySelector(".archiveList"),S=document.querySelector(".backdrop-new"),L=document.querySelector(".add-form"),_=document.querySelector(".add-note"),k=document.querySelector(".modal-new__close"),O=document.querySelector(".backdrop-edit"),I=document.querySelector(".edit-form"),A=document.querySelector(".modal-edit__close"),M=document.querySelector(".backdrop-archive"),q=document.querySelector(".show-archive"),x=document.querySelector(".modal-archive__close"),N=function(t){var e=[];return e.push(t.match(/[1-3]?[0-9]\/[1]?[0-9]\/\d{4}/g)),e},w=function(t,n){t=JSON.parse(JSON.stringify(t));var r=new Date;return e(o)(t).concat([{id:"".concat(+t[t.length-1].id+1),createdAt:parseInt(r.getDate())+"/"+parseInt(r.getMonth()+1)+"/"+r.getFullYear(),content:n.target.content.value,category:n.target.category.value,active:!0,dates:N(n.target.content.value)}])},E=function(t,e){return JSON.parse(JSON.stringify(t)).filter((function(t){return t.id!==e}))},T=function(t,e){return(t=JSON.parse(JSON.stringify(t))).find((function(t){return t.id===e})).active=!1,t},J=function(t,e){return(t=JSON.parse(JSON.stringify(t))).find((function(t){return t.id===e})).active=!0,t};L.addEventListener("submit",(function(e){e.preventDefault(),t.notes=w(t.notes,e),e.target.content.value="",S.classList.add(["is-hidden"]),m(t.notes)})),_.addEventListener("click",(function(){S.classList.remove(["is-hidden"])})),k.addEventListener("click",(function(){S.classList.add(["is-hidden"])})),I.addEventListener("submit",(function(e){var n,r,a,o,c;e.preventDefault(),t.notes=(n=t.notes,r=e.target.noteId.value,a=e.target.content.value,o=n.findIndex((function(t){return t.id===r})),(c=JSON.parse(JSON.stringify(n)))[o].content=a,c[o].dates=N(a),c),e.target.noteId.value="",e.target.content.value="",O.classList.add(["is-hidden"]),m(t.notes)})),h.addEventListener("click",(function(t){if(t.target.classList.contains("edit-btn")){var e=t.target.dataset.id;I.elements.noteId.value=e,O.classList.remove(["is-hidden"])}})),A.addEventListener("click",(function(){O.classList.add(["is-hidden"])})),h.addEventListener("click",(function(e){if(e.target.classList.contains("delete-btn")){var n=e.target.dataset.id;t.notes=E(t.notes,n),m(t.notes)}})),h.addEventListener("click",(function(e){if(e.target.classList.contains("archive-btn")){var n=e.target.dataset.id;t.notes=T(t.notes,n),m(t.notes)}})),q.addEventListener("click",(function(){M.classList.remove(["is-hidden"])})),x.addEventListener("click",(function(){M.classList.add(["is-hidden"])})),b.addEventListener("click",(function(e){if(e.target.classList.contains("unarchive-btn")){var n=e.target.dataset.id;t.notes=J(t.notes,n),m(t.notes)}})),b.addEventListener("click",(function(e){if(e.target.classList.contains("delete-btn")){var n=e.target.dataset.id;t.notes=E(t.notes,n),m(t.notes)}})),t.notes=e(o)(e(l));e(o)(e(f));m(t.notes)}();
//# sourceMappingURL=index.94c5b067.js.map
