import "./style.css";

const btn = document.getElementById("once");
const onceResultDiv = document.getElementById("once_result");
const toggler = document.getElementById("toggler");
const togglerResult = document.getElementById("toggler_result");


/*
 * once() => it takes a function and execute that function only once
 */

export const once = (fn) => {
  return (...args) => {
    if (fn != null) {
      fn(...args);
      fn = null;
    }
  };
};


const addHtmlOnce = once(addHTMLToElement);
btn.addEventListener("click", () =>
  addHtmlOnce(onceResultDiv, "<p>Result One Time</p>")
);

function addHTMLToElement(el, data) {
  el.insertAdjacentHTML("beforeend", data);
}

/*
 * alternator() => it takes two functions and when it called multiple time it switches between the functions
 */

const alternator = (fn1, fn2) => {
  let toggler = false;
  return () => {
    !toggler ? fn1() : fn2()
    toggler = !toggler
  };
};

const fn1 = () => addHTMLToElement(onceResultDiv, '<p>Fn1 Called</p>');
const fn2 = () => addHTMLToElement(onceResultDiv, '<p>Fn2 Called</p>');

const alt = alternator(fn1, fn2);
toggler.addEventListener('click', () => alt())
