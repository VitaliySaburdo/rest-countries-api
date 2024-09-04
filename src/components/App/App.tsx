import { ThemeProvider } from '../../context/ThemeContext';
import { Container } from '../Container';
import { Header } from '../Header';
import { InputField } from '../InputField';
import { Section } from '../Section';
import './App.module.scss';

function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
        <main>
          <Section>
            <Container>
              <InputField />
            </Container>
          </Section>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
