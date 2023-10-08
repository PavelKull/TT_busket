import { ROOT_CARDS, ROOT_CARDS_SOLD_OUT } from '../../constants/root.js'

import { STORE } from '../../utils/localStorageUtil.js'
export class Card {
  constructor(product, discountUser) {
    this.product = product
    this.quantity = 1
    this.withoutDiscount = this.product.price

    this.discountUser = discountUser
    this.discountFirst = 0
    this.discountSecond = 0
    this.cardElement = null
    this.updateTotalPrice()
    this.calculateDiscounts()
  }
  updateTotalPrice() {
    this.totalPrice = +(
      this.withoutDiscount -
      this.discountSecond -
      this.discountFirst
    ).toFixed(0)
    this.render()
  }
  updateQuantityButtons() {
    const decreaseButton = document.querySelector('.card-decrease-button')
    const increaseButton = document.querySelector('.card-increase-button')

    if (this.quantity === 1) {
      decreaseButton.classList.add('min')
    } else {
      decreaseButton.classList.remove('min')
    }

    if (
      this.quantity >=
      this.product.quantityLocation1 + this.product.quantityLocation2
    ) {
      increaseButton.classList.add('max')
    } else {
      increaseButton.classList.remove('max')
    }
  }

  calculateDiscounts() {
    const { discount } = this.product
    this.discountFirst = (discount / 100) * this.product.price * this.quantity
    this.discountSecond =
      +(this.discountUser / 100) * this.product.price * this.quantity
    this.render()
  }

