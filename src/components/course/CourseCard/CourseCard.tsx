import { useNavigate } from 'react-router-dom';
import { Avatar } from '../../common/Avatar/Avatar';
import { Badge } from '../../common/Badge/Badge';
import type { Course } from '../../../types/course';
import styles from './CourseCard.module.css';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const navigate = useNavigate();

  return (
    <article
      className={styles.card}
      onClick={() => navigate(`/student/courses/${course.id}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && navigate(`/student/courses/${course.id}`)}
    >
      <div
        className={styles.thumbnail}
        style={{ backgroundImage: `url(${course.thumbnail})` }}
      >
        <div className={styles.thumbnailBadge}>
          <Badge label={course.category} />
        </div>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{course.title}</h3>
        <p className={styles.description}>{course.description}</p>
        <div className={styles.progressTrack}>
          <div
            className={styles.progressFill}
            style={{ width: `${course.progress}%` }}
            role="progressbar"
            aria-valuenow={course.progress}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      </div>

      <div className={styles.footer}>
        <Avatar src={course.instructor.avatar} alt={course.instructor.name} size="sm" />
        <div>
          <div className={styles.instructorName}>{course.instructor.name}</div>
          <div className={styles.instructorRole}>{course.instructor.role}</div>
        </div>
      </div>
    </article>
  );
}
