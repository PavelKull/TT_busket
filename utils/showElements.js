export function showElements(element) {
  const childElements = element.querySelectorAll('[hidden]')
  childElements.forEach((child) => {
    child.removeAttribute('hidden')
  })
}

