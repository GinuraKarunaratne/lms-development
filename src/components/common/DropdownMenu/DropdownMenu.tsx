import { useRef, useEffect, type ReactNode } from 'react';
import styles from './DropdownMenu.module.css';

export interface DropdownItem {
  id: string;
  label: ReactNode;
  onClick: () => void;
  danger?: boolean;
}

interface DropdownMenuProps {
  trigger: ReactNode;
  items: DropdownItem[];
  isOpen: boolean;
  onClose: () => void;
  onToggle: () => void;
}

export function DropdownMenu({ trigger, items, isOpen, onClose, onToggle }: DropdownMenuProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        onClose();
      }
    }
    
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.trigger} onClick={onToggle} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter') onToggle(); }}>
        {trigger}
      </div>
      
      {isOpen && (
        <div className={styles.menu} role="menu">
          {items.map((item) => (
            <button
              key={item.id}
              className={`${styles.item} ${item.danger ? styles.danger : ''}`}
              role="menuitem"
              onClick={() => {
                item.onClick();
                onClose();
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
