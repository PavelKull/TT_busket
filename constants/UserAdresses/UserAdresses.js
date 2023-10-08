import { STORE } from '../../utils/localStorageUtil.js'
const USER_ADRESSES = [
  { adress: 'Бишкек, улица Табышалиева, 57' },
  { adress: 'Бишкек, улица Жукеева-Пудовкина, 77/1' },
  { adress: 'Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1' },
]

USER_ADRESSES.forEach((adress) => {
  STORE.addAdress(adress)
})
console.log(STORE.getItems('adresses'))
