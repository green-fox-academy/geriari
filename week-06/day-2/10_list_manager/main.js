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
let left = document.querySelectorAll('#left li');
let right = document.querySelector('#right ul');
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
    if (left.length > 0) {
      const itemToMove = left[selectionPos];
      itemToMove.removeAttribute("style");
      console.log(itemToMove);
      right.appendChild(itemToMove);
      //itemToMove.parentNode.removeChild(itemToMove);
      left = document.querySelectorAll('#left li');
      if (left.length > 0) {
        selectionPos = 0;
        left[selectionPos].style.backgroundColor = 'grey';
      }
    }
    break;
    case 'delete':
      if (left.length > 0) {
        const itemToDelete = left[selectionPos];
        itemToDelete.parentNode.removeChild(itemToDelete);
        left = document.querySelectorAll('#left li');
        if (left.length > 0) {
          selectionPos = 0;
          left[selectionPos].style.backgroundColor = 'grey';
        }
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
