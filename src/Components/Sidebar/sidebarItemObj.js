import { ReactComponent as DownArrow } from "../../assets/images/arrow.svg";
import image1 from "../../assets/images/icon/Platonic_4_-_Bucky_L.png";
import image2 from "../../assets/images/icon/Platonic_3_-_Icosa_L.png";
import image3 from "../../assets/images/icon/Sphere_Bottom_R.png";

export const sidebarItemObj = [
  {
    id: 1,
    name: "Home",
    arrow: <DownArrow />,
    image: image1,
    childrens: [
      {
        id: 2,
        name: "Home1",
        image: image2,
        arrow: <DownArrow />,
        childrens: [
          {
            id: 3,
            name: "Home11",
            image: image3,
            arrow: <DownArrow />,
          },
          {
            id: 6,
            name: "Home22",
            image: image3,
            arrow: <DownArrow />,
          },
        ],
      },
      {
        id: 7,
        name: "Home2",
        image: image2,
        arrow: <DownArrow />,
      },
      {
        id: 8,
        name: "Home3",
        image: image2,
        arrow: <DownArrow />,
      },
      {
        id: 9,
        name: "Home4",
        image: image2,
        arrow: <DownArrow />,
      },
    ],
  },
  {
    id: 10,
    name: "About",
    arrow: <DownArrow />,
    image: image1,
    childrens: [
      {
        id: 11,
        name: "About1",
        image: image2,
        arrow: <DownArrow />,
      },
      {
        id: 12,
        name: "About2",
        image: image2,
        arrow: <DownArrow />,
      },
    ],
  },
  {
    id: 13,
    name: "Services",
    arrow: <DownArrow />,
    image: image1,
  },
  {
    id: 14,
    name: "Portfolio",
    arrow: <DownArrow />,
    image: image1,
  },
  {
    id: 16,
    name: "Blog",
    arrow: <DownArrow />,
    image: image1,
  },
];
