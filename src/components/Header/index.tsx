import { ReactNode } from 'react';

import { Container, Menu } from './styles';

interface HeaderProps {
  children: ReactNode;
}

function Header({ children }: HeaderProps) {
  return (
    <Container>
      <Menu>
        <a href="/">Home</a>
        <a href="/">Home</a>
        <a href="/">Home</a>
        <a href="/">Home</a>
      </Menu>


      {children}
    </Container>
  );
};

export default Header;
