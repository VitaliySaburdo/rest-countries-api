import './Section.module.scss';

interface SectionProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const Section: React.FC<SectionProps> = ({ children, style }) => {
  return <section style={style}>{children}</section>;
};
