import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('skip-them').addEventListener('click', () =>
 {
  debugger;

  // read user values
  let numberSkip = readNumber('skip-size');
  let text = readString('user-text');
  console.log(text);

  let skipText = '';

if (numberSkip <= 0) {
     console.error('the number of character to skip must be more than zero.');
} else {
  // create a new string with skipped characters
  for (let i = 0; i < text.length; i += numberSkip) {
      skipText += text[i];
       console.log(skipText);
  }
}
  // display the skipped string
  display('skipped-output', skipText)
});
