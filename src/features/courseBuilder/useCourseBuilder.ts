import { useState, useCallback } from 'react';
import type { CourseSection, CourseContentItem, ContentType } from './courseBuilder.types';

export function useCourseBuilder() {
  const [sections, setSections] = useState<CourseSection[]>([]);

  const addSection = useCallback((title: string, description?: string) => {
    const newSection: CourseSection = {
      id: `section-${Date.now()}`,
      title,
      description,
      items: [],
    };
    setSections((prev) => [...prev, newSection]);
  }, []);

  const addContentItem = useCallback(
    (sectionId: string, type: ContentType, title: string) => {
      const newItem: CourseContentItem = {
        id: `item-${Date.now()}`,
        type,
        title,
      };
      setSections((prev) =>
        prev.map((section) =>
          section.id === sectionId
            ? { ...section, items: [...section.items, newItem] }
            : section
        )
      );
    },
    []
  );

  const removeSection = useCallback((sectionId: string) => {
    setSections((prev) => prev.filter((s) => s.id !== sectionId));
  }, []);

  return { sections, addSection, addContentItem, removeSection };
}
