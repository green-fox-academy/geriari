'use strict';

const form = document.querySelector('form');
const checkboxes = document.querySelectorAll('form input[type="checkbox"]');
const { name, sex, classname } = form.elements;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      checkbox.setAttribute("value", "1");
    } else {
      checkbox.setAttribute("value", "0");
    }
  });
  console.log(checkboxes);
  const postXhr = new XMLHttpRequest();
  postXhr.open('POST', '/');
  postXhr.setRequestHeader('Content-Type', 'application/json');
  postXhr.send(JSON.stringify({
    name: name.value,
    sex: sex.value,
    classname: classname.value,
    trial_exam: checkboxes[0].value,
    foundation_exam: checkboxes[1].value,
    orientation_exam: checkboxes[2].value,
    final_exam: checkboxes[3].value
  }));
});
