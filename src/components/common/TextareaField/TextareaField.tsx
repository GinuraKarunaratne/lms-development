import { type TextareaHTMLAttributes } from 'react';
import styles from './TextareaField.module.css';

interface TextareaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export function TextareaField({ label, id, ...props }: TextareaFieldProps) {
  const fieldId = id || label.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className={styles.wrapper}>
      <label htmlFor={fieldId} className={styles.label}>{label}</label>
      <textarea id={fieldId} className={styles.textarea} {...props} />
    </div>
  );
}
