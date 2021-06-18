import cardImg from "../Assets/image 21.svg";
import newArrive from "../Assets/Group 16578.svg";
// import add from '../../Assets/Vector.svg'
// import arrow from '../../Assets/Vector (1).svg'
// import compare from '../../Assets/compare (1) 1.svg'
// import detail from '../../Assets/Frame 16640.svg'

const cardData = [
  {
    id: "01",
    newArrival: newArrive,
    cardImg: cardImg,
    title: "Arove",
    name: "Darran",
    desc: "Small Acacia Stool Or Table",
    price: "550",
    qty: 1,
  },
  {
    id: "02",
    newArrival:newArrive,
    cardImg: cardImg,
    title: "Brove",
    name: "Darran",
    desc: "Small Acacia Stool Or Table",
    price: "640",
    qty: 1,
  },
  {
    id: "03",
    newArrival: newArrive,
    cardImg: cardImg,
    title: "Crove",
    name: "Darran",
    desc: "Small Acacia Stool Or Table",
    price: "390",
    qty: 1,
  },
  {
    id: "04",
    newArrival: newArrive,
    cardImg: cardImg,
    title: "Drove",
    name: "Darran",
    desc: "Small Acacia Stool Or Table",
    price: "796",
    qty: 1,
  },
  {
    id: "05",
    newArrival: newArrive,
    cardImg: cardImg,
    title: "Grove",
    name: "Darran",
    desc: "Small Acacia Stool Or Table",
    price: "899",
    qty: 1,
  },
  {
    id: "06",
    // newArrival:newArrive,
    cardImg: cardImg,
    title: "Grove",
    name: "Darran",
    desc: "Small Acacia Stool Or Table",
    price: "421",
    qty: 1,
  },
  {
    id: "07",
    newArrival: newArrive,
    cardImg: cardImg,
    title: "Zrove",
    name: "Darran",
    desc: "Small Acacia Stool Or Table",
    price: "675",
    qty: 1,
  },
];

export const InitialState = {
  cardData,
  filteredData: cardData,
  checkbox: [
    { val: "Desks and Workspace", bool: false },
    { val: "Healthcare", bool: false },
    { val: "Accessories", bool: false },
    { val: "JSI", bool: false },
    { val: "Tables", bool: false },
    { val: "Seating", bool: false },
    { val: "Traninig Tables", bool: false },
    { val: "Lounge Seating", bool: false },
    { val: "Benches & Ottomans", bool: false },
    { val: "Occasional Tables", bool: false },
    { val: "Side Chairs", bool: false },
    { val: "Task Chairs", bool: false },
    { val: "AIS", bool: false },
    { val: "Darran", bool: false },
    { val: "JSI", bool: false },
    { val: "Element Contract", bool: false },
    { val: "Stance Healthcare", bool: false },
    { val: "Hush Office", bool: false },
  ],
  tags: [],
  cart: [],
  compare:[]
};
