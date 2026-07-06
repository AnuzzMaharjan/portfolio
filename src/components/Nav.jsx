import { Mail } from 'lucide-react';
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from '../data.js';
import { GithubIcon, LinkedinIcon } from './Icons.jsx';

export default function Nav() {
    return (
        <nav className="nav">
            <div className="container nav-inner">
                <a href="#top" className="nav-brand text-sm">anuj@web:~$</a>
                <div className="flex items-center gap-5 text-xs">
                    <a href="#experience">experience</a>
                    <a href="#projects">projects</a>
                    <a href="#skills">skills</a>
                    <a href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub" className="flex items-center"><GithubIcon size={15} /></a>
                    <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex items-center"><LinkedinIcon size={15} /></a>
                    <a href={`mailto:${EMAIL}`} aria-label="Email" className="flex items-center"><Mail size={15} /></a>
                </div>
            </div>
        </nav>
    );
}
