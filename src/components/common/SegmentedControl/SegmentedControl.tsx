import styles from './SegmentedControl.module.css';

interface Segment {
  label: string;
  value: string;
  disabled?: boolean;
}

interface SegmentedControlProps {
  segments: Segment[];
  value: string;
  onChange: (value: string) => void;
}

export function SegmentedControl({ segments, value, onChange }: SegmentedControlProps) {
  return (
    <div className={styles.control} role="tablist">
      {segments.map((segment) => (
        <button
          key={segment.value}
          type="button"
          role="tab"
          aria-selected={value === segment.value}
          disabled={segment.disabled}
          className={`${styles.segment} ${value === segment.value ? styles.active : ''}`}
          onClick={() => onChange(segment.value)}
        >
          {segment.label}
        </button>
      ))}
    </div>
  );
}
