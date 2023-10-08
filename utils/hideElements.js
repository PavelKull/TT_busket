export function hideElements(element) {
  const childElements = element.querySelectorAll('[hidden]')
  childElements.forEach((child) => {
    child.setAttribute('hidden', 'true')
  })
}
