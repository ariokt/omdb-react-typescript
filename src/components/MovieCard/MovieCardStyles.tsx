import styled from "styled-components";

export const MovieCardContainer = styled.div`
  width: 100%;
  height: 280px;
  border-radius: 10px;
  background-color: rgb(24, 24, 24);
  overflow: hidden;
  border: 1px solid #cccccc;
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    margin-bottom: 0.25rem;
  }

  div {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    height: 20%;
    background-color: rgba(255,255,255,0.9);
    padding: 0.5rem;
  }

  h2 {
    font-size: 1rem;
    color: #141414;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    height: 340px;
  }
`;