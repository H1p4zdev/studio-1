
interface SkillBadgeProps {
  skill: string;
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <div className="neo-badge">
      {skill}
    </div>
  );
}

    