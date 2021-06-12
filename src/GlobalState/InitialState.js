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
    price: '550',
  },
  {
    id: "02",
    // newArrival:newArrive,
    cardImg: cardImg,
    title: "Brove",
    name: "Darran",
    desc: "Small Acacia Stool Or Table",
    price: '640',
  },
  {
    id: "03",
    newArrival: newArrive,
    cardImg: cardImg,
    title: "Crove",
    name: "Darran",
    desc: "Small Acacia Stool Or Table",
    price: '390',
  },
  {
    id: "04",
    newArrival: newArrive,
    cardImg: cardImg,
    title: "Drove",
    name: "Darran",
    desc: "Small Acacia Stool Or Table",
    price: '796',
  },
  {
    id: "05",
    newArrival: newArrive,
    cardImg: cardImg,
    title: "Grove",
    name: "Darran",
    desc: "Small Acacia Stool Or Table",
    price: '899',
  },
  {
    id: "06",
    // newArrival:newArrive,
    cardImg: cardImg,
    title: "Grove",
    name: "Darran",
    desc: "Small Acacia Stool Or Table",
    price: '421',
  },
  {
    id: "07",
    newArrival: newArrive,
    cardImg: cardImg,
    title: "Zrove",
    name: "Darran",
    desc: "Small Acacia Stool Or Table",
    price: '675',
  },
]

export const InitialState = {
  cardData,
  filteredData:[...cardData]
};
