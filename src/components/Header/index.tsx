import { ReactNode } from 'react';
import { Link, BrowserRouter as Router }  from 'react-router-dom';

import { Container} from './styles';

interface HeaderProps {
  children: ReactNode;
}

function Header({ children }: HeaderProps) {
  return (
    <Container>
      <nav>
          <ul>
      
            
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
            

            
           
            
          </ul>
      </nav>
      {children}
    </Container>
  );
};

export default Header;
