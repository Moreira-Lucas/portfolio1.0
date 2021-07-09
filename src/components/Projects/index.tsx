import { ReactNode } from 'react';

import { Container } from './styles';

interface ProjectsProps {
  children: ReactNode;
}

function Projects({ children }: ProjectsProps) {
  return (
    <Container>
      <h1>Projects</h1>
      {children}
    </Container>
  );
};

export default Projects;
