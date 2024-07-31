import styled from 'styled-components';

export const HomeHeader = styled.div`
  width: 100%;
  padding: 2rem;

  h1 {
    font-size: 2rem;
    width: fit-content;
    margin: 0 auto;
    margin-bottom: 2rem;
  }

  .load-more-button {
    padding: 4px;
    border-radius: 99%;
  }
`;

export const LoadMoreButton = styled.button`
  padding: 8px;
  border-radius: 50%;
  border: 1px solid #cccccc;
`