// 1, Build up the necessary structure with JavaScript (try to use semantically correct elements)
// 2, Achive the same design by css
// 3, Try not to use css classes
// 4, Add some functionality to the buttons
//     - If "Up" is clicked the selection should move up by one
//     - If "Down" is clicked the selection should move down by one
//     - If "X" is clicked the selected item should be removed and the first item should be selected
//     - If ">" is clicked the selected item should be moved to the right side and the first item on the left side should be selected
// 5, Check all the edge cases, no error should be printed to the console

const buttons = document.querySelector('#buttons');
var left = document.querySelectorAll('#left li');
const right = document.querySelectorAll('#right li');
const selectionStyle = document.createElement('class');
let selectionPos = 1;

buttons.addEventListener('click', (event) => {

  switch (event.target.getAttribute('id')) {
    case 'up':
      if (selectionPos > 0) {
        left[selectionPos].removeAttribute('style');
        selectionPos --;
        left[selectionPos].style.backgroundColor = 'grey';
      }
    break;
    case 'move':
    break;
    case 'delete':
      if (left.length > 0) {
        const itemToDelete = left[selectionPos];
        itemToDelete.parentNode.removeChild(itemToDelete);
        left = document.querySelectorAll('#left li');
        selectionPos = 0;
        left[selectionPos].style.backgroundColor = 'grey';
      }
    break;
    case 'down':
    if (selectionPos < left.length - 1) {
        left[selectionPos].removeAttribute('style');
        selectionPos ++;
        left[selectionPos].style.backgroundColor = 'grey';
      }
    break;
  }
});
