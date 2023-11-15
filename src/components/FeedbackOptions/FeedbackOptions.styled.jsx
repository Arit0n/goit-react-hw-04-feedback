import styled from 'styled-components';

export const Button = styled.button`
  text-transform: capitalize;
  cursor: pointer;
  font-weight: 700;
  padding: 2px 10px;
  border-radius: 4px;
  border-width: 1px;
  &:hover {
    background-color: rgb(0, 157, 196);
    box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
  }
`;

export const WrapBox = styled.div`
  display: flex;
  gap: 16px;
  padding-left: 16px;
`;
