// Services Img Imports
import Web from '../assets/images/Services/Web.png';
import Mobile from '../assets/images/Services/Mobile.png';
import UIUX from '../assets/images/Services/Design.png';

// // Portfolio Img Imports
import Recruiting from '../assets/images/Portfolio/Recruiting.png';
import Stream from '../assets/images/Portfolio/Stream.png';
import Freelance from '../assets/images/Portfolio/Freelance.png';
import Aura from '../assets/images/Portfolio/Aura.png';
import Surtido from '../assets/images/Portfolio/Surtido.png';
import ManagementApp from '../assets/images/Portfolio/ManagementApp.png';

// // Advantages
import Communicative from '../assets/images/Advantages/Communicative.png';
import Collaborative from '../assets/images/Advantages/Collaborative.png';
import Management from '../assets/images/Advantages/Management.png';
import Favorite from '../assets/images/Advantages/Favorite.png';

// // Testimonials
import Sasha from '../assets/images/Testimonials/Sasha.jpg';
import Reiner from '../assets/images/Testimonials/Reiner.jpg';
import Kruger from '../assets/images/Testimonials/Kruger.jpg';

// TeamMembers
import CEO from '../assets/images/TeamMembers/vikash.jpeg';
import HRD from '../assets/images/TeamMembers/afshan.jpeg';
import Finance from '../assets/images/TeamMembers/deshu.jpeg';
// import ProjectManager from '../assets/images/TeamMembers/Project-manager.jpg';
// import Frontend1 from '../assets/images/TeamMembers/Frontend1.jpg';
// import Frontend2 from '../assets/images/TeamMembers/Frontend2.jpg';
// import Backend1 from '../assets/images/TeamMembers/Backend1.jpg';
// import Backend2 from '../assets/images/TeamMembers/Backend2.jpg';
// import Mobile1 from '../assets/images/TeamMembers/Mobile1.jpg';
// import Mobile2 from '../assets/images/TeamMembers/Mobile2.jpg';
// import UIUX1 from '../assets/images/TeamMembers/UIUX1.jpg';
// import UIUX2 from '../assets/images/TeamMembers/UIUX2.jpg';

export const Services = [
  {
    title: 'Privacy',
    imageUrl: Web,
    animation: 'left',
  },
  {
    title: 'Security',
    imageUrl: Mobile,
    animation: 'up',
  },
  {
    title: 'Innovation',
    imageUrl: UIUX,
    animation: 'right',
  },
];

export const Portfolios = [
  {
    id: 'asd1293uasdads1',
    title: 'Recruiting App',
    imageUrl: Recruiting,
    type: 'Mobile Apps',
    responsibility: [
      'Mobile Development',
      'UI/UX Design',
    ],
    credit: 'https://dribbble.com/shots/15164950-Recruiting-app',
  },
  {
    id: 'asd1293uhjkhkjh2',
    title: 'Stream+',
    imageUrl: Stream,
    type: 'Mobile Apps',
    responsibility: [
      'Mobile Development',
      'UI/UX Design',
    ],
    credit: 'https://dribbble.com/shots/15276430-Stream',
  },
  {
    id: 'asd1293uvbvcbbd3',
    title: 'Freelance',
    imageUrl: Freelance,
    type: 'Mobile Apps',
    responsibility: [
      'Mobile Development',
      'UI/UX Design',
    ],
    credit: 'https://dribbble.com/shots/15223131-Freelance-Mobile-App-Concept',
  },
  {
    id: 'asd1293ufgdfgs4',
    title: 'Aura',
    imageUrl: Aura,
    type: 'Website',
    responsibility: [
      'Web Development',
      'UI/UX Design',
    ],
    credit: 'https://dribbble.com/shots/15176338-Aura-Website-Main-Page',
  },
  {
    id: 'asd1293ulskmnb5',
    title: 'Surtido Rico',
    imageUrl: Surtido,
    type: 'Website',
    responsibility: [
      'Web Development',
      'UI/UX Design',
    ],
    credit: 'https://dribbble.com/shots/15173118-Surtido-Rico',
  },
  {
    id: 'asd1293ulkmnbj6',
    title: 'Courses Management',
    imageUrl: ManagementApp,
    type: 'Website',
    responsibility: [
      'Web Development',
      'UI/UX Design',
    ],
    credit: 'https://dribbble.com/shots/15197890-Courses-Management-and-Promoting-Web-App',
  },
];

export const Advantages = [
  [{
    title: 'Unmatched Privacy:',
    description: 'Your data is never shared or sold, ensuring complete confidentiality and peace of mind..',
    imageUrl: Communicative,
  },
  {
    title: 'Top Notch Security',
    description: 'Advanced encryption and innovative safeguards protect your chats from breaches and unauthorized access..',
    imageUrl: Management,
  }],
  [{
    title: 'Futuristic Features',
    description: 'Experience a sleek interface with cutting-edge tools that make chatting seamless, engaging, and enjoyable.',
    imageUrl: Collaborative,
  },
  {
    title: 'Full Data Ownership',
    description: "You control your information entirely; even we cannot access or use it for any purpose.",
    imageUrl: Favorite,
  }],
];
export const Testimonials = [
  {
    id: 1,
    name: 'Sasha Rose',
    company: 'Owner, Surveyor Corps',
    testimoni: 'Thanks for Racxstudio, you guys are the best! Keep up the great work!',
    imageUrl: Sasha,
  },
  {
    id: 2,
    name: 'Kruger Khan',
    company: 'Director, Shultan Oil',
    testimoni: 'I just wanted to let you know that it’s been great working with Racxstudio.',
    imageUrl: Kruger,
  },
  {
    id: 3,
    name: 'Reiner John',
    company: 'CEO, Marley CO',
    testimoni: 'Racxstudio is so great. Thank you so much for a job well done.',
    imageUrl: Reiner,
  },
];

export const TeamMembers = [
  {
    name: 'Vikash Kumar',
    position: 'Team Lead',
    imageUrl: CEO,
  },
  {
    name: 'Afshan Khan',
    position: 'Web Developer',
    imageUrl: HRD,
  },
  {
    name: 'Deshu Goyel',
    position: 'Marketing Manager',
    imageUrl: Finance,
  },
  // {
  //   name: 'Tom Jimmy',
  //   position: 'Project Manager',
  //   imageUrl: ProjectManager,
  // },
  // {
  //   name: 'Jim Hendrix',
  //   position: 'Front-end Developer',
  //   imageUrl: Frontend1,
  // },
  // {
  //   name: 'Calvin Max',
  //   position: 'Front-end Developer',
  //   imageUrl: Frontend2,
  // },
  // {
  //   name: 'Hawkins Jim',
  //   position: 'Back-end Developer',
  //   imageUrl: Backend1,
  // },
  // {
  //   name: 'Don Bizaro',
  //   position: 'Back-end Developer',
  //   imageUrl: Backend2,
  // },
  // {
  //   name: 'Bill Markinson',
  //   position: 'Mobile Developer',
  //   imageUrl: Mobile1,
  // },
  // {
  //   name: 'Igor Kavarov',
  //   position: 'Mobile Developer',
  //   imageUrl: Mobile2,
  // },
  // {
  //   name: 'Freddie Curl',
  //   position: 'UI/UX Designer',
  //   imageUrl: UIUX2,
  // },
  // {
  //   name: 'Monica Lovegood',
  //   position: 'UI/UX Designer',
  //   imageUrl: UIUX1,
  // },
];
