class Cart {
  constructor(product) {
    this.product = product
    this.quantity = 1
    this.totalPrice = this.product.price // Устанавливаем начальную стоимость
  }

  increaseQuantity() {
    this.quantity += 1
    this.updateTotalPrice()
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity -= 1
      this.updateTotalPrice()
    }
  }

  updateTotalPrice() {
    this.totalPrice = this.product.price * this.quantity
    this.render()
  }

  removeProduct() {
    // Добавьте здесь код для удаления карточки товара со страницы
  }

  toggleFavorite() {
    // Добавьте здесь код для изменения состояния избранного товара
  }

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
      discont,
    } = this.product

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

    const htmlCart = `
        <div class="product-card">
          <div class="card-left-wrap">
            <div class="contain-check-card-img"><input type="checkbox" id="${id}">
            <label for="${id}"></label>
            <img src="${img}" alt="${name}" class="product-image"></div>
            <div class="product-details">
              <h3 class="product-name">${name}</h3>
              <span class="product-description">
                ${colorHtml}
                ${sizeHtml}
              </span>
              <h4 class="card-location-info">${location1}</h4>
              <div class="card-seller">
              <h4 class="card-seller-info">${seller.name}</h4>
              <div class="card-seller-info">
                <img src="/assets/img/icon-20.svg" alt="info" class="card-seller-info-icon">
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
            
            <div class="cart-control">

              <div class="quantity-control">
                <button class="decrease-button" onclick="cart.decreaseQuantity()">-</button>
                <p class="product-quantity">${this.quantity}</p>
                <button class="increase-button" onclick="cart.increaseQuantity()">+</button>
                </div>
                <div class="product-exist-qty">${qtyText}</div>
                <button class="remove-button" onclick="cart.removeProduct()"><img src="/assets/img/delete.svg" alt="удалить" class="like-btn"></button>
                <button class="favorite-button" onclick="cart.toggleFavorite()"><img src="/assets/img/like.svg" alt="добавить в избранное" class="like-btn"></button></div>
              </div>
            </div>
            <div class="card-prices">
              <p class="product-price-discont">${this.totalPrice.toFixed(
                0
              )} сом</p>
              <p class="product-price">${this.totalPrice.toFixed(0)} сом</p>
            </div>
          </div>
        </div>
      `

    ROOT_CARTS.innerHTML = htmlCart
  }
}

// Пример использования:
const productData = CATALOG[2]

const cart = new Cart(productData)
cart.render()
