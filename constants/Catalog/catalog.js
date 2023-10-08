import { STORE } from '../../utils/localStorageUtil.js'

const USER_DISCOUNT = 10
const CATALOG = [
  {
    id: 1,
    name: 'Футболка UZCotton мужская',
    color: 'белый',
    size: '56',
    seller: {
      name: 'ООО Вайлдберриз',
      ogrn: 5167746237148,
      adress:
        '129337, Москва, улица Красная Сосна, 2, корпус 1, стр 1, помещене 2, офис 34',
    },
    location1: 'Коледино WB',
    location2: 'Другой склад',
    quantityLocation1: 2,
    quantityLocation2: 0,
    price: 1051,
    img: '/constants/Catalog/img/tshirt.jpg',
    discount: 20,
  },
  {
    id: 2,
    name: 'Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple IPhone XR, MobiSafe',
    color: 'прозрачный',
    seller: {
      name: 'ООО Мегапрофстиль',
      ogrn: 7767746237177,
      adress:
        '25637, Самара, улица Красная Сосна, 2, корпус 1, стр 1, помещене 2, офис 34',
    },
    location1: 'Коледино WB',
    location2: 'Другой склад',
    quantityLocation1: 184,
    quantityLocation2: 16,
    price: 10500.235,
    img: '/constants/Catalog/img/bamber.jpg',
    discount: 55,
  },
  {
    id: 3,
    name: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell',
    seller: {
      name: 'ООО Вайлдберр из',
      ogrn: 5167746237148,
      adress:
        '129337, Москва, улица Красная Сосна, 2, корпус 1, стр 1, помещене 2, офис 34',
    },
    location1: 'Коледино WB',
    location2: 'Другой склад',
    quantityLocation1: 2,
    quantityLocation2: 0,
    price: 950,
    img: '/constants/Catalog/img/faber-castel.jpg ',
    discount: 3,
  },
]

CATALOG.forEach((product) => {
  STORE.addItem('products', product)
})
STORE.setDiscount(USER_DISCOUNT)
