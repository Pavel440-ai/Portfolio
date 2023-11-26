import { meta } from "../assets/images";
import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    react,
    redux,
    sass,
    summiz,
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
        imageUrl: express,
        name: "Express",
        type: "Backend",
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
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
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
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
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
    }
];

export const experiences = [
    {
        title: "Digital Marketing Freelancer",
        company_name: "",
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            "In my capacity as a freelance digital marketer, I have successfully collaborated with various clients to enhance their online presence and drive engagement. Responsibilities included developing social media strategies, creating compelling content, and utilizing analytics tools to measure campaign success.",
        ],
    },
    {
        title: "Web Development Enthusiast",
        company_name: "Self-Employed, Various Clients",
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Over the past year, I've taken on web development projects for local businesses and individuals seeking to establish or improve their online presence. This involved creating responsive and user-friendly websites using HTML, CSS, and JavaScript. Notable achievements include optimizing site functionality and implementing effective SEO strategies.",
        ],
    },
    {
        title: "Online Courses and Certifications",
        company_name: "Continuous Learning",
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "During periods between freelance projects, I have dedicated time to expand my skill set through online courses and certifications. Notable achievements include Data Science and Machine Learning (Course: Machine Learning by Andrew Ng on Coursera), demonstrating a commitment to staying current with industry trends and technologies. ",
        ],
    },
    {
        title: "Volunteer Experience",
        company_name: "Community Engagement",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "In addition to my professional pursuits, I have actively contributed to the community by volunteering my skills. This includes Website Development for Local Nonprofit (Collaborated with a local nonprofit organization to design and develop a user-friendly website, enhancing their online presence and facilitating community outreach.), showcasing my dedication to making a positive impact beyond traditional work settings.",
        ],
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
        link: 'https://github.com/Pavel440-ai',
    }
];

export const projects = [
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/Pavel440-ai/AI-Summariser',
    }
];