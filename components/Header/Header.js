class Header {
  render() {
    const html = `<header>
          <div class="header-content">
            <button class="header__menu-btn">
              <img class="header__menu-btn-icon"
                src="/components/Header/img/menu_burger.svg"
                alt="menu"
              />
            </button>
            <div class="header__title"><h1>ТОВАРЫ <br> И ТОЧКА</h1></div>
            <form class="header__form">
              <label class="header__form-label" for="header__form-input">
                <input
                  type="text"
                  class="header__form-input"
                  placeholder="Я ищу..."
                  id="header__form-input"
                  />
              </label>
            
            <button class="header__form-btn type="submit">
              <img class="header__form-search-icon" src="/components/Header/img/searcher.svg" alt="Искать">
              </svg>
            </button>
            </form>
            <button class="header__btn-pfofile">
            <img class="header__btn-pfofile-icon" src="/components/Header/img/profile-icon.svg" alt="Профиль">
            </svg>
              <p>Профиль</p>
            </button>
            <button class="header__btn-busket">
              <img class="header__btn-busket-icon" src="/components/Header/img/busket-icon.svg" alt="Корзина">
              </svg>
              <p>Корзина</p>
            </button>
        </header>`
    ROOT_HEADER.innerHTML = html
  }
}
const headerPage = new Header()

headerPage.render()
