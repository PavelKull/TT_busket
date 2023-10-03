function createCustomCheckbox(checked, onChange) {
  const label = document.createElement('label')
  label.classList.add('custom-checkbox')

  const input = document.createElement('input')
  input.type = 'checkbox'
  input.checked = checked

  input.addEventListener('change', () => {
    if (typeof onChange === 'function') {
      onChange(input.checked)
    }
  })

  const checkboxBox = document.createElement('div')
  checkboxBox.classList.add('custom-checkbox-box')

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
  svg.setAttribute('viewBox', '0 0 24 24')
  svg.classList.add('custom-checkbox-icon')

  // Вставьте ваш SVG-код здесь
  // Пример:
  // const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  // path.setAttribute('d', 'M0 0...');
  // svg.appendChild(path);

  checkboxBox.appendChild(svg)
  label.appendChild(input)
  label.appendChild(checkboxBox)

  return label
}

// Пример использования:
const customCheckbox = createCustomCheckbox(false, (isChecked) => {
  console.log(`Чекбокс ${isChecked ? 'отмечен' : 'не отмечен'}`)
})

// Добавляем созданный чекбокс на страницу
document.body.appendChild(customCheckbox)
