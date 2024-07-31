import styled from 'styled-components';

export const StyledHome = styled.div`
  min-height: 100vh;
  padding-bottom: 2rem;
`;

export const HomeHeader = styled.header`
  width: 100%;
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 99;
  background-color: #141414;

  h1 {
    font-size: 2rem;
    width: fit-content;
    margin: 0 auto;
    padding: 1rem 0;
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
  cursor: pointer;
`