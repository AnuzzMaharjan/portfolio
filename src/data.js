/* All portfolio content lives here — edit this file, not the components. */

export const GITHUB_URL = 'https://github.com/AnuzzMaharjan';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/anuj-maharjan-85a4032a5/';
export const EMAIL = 'anuzz@anuj-maharjan.com.np';

export const experience = [
    {
        title: 'Backend Engineer',
        company: 'Kalash Services Pvt. Ltd.',
        period: 'Mar 2025 — Present',
        specs: [
            { label: 'arch', value: 'greenfield real-time Node.js backend as a modular monolith, split for future service extraction' },
            { label: 'core', value: 'layered core library — database resources, auth, error handling' },
            { label: 'data', value: 'PostgreSQL, MongoDB, MySQL, Redis' },
            { label: 'infra', value: 'Docker, Keycloak, OpenTelemetry observability' },
            { label: 'legacy', value: 'CodeIgniter/PHP maintenance; high-concurrency features migrating to Node/TypeScript' },
        ],
    },
    {
        title: 'Web Developer',
        company: 'Longtail e-Media Pvt. Ltd.',
        period: 'Jul 2024 — Mar 2025',
        body: 'Built and maintained websites with HTML, CSS, JavaScript, jQuery, and core PHP.',
    },
    {
        title: 'MERN Stack Intern',
        company: 'AGI Infotech',
        period: 'From Jul 2023 · 90 working days',
        body: 'Internship building web applications on the MERN stack — MongoDB, Express, React, and Node.',
    },
];

export const skills = [
    { name: 'javascript', detail: 'node, vanilla, typescript — daily at work' },
    { name: 'php', detail: 'codeigniter, core — daily at work' },
    { name: 'react', detail: 'side projects' },
    { name: 'rust', detail: 'learning — final year project' },
    { name: 'vue', detail: 'small personal projects' },
    { name: 'next / elysia', detail: 'basics' },
];

export const projects = [
    {
        title: 'lan_drop',
        link: 'https://github.com/AnuzzMaharjan/lan_drop',
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
        title: 'friendship rental service',
        link: 'https://friendshiprentalservice.com.np',
        description: 'Landing page for a rental service, built in React.',
        tech: ['React'],
    },
    {
        title: 'rust fundamentals series',
        private: true,
        description:
            'A run of small projects built while learning the language: a from-scratch binary tree, a vending machine, phone book, bank simulator, student grade tracker, temperature converter, and a player-control exercise.',
        tech: ['Rust', 'CLI', 'Data Structures'],
    },
];

export const stack = [
    { label: 'Databases', items: 'MySQL, PostgreSQL, MongoDB' },
    { label: 'Cache', items: 'Redis' },
    { label: 'Tooling', items: 'Docker, Git, Keycloak, OpenTelemetry' },
    { label: 'Frontend Utilities', items: 'Tailwind CSS, Bootstrap, jQuery, AJAX' },
    { label: 'From the Degree', items: 'C, Java, C#' },
    { label: 'Currently Learning', items: 'Rust, systems programming' },
];
