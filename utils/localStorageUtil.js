class LocalStorageUtil {
  constructor() {
    this.productsKeyName = 'products'
    this.discountKeyName = 'discount'
    this.cardsKeyName = 'cards'
    this.userAdressesKeyName = 'adresses'
  }

  getItems(keyName) {
    const itemsLocalStorage = localStorage.getItem(keyName)
    if (itemsLocalStorage !== null) {
      return JSON.parse(itemsLocalStorage)
    }
    return []
  }
  addItem(keyName, item) {
    let items = this.getItems(keyName)
    let pushItem = false
    const index = items.findIndex((p) => p.id === item.id)
    if (index === -1) {
      items.push(item)
      pushItem = true
    } else {
      items.splice(index, 1)
    }

    localStorage.setItem(keyName, JSON.stringify(items))

    return {
      pushItem,
      items,
    }
  }
  removeItem(keyName, itemId) {
    let items = this.getItems(keyName)
    const index = items.findIndex((item) => item.id === itemId)
    if (index !== -1) {
      items.splice(index, 1)
      localStorage.setItem(keyName, JSON.stringify(items))
    }
  }

  setDiscount(discount) {
    localStorage.setItem(this.discountKeyName, discount.toString())
  }

  getDiscount() {
    const discountLocalStorage = localStorage.getItem(this.discountKeyName)
    if (discountLocalStorage !== null) {
      return +discountLocalStorage
    }
    return 0
  }
  addAdress(item) {
    let items = this.getItems(this.userAdressesKeyName)
    let pushItem = false
    const isDuplicate = items.some(
      (existingItem) => existingItem.adress === item.adress
    )

    if (!isDuplicate) {
      items.push(item)
      pushItem = true
      localStorage.setItem(this.userAdressesKeyName, JSON.stringify(items))
    }

    return {
      pushItem,
      items,
    }
  }
}

const STORE = new LocalStorageUtil()
export { STORE }
