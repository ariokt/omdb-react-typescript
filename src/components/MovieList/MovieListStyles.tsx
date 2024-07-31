import styled from 'styled-components';

export const MovieListGrid = styled.div`
  display: grid;
  gap: 2rem;
  margin-bottom: 40px;

  @media (min-width: 640px) { /* sm: */
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 768px) { /* md: */
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;