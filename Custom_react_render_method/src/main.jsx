import './index.css'

const root = document.getElementById('root')

const reactElement = {
  type: 'a',
  props: {
    href: 'https://devorigin.online/',
    children: 'DevOrigin',
  }
};

const element1 = (
  <a href="https://sudeepnpatil.me">sudeep Portfolio</a>
)

const element2 = (
  <div id='div'>div element</div>
)

console.log(element1)
//console.log(element.props.children)
//console.log(reactElement)

function render(element, root) {

  const element_to_display = document.createElement(`${element.type}`)

  for (let key in element.props) {

    if (key != 'children') {

      element_to_display.setAttribute(`${key}`, `${element.props[key]}`);

    }
    element_to_display.textContent = element.props.children;

    root.appendChild(element_to_display);
  }
}
render(element1, root)

render(element2, root)

render(reactElement, root)



