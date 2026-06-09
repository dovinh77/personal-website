import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  :root {
    --spacing: 1rem;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  & > section {
    flex: 1;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <main>
          <Hero />
          <Experience />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </AppContainer>
    </>
  );
}

export default App;
