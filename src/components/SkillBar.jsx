export default function SkillBar({ name, detail, level }) {
    return (
        <div className="skill-row">
            <div className="flex-between mb-1">
                <span>{name}</span>
                <span className="text-subtle text-xs">{level}/10</span>
            </div>
            <div className="skill-bar" role="meter" aria-valuenow={level} aria-valuemin={0} aria-valuemax={10} aria-label={`${name} proficiency`}>
                <span className="skill-bar-fill">{'█'.repeat(level)}</span>
                <span className="skill-bar-rest">{'░'.repeat(10 - level)}</span>
            </div>
            <div className="text-subtle text-xs mt-1">{detail}</div>
        </div>
    );
}
