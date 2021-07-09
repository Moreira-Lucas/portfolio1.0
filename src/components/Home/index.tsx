import { ReactNode } from 'react';

import { Container } from './styles';

interface HomeProps {
  children: ReactNode;
}

function Home({ children }: HomeProps) {
  return (
    <Container>
     
      <div>
        <p>
        Hi.
        I'm Lucas Henrique.
        Welcome in my world.
        </p>
      </div>
      
      
      
      
      {children}
    </Container>
  );
};

export default Home;
