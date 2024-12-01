import react from "../images/react.svg";
import js from "../images/js.svg";
import tailwind from "../images/tailwind.png";
import pr1 from "../images/pr1.webp";
import pr2 from "../images/csti.webp";
import pr3 from "../images/server.webp";

export const proects = [
  {
    id: 1,
    img: pr1,
    title: "Pressa edu uz",
    description:
      "Pressa.edu.uz – oliy ta’lim muassasalari matbuot kotiblari uchun mo'ljallangan, OAVga chiqishlarni nazorat qilish va boshqarishni osonlashtiradigan platforma",
    tecnoligics: [
      {
        id: 100,
        img: react,
      },
      {
        id: 101,
        img: js,
      },
      {
        id: 102,
        img: tailwind,
      },
    ],
    github: "https://github.com/NurzodMardiyev/pressa.ed.uz",
    link: "https://pressa-edu-uz.vercel.app/",
  },
  {
    id: 2,
    img: pr2,
    title: "CSTI uz",
    description:
      "Csti.uz – ilmiy-texnik axborot markazi sayti, ilm-fan, texnologiyalar va innovatsiyalarni rivojlantirishga yo‘naltirilgan ma'lumotlar platformasi.",
    tecnoligics: [
      {
        id: 200,
        img: react,
      },
      {
        id: 201,
        img: js,
      },
      {
        id: 202,
        img: tailwind,
      },
    ],
    github: "https://github.com/NurzodMardiyev/CSTI.uz",
    link: "https://csti.uz/",
  },
  {
    id: 3,
    img: pr3,
    title: "Server CSTI",
    description:
      "Csti server – ilmiy-texnik axborot markazi uchun mo'ljallangan, serverlarni sotish va texnik xizmat ko'rsatishni ta'minlovchi platforma.",
    tecnoligics: [
      {
        id: 300,
        img: react,
      },
      {
        id: 301,
        img: js,
      },
      {
        id: 302,
        img: tailwind,
      },
    ],
    github: "https://github.com/NurzodMardiyev/Server-CSTI",
    link: "https://server-csti.vercel.app/",
  },
];
