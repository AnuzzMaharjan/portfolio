import { Mail } from 'lucide-react';
import { EMAIL, GITHUB_URL, LINKEDIN_URL, journey, projects, skills, stack } from './data.js';
import { GithubIcon, LinkedinIcon } from './components/Icons.jsx';
import Nav from './components/Nav.jsx';
import Section from './components/Section.jsx';
import SkillBar from './components/SkillBar.jsx';
import ProjectItem from './components/ProjectItem.jsx';

/*
  Minimalist Monospace Portfolio
  Design Philosophy: "Raw & Structural". No decorations, just content.
*/

export default function App() {
    return (
        <div id="top">
            <a href="#main" className="skip-link">skip to content</a>
            <Nav />
            <main id="main" className="container pt-20 pb-20">

                {/* HERO */}
                <header className="mb-32">
                    <div className="text-subtle text-sm mb-4">
                        ~/anuj-maharjan $ whoami<span className="cursor" aria-hidden="true" />
                    </div>
                    <h1 className="text-3xl md:text-4xl leading-tight mb-8">
                        Build for the web with JavaScript &amp; PHP.
                    </h1>
                    <p className="text-lg text-subtle max-w-xl leading-relaxed">
                        Software developer working daily with Node, vanilla JS, and
                        CodeIgniter. Finishing a BCA degree and spending the off-hours
                        learning Rust — currently shipping a LAN file-transfer tool
                        built on raw sockets.
                    </p>
                    <div className="mt-8 flex gap-6 text-sm">
                        <a href={`mailto:${EMAIL}`} className="flex items-center gap-2"><Mail size={14} /> Email</a>
                        <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2"><GithubIcon /> GitHub</a>
                        <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2"><LinkedinIcon /> LinkedIn</a>
                    </div>
                </header>

                {/* EXPERIENCE / EDUCATION */}
                <Section id="journey" title="Journey">
                    {journey.map((j) => (
                        <div key={j.title} className="mb-8">
                            <div className="flex-between mb-2">
                                <h3 className="font-medium text-lg">{j.title}</h3>
                                <span className="text-subtle text-sm">{j.period}</span>
                            </div>
                            <p className="text-subtle text-sm max-w-lg">{j.body}</p>
                        </div>
                    ))}
                </Section>

                {/* PROJECTS */}
                <Section id="projects" title="Projects">
                    {projects.map((p) => (
                        <ProjectItem
                            key={p.title}
                            title={p.title}
                            description={p.description}
                            tech={p.tech}
                            link={p.link}
                            isPrivate={p.private}
                        />
                    ))}
                    <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="text-sm">
                        more small projects on github ↗
                    </a>
                </Section>

                {/* SKILLS */}
                <Section id="skills" title="Proficiency">
                    <div className="skill-list">
                        {skills.map((s) => <SkillBar key={s.name} {...s} />)}
                    </div>
                </Section>

                {/* STACK */}
                <Section id="stack" title="Also In The Toolbox">
                    <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm">
                        {stack.map((s) => (
                            <div key={s.label}>
                                <div className="text-subtle mb-1">{s.label}</div>
                                <div>{s.items}</div>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* CONTACT */}
                <footer id="contact" className="section-spacer mb-0 border-t pt-20">
                    <h2 className="text-2xl mb-8">Open to interesting problems.</h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
                        <div>
                            <div className="text-subtle mb-2">Social</div>
                            <div className="flex flex-col gap-2">
                                <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="w-fit">GitHub ↗</a>
                                <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="w-fit">LinkedIn ↗</a>
                            </div>
                        </div>
                        <div>
                            <div className="text-subtle mb-2">Contact</div>
                            <a href={`mailto:${EMAIL}`} className="w-fit">{EMAIL}</a>
                        </div>
                    </div>
                    <div className="mt-20 flex-between text-xs text-subtle">
                        <span>© {new Date().getFullYear()} Anuj Maharjan. Typeset in JetBrains Mono.</span>
                        <a href="#top">back to top ↑</a>
                    </div>
                </footer>

            </main>
        </div>
    );
}
