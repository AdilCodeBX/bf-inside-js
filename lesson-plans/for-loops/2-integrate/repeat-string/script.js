import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('repeat-it').addEventListener('click', () => {
  debugger;

  // read user values
    const inputText = readString('user-text');
    const inputNumber = readNumber('number-of-times');
   let repeatedText = "";
  // repeat the characters in the text
  for (let i = 0; i < inputNumber; i++) {
   repeatedText += inputText;
  }

  // display the text with repeated characters
  display('repeated-output', repeatedText);
});
