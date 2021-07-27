import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -7rem;

  div {
    background: var(--shape);
    border-radius: 0.25rem;
    color: var(--text-title);
    padding: 1.5rem 2rem;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
      margin-top: 1rem;
    }

    &.highlight-background {
      background: var(--green);
      color: #fff;
    }

    &.negative {
      background: var(--red);
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-top: -9rem;

    div {
      padding: 1rem 1.5rem;

      strong {
        font-size: 1.5rem;
      }

      &.highlight-background {
        grid-column: span 2;
      }
    }
  }

  @media (max-width: 425px) {
    grid-template-columns: 1fr;

    div.highlight-background {
      grid-column: initial;
    }
  }
`;
