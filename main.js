import './style.css'

/*
    * once() => it takes a function and execute that function only once
*/
const once = fn => {
  let finished = false
  return (...args) => {
      if (!finished) {
          finished = true
          fn(...args)
      }
  }
}

const btn = document.getElementById('once')
const onceResultDiv = document.getElementById('once_result')

const addHtmlOnce = once(addHTMLToElement)
btn.addEventListener('click', () => addHtmlOnce(onceResultDiv, '<p>Result One Time</p>'))

function addHTMLToElement(el, data) {
  el.insertAdjacentHTML('beforeend', data)
}

