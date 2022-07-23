import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h3`
  display: flex;
  justify-content: flex-start;
margin-bottom:15px;
`;
export const Li = styled.li`
margin-right:10px;
width: 270px;
cursor: pointer;
 background:${({ isRed }) => (isRed ? "rgba(182, 233, 122, 0.5)" : "white")
    };

 &:hover ${Title}{
    color: blue
 }

`;


