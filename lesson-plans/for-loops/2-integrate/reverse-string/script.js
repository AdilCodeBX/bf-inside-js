import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById('reverse-it').addEventListener('click', () => {
  debugger;

  // read user text
  const inputText = readString('user-text');
  let reverseText = '';
  // use a for loop that counts down (i--) to reverse the input
for(let i = inputText.length - 1; i >= 0; i--) {
    reverseText += inputText[i];
}
  // display the reversed string
  display('reversed-output', reverseText)
});
