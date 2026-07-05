/* All portfolio content lives here — edit this file, not the components. */

export const GITHUB_URL = 'https://github.com/AnuzzMaharjan';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/anuj-maharjan-85a4032a5/';
export const EMAIL = 'anuzz@anuj-maharjan.com.np';

export const journey = [
    {
        title: 'Software Developer',
        period: 'Present',
        body: 'Building and maintaining web applications with Node, vanilla JavaScript, and CodeIgniter (PHP). Previously worked with core PHP.',
    },
    {
        title: 'BCA — Bachelor of Computer Applications',
        period: 'Final Semester · Ongoing',
        body: 'Currently in the final semester. Final year project: lan_drop — a Rust-based LAN file-transfer tool built on raw TCP/UDP.',
    },
];

export const skills = [
    { name: 'javascript', detail: 'node, vanilla, typescript — daily at work', level: 8 },
    { name: 'php', detail: 'codeigniter, core — daily at work', level: 8 },
    { name: 'react', detail: 'side projects', level: 5 },
    { name: 'rust', detail: 'learning — final year project', level: 4 },
    { name: 'vue', detail: 'small personal projects', level: 3 },
    { name: 'next / elysia', detail: 'basics', level: 2 },
];

export const projects = [
    {
        title: 'lan_drop',
        private: true,
        description:
            'File transfer over LAN with simple-to-no config. Built on raw TCP streams and UDP packets, moving raw bytes between machines. CLI-driven with simple commands. Final year university project and my first major Rust build.',
        tech: ['Rust', 'TCP/UDP', 'mpsc', 'Mutex', 'Threads'],
    },
    {
        title: 'expense tracking system',
        link: 'https://github.com/AnuzzMaharjan/ETS',
        description:
            'Expense tracking web app built for the 6th semester — an Elysia.js (TypeScript) API on the Bun runtime, Zod validation, MongoDB storage, and a Vue.js front end served via CDN.',
        tech: ['Elysia.js', 'TypeScript', 'Bun', 'Vue.js', 'Zod', 'MongoDB'],
    },
    {
        title: 'frs',
        link: 'https://github.com/AnuzzMaharjan/FRS',
        description:
            'E-commerce project for the 5th semester, built end-to-end on the MERN stack — MongoDB, Express, React, and Node.',
        tech: ['MongoDB', 'Express', 'React', 'Node'],
    },
    {
        title: 'hrms',
        link: 'https://github.com/AnuzzMaharjan/hrms-php',
        description:
            'Human resource management system for the 4th semester, written in PHP on MySQL.',
        tech: ['PHP', 'MySQL'],
    },
    {
        title: 'digital clock',
        link: 'https://github.com/AnuzzMaharjan/digital-clock',
        description:
            'A digital clock in plain HTML, CSS, and JavaScript — no libraries, no build step.',
        tech: ['Vanilla JS'],
    },
    {
        title: 'binary_tree',
        private: true,
        description:
            'A from-scratch binary tree implementation in Rust — ownership and recursive data structures without the training wheels.',
        tech: ['Rust', 'Data Structures'],
    },
    {
        title: 'rust fundamentals series',
        private: true,
        description:
            'A run of small projects built while learning the language: a vending machine, phone book, bank simulator, student grade tracker, temperature converter, and a player-control exercise.',
        tech: ['Rust', 'CLI'],
    },
];

export const stack = [
    { label: 'Databases', items: 'MySQL, PostgreSQL, MongoDB' },
    { label: 'Cache', items: 'Redis' },
    { label: 'Tooling', items: 'Docker, Git' },
    { label: 'Frontend Utilities', items: 'Tailwind CSS, Bootstrap, jQuery, AJAX' },
    { label: 'From the Degree', items: 'C, Java, C#' },
    { label: 'Currently Learning', items: 'Rust, systems programming' },
];
