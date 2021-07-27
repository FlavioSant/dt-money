import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  @media (max-width: 600px) {
    overflow-x: scroll;
  }

  table {
    border-spacing: 0 0.5rem;
    width: 100%;

    th {
      color: var(--text-body);
      font-weight: 400;
      line-height: 1.5rem;
      padding: 1rem 2rem;
      text-align: left;
    }

    td {
      background: var(--shape);
      border: 0;
      border-radius: 0.25rem;
      color: var(--text-body);
      padding: 1rem 2rem;

      &:first-child {
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`;

export const NotTransaction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 8rem;

  img {
    width: 8rem;
    height: 8rem;
  }

  p {
    color: var(--text-body);
    font-size: 1.5rem;
    margin-top: 1.5rem;
  }
`;
