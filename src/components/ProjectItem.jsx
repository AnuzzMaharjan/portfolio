import { ExternalLink, Lock } from 'lucide-react';

export default function ProjectItem({ title, description, tech, link, isPrivate }) {
    const heading = (
        <h3 className="project-title font-medium text-lg flex items-center gap-2">
            {title}
            {isPrivate
                ? <span className="badge"><Lock size={11} /> private</span>
                : <ExternalLink size={14} />}
        </h3>
    );

    return (
        <div className="project mb-8">
            {link ? <a href={link} target="_blank" rel="noreferrer" className="block no-underline">{heading}</a> : heading}
            <p className="text-subtle text-sm mb-2 mt-2">{description}</p>
            <div className="text-xs text-subtle">
                {tech.map((t) => <span key={t} className="mr-3">[{t}]</span>)}
            </div>
        </div>
    );
}
