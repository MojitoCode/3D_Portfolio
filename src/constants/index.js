import {
    contact,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    nodejs,
    react,
    tailwindcss,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "Test Job Title 1",
        company_name: "Test Company Name 1",
        icon: '../assets/images/meta.png',
        iconBg: "#accbe1",
        date: "1/1/2015",
        points: [
            "some text", 
            "some more text",],
    },
    {
        title: "Test Job Title 2",
        company_name: "Test Company Name 2",
        icon: '../assets/images/shopify.png',
        iconBg: "#accbe1",
        date: "1/1/2016",
        points: [
            "some text", 
            "some more text",],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/ZomB37',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/skelly-/',
    },
];

export const projects = [
    {
        iconUrl: '../assets/icons/arrow.svg',
        theme: 'btn-back-yellow',
        name: 'name text 1',
        description: 'desc. text',
        link: 'https://www.linkedin.com/in/skelly-',
    },
    {
        iconUrl: '../assets/icons/arrow.svg',
        theme: 'btn-back-green',
        name: 'name text 2',
        description: 'desc. text',
        link: 'https://www.linkedin.com/in/skelly-',
    },
    {
        iconUrl: '../assets/icons/arrow.svg',
        theme: 'btn-back-blue',
        name: 'name text 3',
        description: 'desc. text',
        link: 'https://www.linkedin.com/in/skelly-',
    },
];