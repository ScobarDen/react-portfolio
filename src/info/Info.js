import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"


export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];


export const info = {
    firstName: "Denis",
    lastName: "Guschin",
    initials: "dg",
    position: "a Frontend Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '☕',
            text: 'fueled by tea'
        },
        {
            emoji: '🌎',
            text: 'based in the Saint-Petersburg'
        },
        {
            emoji: "💼",
            text: "React developer at freelance"
        },
        {
            emoji: "📧",
            text: "gdv-ps@yandex.ru"
        },
    ],
    socials: [
        {
            link: "https://t.me/ScobarDen",
            icon: 'fa fa-telegram',
            label: 'telegram'
        },
        {
            link: "https://vk.com/denis_guschin",
            icon: 'fa fa-vk',
            label: 'vk'
        },
        {
            link: "https://instagram.com/denzacuduro",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/ScobarDen",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/denis-guschin-scobar/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/denzacuduro?t=6ZjOZAfafsihVPJBEnlPhA&s=09",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
    ],
    bio: "Hello! I'm Denis. I'm a React developer for freelance. I studied radio-engineer at SPBETU, but now fully immersed in learning the frontend, I am an active blood donor and I believe this saved someone's life. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'redux', 'git', 'bootstrap', 'html5', 'css3', 'figma'],
            exposedTo: ['nodejs', 'python', 'matlab', 'C++']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'psychology',
            emoji: '🧠'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'family',
            emoji: '👪'
        }
    ],
    portfolio: [
        {
            title: "React blog",
            live: "https://mern-blog-frontend-g4h3.onrender.com/",
            source: "https://github.com/ScobarDen/blog-mern-frontend",
            image: mock5
        },
        {
            title: "React chess",
            live: "https://scobarden.github.io/react-chess/",
            source: "https://github.com/ScobarDen/react-chess",
            image: mock1
        },
        {
            title: "Beats landing",
            live: "https://scobarden.github.io/responsive-website-beats/",
            source: "https://github.com/ScobarDen/responsive-website-beats",
            image: mock2
        },
        {
            title: "Shorten links",
            live: "https://github.com/ScobarDen/mern-app",
            source: "https://github.com/ScobarDen/mern-app",
            image: mock3
        },
        {
            title: "Pizza's Store",
            live: "https://scobarden.github.io/react-ts-pizza-store/",
            source: "https://github.com/ScobarDen/react-ts-pizza-store",
            image: mock4
        },
    ]
}