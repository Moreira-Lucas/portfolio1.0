import { ReactNode } from 'react';

import { Container, Menu } from './styles';

interface HeaderProps {
  children: ReactNode;
}

function Header({ children }: HeaderProps) {
  return (
    <Container>
      
      <Menu>
       
      </Menu>
      <div>
        
      </div>

      {children}
    </Container>
  );
};

export default Header;
