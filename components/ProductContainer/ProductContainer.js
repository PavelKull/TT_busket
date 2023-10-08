import { ROOT_PRODUCTS_CONTAINER } from '../../constants/root.js'
import { Card } from '../../components/Card/Card.js'
import { STORE } from '../../utils/localStorageUtil.js'

const productsInBasket = STORE.getItems('products')
const actualDiscountUser = STORE.getDiscount()

let htmlProductContainerPage = ''
const cardsArray = []
productsInBasket.forEach((product) => {
  const card = new Card(product, actualDiscountUser)
  card.updateTotalPrice()
  card.updateQuantityButtons()
  cardsArray.push(card)

  const cardHtml = card.render()
  htmlProductContainerPage += cardHtml
})

function getCardById(cardId) {
  const cards = document.querySelectorAll('.product-card')

  for (const card of cards) {
    if (card.id === cardId) {
      return card
    }
  }
  return null
}

function increaseQuantity(card) {
  if (
    card.quantity <
    card.product.quantityLocation1 + card.product.quantityLocation2
  ) {
    card.quantity += 1
    card.calculateDiscounts()
    card.updateWithoutDiscount()
    card.updateTotalPrice()
  }
  card.updateQuantityButtons()
}

function decreaseQuantity(card) {
  if (card.quantity > 1) {
    card.quantity -= 1
    card.calculateDiscounts()
    card.updateWithoutDiscount()
    card.updateTotalPrice()
  }
  card.updateQuantityButtons()
}

ROOT_PRODUCTS_CONTAINER.innerHTML = htmlProductContainerPage

const decreaseButtons = document.querySelectorAll('.card-decrease-button')
const increaseButtons = document.querySelectorAll('.card-increase-button')

decreaseButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const cardId = button.closest('.product-card').id
    const card = getCardById(cardId)
    if (card) {
      card.decreaseQuantity()
    }
  })
})

increaseButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const cardId = button.closest('.product-card').id
    const card = getCardById(cardId)
    if (card) {
      card.increaseQuantity()
    }
  })
})
