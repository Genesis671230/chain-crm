import {
    DirectionsCar,
    Groups,
    LocalMall,
    VerifiedUser
} from "@mui/icons-material";
import starIcon from "../assets/star.svg";
import stockIcon from "../assets/stock.svg";
export const products = [
    { image: <Groups />, title: "Customers", price: "7340" },
    { image: <LocalMall />, title: "Orders", price: "12907" },
    { image: <DirectionsCar />, title: "Delievery", price: "12907" },
    { image: <VerifiedUser />, title: "Users", price: "12907" },
    {
      image: <img src={stockIcon} className="w-[30px]" alt="revenue" />,
      title: "Revenue",
      price: "$ 7340",
    },
    {
      image: <img src={starIcon} className="w-[30px]" alt="stars" />,
      title: "AVG.RATING",
      price: "4.0",
    },
    {
      image: <img src={stockIcon} className="w-[30px]" alt="revenue" />,
      title: "AVG.REVENUE PER CUSTOMER",
      price: "$ 12907",
    },
    {
      image: <img src={stockIcon} className="w-[30px]" alt="revenue" />,
      title: "AVG.REVENUE PER USER",
      price: "$ 12907",
    },
  ];
  export const rows = [
    {
      type: "Squad",
      order: 25064,
      name:"Tommy Hacther",
      imageUrl: "https://source.unsplash.com/random/?ceo",
      rider: "Bill Cohen",
      orderAmount: "$ 123",
      status: "error",
    },
    {
      type: "Normal",
      order: 26752,
      name:"Natasha",
      imageUrl: "https://source.unsplash.com/random/?natasha",
      rider: "Ali Akram",
      orderAmount: "$ 87",
      status: "success",
    },
    {
      type: "Normal",
      order: 27565,
      name:"Hillary",
      imageUrl: "https://source.unsplash.com/random/?sarah",
      rider: "Mathew",
      orderAmount: "$ 95.50",
      status: "pending",
    },
    {
      type: "Normal",
      order: 28711,
      name:"Ammy Ana",
      imageUrl: "https://source.unsplash.com/random/?doctor",
      rider: "David" ,
      orderAmount: "$ 151",
      status: "double error",
    },
    {
      type: "Normal",
      order: 25824,
      name:"Robert",
      imageUrl: "https://source.unsplash.com/random/?manager",
      rider: "John",
      orderAmount: "$ 622",
      status: "pending",
    },
  ];