import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById('pyramid-it').addEventListener('click', () => {
  debugger;

  // read user text
const text = readString('to-pyramid');
let pyramid = '';
  // create the pyramid
  for (let i = 0; i < text.length; i++) {
       let row = '';
       for (let j = i; j < text.length; j++) {
        row += text[j];
    }
    pyramid += row + '\n';
  }

  // display the pyramid
  display('pyramided', pyramid);
});
