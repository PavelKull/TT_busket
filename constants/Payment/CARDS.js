import { STORE } from '../../utils/localStorageUtil.js'

const CARDS = [
  { title: 'MIR', icon: './icons/MIR-icon.svg', id: 4400707032843037 },
  { title: 'VISA', icon: './icons/VISA-icon.svg', id: 5226465144045277 },
  {
    title: 'MasterCard',
    icon: './icons/MS-icon.svg',
    number: 5144739552534470,
  },
  { title: 'BANK', icon: './icons/CARD4-icon.svg', id: 6011233975102626 },
]

CARDS.forEach((card) => {
  STORE.addItem('cards', card)
})
