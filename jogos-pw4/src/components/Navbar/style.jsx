import styled from 'styled-components';

export const StyleNavbar = styled.header`
    background-color: #3245D6;
    padding: 40px 0;
    ul {
        display: flex;
        justify-content: space-around;

        li {
            border: 1px solid #FAFAFA;
            border-radius: 15px;
            padding: 15px;
            a {
                color: white;
                text-decoration: none;
            }
        }
    }
`;