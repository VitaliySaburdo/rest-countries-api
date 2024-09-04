import { Container } from './Container';
import { Header } from './Header';
import { InputField } from './InputField';
import { Section } from './Section';

function App() {
  return (
    <>
      <Header />
      <main>
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
