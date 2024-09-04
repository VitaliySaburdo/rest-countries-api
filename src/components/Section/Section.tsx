interface SectionProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const Section: React.FC<SectionProps> = ({ children }) => {
  return <section>{children}</section>;
};
