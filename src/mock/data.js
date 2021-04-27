import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Isaiah Hamilton | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Isaiah Hamilton | Developer', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Isaiah',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "I'm a 15 year old kid that loves to bring cool UI and ideas to life with code. I've been coding for about 4 years and started in 2018 when I was 11 years old. Some things that I love to do is skateboarding, watch anime, and play osu.",
  paragraphTwo: ' ',
  paragraphThree: ' ',
  resume: 'https://docs.google.com/document/d/1jU-UkqTn0VKJJ6nrIP7PEbZ4o7LxtjTScLGeu_ALzzM/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'portfolio.png',
    title: 'Portfolio',
    info: "This is a simple project for me to show off my work and skills. The template is designed by Jacobo Martínez. The technologies I used to make this project was Javascript, and React.js",
    info2: '',
    url: '',
    repo: 'https://github.com/Isaiah-Hamilton/Isaiah-Hamilton.github.io', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'weather-control.png',
    title: 'Weather Control',
    info: 'Weather Control is a website that shows the weather using Open Weather API.',
    info2: 'Weather Control is still a work in progress, I aim for it to release on the Web, and any os that you can think of.',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '404.png',
    title: 'GitHub Clone',
    info: "I'm making a GitHub clone using react, and javascript.",
    info2: "This project has not stared but will soon, after I finish Weather Control's website.",
    url: '404.html',
    repo: 'https://github.com/Isaiah-Hamilton', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'isaiah7hamilton@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/isaiah-hamilton',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/isaiah-hamilton-093361209/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Isaiah-Hamilton',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};