import { useState, type FormEvent } from 'react';
import { Modal } from '../../common/Modal/Modal';
import { InputField } from '../../common/InputField/InputField';
import { TextareaField } from '../../common/TextareaField/TextareaField';
import styles from './AddSectionModal.module.css';

interface AddSectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (title: string, description: string) => void;
}

export function AddSectionModal({ isOpen, onClose, onSave }: AddSectionModalProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!title.trim()) {
      setError('Section title is required');
      return;
    }
    onSave(title, description);
    setTitle('');
    setDescription('');
    setError('');
    onClose();
  }

  function handleClose() {
    setTitle('');
    setDescription('');
    setError('');
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Add new section" subtitle="Create a new section to organize your course content">
      <form className={styles.form} onSubmit={handleSubmit}>
        <InputField
          label="Section Title"
          placeholder="Enter your title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            if (error) setError('');
          }}
          error={error}
          required
        />

        <TextareaField
          label="Description (optional)"
          placeholder="Enter your title"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className={styles.footer}>
          <button type="button" className={styles.cancelBtn} onClick={handleClose}>
            Cancel
          </button>
          <button type="submit" className={styles.submitBtn}>
            Add section
          </button>
        </div>
      </form>
    </Modal>
  );
}
