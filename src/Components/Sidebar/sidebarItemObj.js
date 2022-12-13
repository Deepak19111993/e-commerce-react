import { ReactComponent as DownArrow } from '../../assets/images/arrow.svg';
import image1 from '../../assets/images/icon/Platonic_4_-_Bucky_L.png';
import image2 from '../../assets/images/icon/Platonic_3_-_Icosa_L.png';
import image3 from '../../assets/images/icon/Sphere_Bottom_R.png';

export const sidebarItemObj = [
  {
    id: 1,
    name: 'Home',
    arrow: <DownArrow />,
    image: image1,
    link: '/',
    // childrens: [
    //   {
    //     id: 2,
    //     name: "Home1",
    //     image: image2,
    //     arrow: <DownArrow />,
    //     childrens: [
    //       {
    //         id: 3,
    //         name: "Home11",
    //         image: image3,
    //         arrow: <DownArrow />,
    //       },
    //       {
    //         id: 6,
    //         name: "Home22",
    //         image: image3,
    //         arrow: <DownArrow />,
    //         childrens: [
    //           {
    //             id: 61,
    //             name: "Home11",
    //             image: image3,
    //             arrow: <DownArrow />,
    //           },
    //           {
    //             id: 62,
    //             name: "Home22",
    //             image: image3,
    //             arrow: <DownArrow />,
    //           },
    //         ],
    //       },
    //     ],
    //   },
    //   {
    //     id: 7,
    //     name: "Home2",
    //     image: image2,
    //     arrow: <DownArrow />,
    //   },
    //   {
    //     id: 8,
    //     name: "Home3",
    //     image: image2,
    //     arrow: <DownArrow />,
    //   },
    //   {
    //     id: 9,
    //     name: "Home4",
    //     image: image2,
    //     arrow: <DownArrow />,
    //   },
    // ],
  },
  {
    id: 10,
    name: 'Stepper Form',
    arrow: <DownArrow />,
    image: image1,
    link: '/stepper',
    // childrens: [
    //   {
    //     id: 11,
    //     name: 'About1',
    //     image: image2,
    //     arrow: <DownArrow />,
    //   },
    //   {
    //     id: 12,
    //     name: 'About2',
    //     image: image2,
    //     arrow: <DownArrow />,
    //   },
    // ],
  },
  {
    id: 13,
    name: 'Quiz',
    arrow: <DownArrow />,
    image: image1,
    link: '/quiz',
  },
  {
    id: 14,
    name: 'Pdf Upload',
    arrow: <DownArrow />,
    image: image1,
    link: '/pdfupload',
  },
  {
    id: 16,
    name: 'Slot Booking',
    arrow: <DownArrow />,
    image: image1,
    link: '/slot',
  },
];
