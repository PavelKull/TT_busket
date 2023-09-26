const openModalBtn = document.getElementById('openModalBtn')
const modal = document.getElementById('myModal')
const closeButton = document.querySelector('.close')

// Открывает модальное окно
openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block'
})

// Закрывает модальное окно при нажатии на крестик
closeButton.addEventListener('click', () => {
  modal.style.display = 'none'
})

// Закрывает модальное окно при клике вне окна
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none'
  }
})
