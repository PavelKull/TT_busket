import { ROOT_ASIDE } from '../../constants/root.js'
import { STORE } from '../../utils/localStorageUtil.js'

const htmlAside = `<div class="aside">
        <div class="aside-details">
          <div class="aside-details-left">
            <h2 class="aside-title">Итого</h2>
            <p>${1}товара</p>
            <p>Скидки</p>
            <p>Доставка</p>
          </div>
          <div class="aside-details-right">
            <h2 class="aside-title">${2} сом</h2>
            <p>${3} сом</p>
            <p>${4} сом</p>
            <p>Бесплатно</p>
          </div>
        </div>
        <div class="aside-delivery">
          <div class="aside-delivery-location">
            <h3>Доставка в пункт выдачи</h3>
            <p>${3} Какой то адресс</p>
            <p class="aside-delivery-date">${''} 5&ndash;8 фев</p>
          </div>
          <button id="aside-openModalBtn" class="aside-edit">
            <img src="/assets/img/pencil-icon.svg" alt="Обратная доставка"/></button>
        </div>
        <div class="aside-info">
          <img
            src="/assets/img/shipping-icon.svg"
            alt="Обратная доставка"
            class="aside-delivery-icon"
          />
          <p>
            Обратная доставка товаров на склад при отказе &mdash;
            <span class="aside-green-text">бесплатно</span>
            <span class="aside-delivery-popup">Если товары вам не подойдут, мы вернем их обратно на склад &mdash; это бесплатно</span>
          </p>
          
        </div>
        <div class="aside-payment">
          <div class="aside-payment-info">
            <h3>Оплата картой</h3>
            <div class="aside-payment-card">
              <img class="aside-payment-card-icon" src="/constants/Payment/icons/MIR-icon.svg" alt="Карта оплаты"/>
              <span> ${1}233232323232323</span>
            </div>
          </div>
          <button class="aside-edit"><img src="/assets/img/pencil-icon.svg" alt="Обратная доставка"/></button>
        </div>
        <div class="aside-check-payment">
          <input
            type="checkbox"
            id="check-payment"
          />
          <label
            class="check-payment"
            for="check-payment"
            >Списать оплату сразу</label
          >
          <p>Спишем оплату с карты при получении</p>
        </div>
        <button class="aside-confirm">
          <span class="confirm-not-checked">Заказать</span>
          <span class="confirm-checked">Оплатить ${4} сом</span>
        </button>
        <div class="aside-rules">
          <p><svg
          width="13"
          height="11"
          viewBox="0 0 13 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.7656 1.68034L4.59581 10.4815L0.257278 5.66922L1.74272 4.33001L4.61735 7.51853L11.2998 0.319672L12.7656 1.68034Z"
            fill="black"
          />
        </svg> Соглашаюсь <span class="aside-rules-underlined-text">с правилами пользования торговой площадкой</span> и <span class="aside-rules-underlined-text">возврата</span></p>
        </div>
    </div>`
ROOT_ASIDE.innerHTML = htmlAside
