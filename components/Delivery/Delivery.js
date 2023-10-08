import { ROOT_DELIVERY } from '../../constants/root.js'
import { STORE } from '../../utils/localStorageUtil.js'

const adresses = STORE.getItems('adresses')

function openAddressModal() {
  addressModal.style.display = 'block'
}
const htmlDelivery = `
<div class="delivery">
    <div class="delivery-main">
        <h2>Способ доставки</h2>
        
        <div class="delivery-location">
            <h3>Пункт выдачи</h3>
            <div class="delivery-info-adress">
                <div class="delivery-adress">${1} Какой то адресс</div>
                <div class="delivery-time">
                    <span>⭐ &nbsp; 4.99 Ежедневно с 10 до 21</span>
                </div>
            </div>
        </div>


        <div class="delivery-price">
            <h3>Стоимость доставки</h3>
            <div>Бесплатно</div>
        </div>
        <div class="delivery-fastest-date">
            <h3>5&mdash;6 февраля</h3>
            <div id="loc-1"class="delivery-cards-location-1"></div>
            
        </div>
        <div class="delivery-date">
            <h3>7&mdash;8 февраля</h3>
            <div id="loc-2"class="delivery-cards-location-2"></div>
        </div>
        <div class="delivery-info">
            <img
                src="/assets/img/shipping-icon.svg"
                alt="Обратная доставка"
                class="delivery-icon"
            />
            <div class="delivery-info-container">
                Обратная доставка товаров на склад при отказе &mdash;
                <span class="delivery-green-text">бесплатно</span>
                <span class="delivery-popup"
                >Если товары вам не подойдут, мы вернем их обратно на склад &mdash;
                это бесплатно</span
                >
            </div>
        </div>
    </div>
    <button id="openModalBtn" class="edit-btn">Изменить</button>
</div>

`

ROOT_DELIVERY.innerHTML = htmlDelivery
