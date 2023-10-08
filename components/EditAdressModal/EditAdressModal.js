// const htmlAdressesModal = `

// `
// const ROOT_BODY = document.querySelector('body')
// ROOT_BODY.innerHTML = htmlAdressesModal

const openModalBtn = document.getElementById('openModalBtn')
const modalBackground = document.getElementById('modalBackground')
const addressModal = document.getElementById('addressModal')
const closeBtn = document.getElementById('close-btn')
const asideOpenModalBtn = document.getElementById('aside-openModalBtn')

function openAddressModal() {
  modalBackground.style.display = 'block'
  addressModal.style.display = 'block'
}

function closeAddressModal() {
  modalBackground.style.display = 'none'
  addressModal.style.display = 'none'
}

closeBtn.addEventListener('click', closeAddressModal)
openModalBtn.addEventListener('click', openAddressModal)
asideOpenModalBtn.addEventListener('click', openAddressModal)

modalBackground.addEventListener('click', closeAddressModal)
