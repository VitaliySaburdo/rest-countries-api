import { Container } from '../Container';
import { Header } from '../Header';
import { InputField } from '../InputField';
import { Section } from '../Section';
import { useTheme } from '../../context/useTheme';
import style from './App.module.scss';

function App() {
  const { theme } = useTheme();
  return (
    <>
      <Header />
      <main className={(theme === 'dark' && style.dark) || undefined}>
        <Section>
          <Container>
            <InputField />
          </Container>
        </Section>
      </main>
    </>
  );
}

export default App;
