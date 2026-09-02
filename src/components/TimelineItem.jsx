import { Fragment } from 'react';

export default function TimelineItem({ title, company, period, body, specs }) {
    return (
        <div className="mb-8">
            <div className="flex-between mb-2">
                <h3 className="font-medium text-lg">{title}</h3>
                {period && <span className="text-subtle text-sm">{period}</span>}
            </div>
            {company && <div className="text-sm mb-2">{company}</div>}
            {body && <p className="text-subtle text-sm max-w-lg">{body}</p>}
            {specs && (
                <dl className="timeline-specs text-subtle text-sm max-w-lg">
                    {specs.map((s) => (
                        <Fragment key={s.label}>
                            <dt>{s.label}</dt>
                            <dd>{s.value}</dd>
                        </Fragment>
                    ))}
                </dl>
            )}
        </div>
    );
}
