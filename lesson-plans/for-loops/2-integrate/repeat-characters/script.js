import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('repeat-them').addEventListener('click', () => {
  debugger;

  // read user values
  const inputText = readString('user-text');
  const inputNumber = readNumber('number-of-times');
   let repeatedChar = "";

  // repeat the characters in the text
   for (let i = 0; i < inputText.length; i++) {
       for (let j = 0; j < inputNumber; j++) {
          repeatedChar += inputText[i];
  }
   }
  // display the text with repeated characters
  display('repeated-output', repeatedChar);
});
