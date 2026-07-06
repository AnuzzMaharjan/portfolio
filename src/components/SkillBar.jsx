export default function SkillBar({ name, detail }) {
    return (
        <div className="skill-row">
            <span>{name}</span>
            <div className="text-subtle text-xs mt-1">{detail}</div>
        </div>
    );
}
