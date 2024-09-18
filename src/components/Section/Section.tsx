import style from './Section.module.scss';

interface SectionProps {
  children: React.ReactNode;
  styles?: React.CSSProperties;
  variant?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  styles,
  variant,
}) => {
  const variantClass = variant ? style[variant] : '';
  return (
    <section className={variantClass} style={styles}>
      {children}
    </section>
  );
};
