import { GiChocolateBar } from "react-icons/gi";
import { FaCandyCane } from "react-icons/fa";
import { TbCookie } from "react-icons/tb";
import { RxCross1 } from "react-icons/rx";
export const category = [
  {
    id: 0,
    title: "Chocolate",
    data: "chocolate",
    icon: <GiChocolateBar />,
  },
  {
    id: 1,
    title: "Macaroons",
    data: "macaroons",
    icon: <TbCookie />,
  },
  {
    id: 2,
    title: "Candies",
    data: "candies",
    icon: <FaCandyCane />,
  },
  {
    id: 3,
    title: "Reset",
    data: "",
    icon: <RxCross1 />,
  },
];