  increaseQuantity() {
    if (
      this.quantity <
      this.product.quantityLocation1 + this.product.quantityLocation2
    ) {
      this.quantity += 1
      this.calculateDiscounts()
      this.updateWithoutDiscount()
      this.updateTotalPrice()
    }
    this.updateQuantityButtons()
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity -= 1
      this.calculateDiscounts()
      this.updateWithoutDiscount()
      this.updateTotalPrice()
    }
    this.updateQuantityButtons()
  }

  updateWithoutDiscount() {
    this.withoutDiscount = this.product.price * this.quantity
    this.render()
  }

  deleteProduct() {
    STORE.removeItem('products', this.product.id)
    this.render()
  }

  toggleFavorite() {}

  render() {
    const {
      name,
      color,
      size,
      img,
      seller,
      id,
      location1,
      location2,
      quantityLocation2,
      quantityLocation1,
      price,
      discount,
    } = this.product

    this.cardElement = document.getElementById(`card${this.product.id}`)
    let colorHtml = ''
    let sizeHtml = ''

    if (color) {
      colorHtml = `<p class="product-color">Цвет: ${color}</p>`
    }

    if (size) {
      sizeHtml = `<p class="product-size">Размер: ${size}</p>`
    }

    let totalQty = +quantityLocation1 + +quantityLocation2
    const qtyText = totalQty < 3 ? `Осталось ${totalQty} шт.` : ' '

    const htmlCardsoldOut = `<div
    id="${id}"
    class="product-card "
  >
    <div class="card-left-wrap gray-content">
      <img
        src="${img}"
        alt="${name}"
        class="product-image"
      />
      <div class="product-details">
        <h3 class="product-name">${name}</h3>
        <span class="product-description"> ${colorHtml} ${sizeHtml} </span>
      </div>
    </div>
  
    <div class="card-right-wrap">
      <button
        class="favorite-button"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.03399 4.05857C2.26592 4.75224 1.76687 5.83284 1.99496 7.42928C2.22335 9.02783 3.26497 10.6852 4.80439 12.3478C6.25868 13.9184 8.10965 15.4437 9.99999 16.874C11.8903 15.4437 13.7413 13.9184 15.1956 12.3478C16.7351 10.6852 17.7767 9.02783 18.005 7.4293C18.2331 5.83285 17.734 4.75224 16.9659 4.05856C16.1767 3.34572 15.055 3 14 3C12.132 3 11.0924 4.08479 10.5177 4.68443C10.4581 4.7466 10.4035 4.80356 10.3535 4.85355C10.1583 5.04882 9.84169 5.04882 9.64643 4.85355C9.59644 4.80356 9.54185 4.7466 9.48227 4.68443C8.9076 4.08479 7.868 3 5.99999 3C4.94498 3 3.82328 3.34573 3.03399 4.05857ZM2.36374 3.31643C3.37372 2.40427 4.75205 2 5.99999 2C8.07126 2 9.34542 3.11257 9.99999 3.77862C10.6545 3.11257 11.9287 2 14 2C15.2479 2 16.6262 2.40428 17.6362 3.31644C18.6674 4.24776 19.2669 5.66715 18.995 7.5707C18.7233 9.47217 17.515 11.3148 15.9294 13.0272C14.3355 14.7486 12.3064 16.3952 10.3 17.9C10.1222 18.0333 9.87776 18.0333 9.69999 17.9C7.69356 16.3952 5.66446 14.7485 4.07063 13.0272C2.48506 11.3148 1.27668 9.47217 1.00501 7.57072C0.733043 5.66716 1.33253 4.24776 2.36374 3.31643Z"
            fill="black"
          />
        </svg>
      </button>
      <button
        class="remove-button"
        
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z"
            fill="black"
          />
        </svg>
      </button>
      <div class="card-prices-default">

      </div>
    </div>
  </div>
  `

    const htmlCard = `<div
        id="${id}"
        class="product-card"
      >
        <div class="card-left-wrap">
          <div class="card-contain-check-img">
            <input
              type="checkbox"
              id="${id}"
            />
            <label
              class="cart-label"
              for="${id}"
            ></label>
            <img
              src="${img}"
              alt="${name}"
              class="product-image"
            />
          </div>
          <div class="product-details">
            <h3 class="product-name">${name}</h3>
            <span class="product-description">
              ${colorHtml} ${sizeHtml}
            </span>
            <h4 class="card-location-info">${location1}</h4>
            <div class="card-seller">
              <h4 class="card-seller-info">${seller.name}</h4>
              <div class="card-seller-info">
                <img
                  src="/assets/img/icon-20.svg"
                  alt="info"
                  class="card-seller-info-icon"
                />
                <div class="card-seller-info-popup">
                  <h3>${seller.name}</h3>
                  <p>ОГРН: ${seller.ogrn}</p>
                  <p>${seller.adress}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card-right-wrap">
          <div class="card-control">
            <div class="quantity-control">
              <button
                class="card-decrease-button"
              >
                &#8211;
              </button>
              <p class="product-quantity">${this.quantity}</p>
              <button
                class="card-increase-button"
              >
                +
              </button>
            </div>
            <div class="card-elements">
              <div class="product-exist-qty">${qtyText}</div>
              <div class="card-hidden-btns">
                <button
                  class="favorite-button"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.03399 4.05857C2.26592 4.75224 1.76687 5.83284 1.99496 7.42928C2.22335 9.02783 3.26497 10.6852 4.80439 12.3478C6.25868 13.9184 8.10965 15.4437 9.99999 16.874C11.8903 15.4437 13.7413 13.9184 15.1956 12.3478C16.7351 10.6852 17.7767 9.02783 18.005 7.4293C18.2331 5.83285 17.734 4.75224 16.9659 4.05856C16.1767 3.34572 15.055 3 14 3C12.132 3 11.0924 4.08479 10.5177 4.68443C10.4581 4.7466 10.4035 4.80356 10.3535 4.85355C10.1583 5.04882 9.84169 5.04882 9.64643 4.85355C9.59644 4.80356 9.54185 4.7466 9.48227 4.68443C8.9076 4.08479 7.868 3 5.99999 3C4.94498 3 3.82328 3.34573 3.03399 4.05857ZM2.36374 3.31643C3.37372 2.40427 4.75205 2 5.99999 2C8.07126 2 9.34542 3.11257 9.99999 3.77862C10.6545 3.11257 11.9287 2 14 2C15.2479 2 16.6262 2.40428 17.6362 3.31644C18.6674 4.24776 19.2669 5.66715 18.995 7.5707C18.7233 9.47217 17.515 11.3148 15.9294 13.0272C14.3355 14.7486 12.3064 16.3952 10.3 17.9C10.1222 18.0333 9.87776 18.0333 9.69999 17.9C7.69356 16.3952 5.66446 14.7485 4.07063 13.0272C2.48506 11.3148 1.27668 9.47217 1.00501 7.57072C0.733043 5.66716 1.33253 4.24776 2.36374 3.31643Z"
                      fill="black"
                    />
                  </svg>
                </button>
                <button
                  class="remove-button"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z"
                      fill="black"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z"
                      fill="black"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="card-prices">
            <p class="product-price">${this.totalPrice.toLocaleString()} сом</p>
            <div class="product-price-discount">
              <span>${this.withoutDiscount.toLocaleString()} сом</span>
              <div class="card-price-popup">
                <div class="card-price-popup-wrap">
                  <div class="column">
                    <p>Скидка ${discount}%</p>
                    <p>Скидка покупателя ${this.discountUser}%</p>
                  </div>
                  <div class="column-black">
                    <p>-${this.discountFirst.toFixed(0)} сом</p>
                    <p>-${this.discountSecond.toFixed(0)} сом</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
`

    return totalQty === 0
      ? (ROOT_CARDS_SOLD_OUT.innerHTML = htmlCardsoldOut)
      : (ROOT_CARDS.innerHTML = htmlCard)
  }
}
