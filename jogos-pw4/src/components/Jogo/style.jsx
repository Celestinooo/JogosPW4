import styled from 'styled-components';

export const StyleJogo = styled.div`
    padding: 50px 0;
    display: flex;
    justify-content: center;
    form {
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 50%;

        .input {
            display: flex;
            flex-direction: column;
            margin-bottom: 50px;

            input {
                margin-top: 20px;
                border: 1px solid black;
                border-radius: 10px;
            }
        }

        button {
            border-radius: 20px;
            width: 33%;
            margin: 0 auto;
            padding: 10px 0;
            cursor: pointer;
            &:hover {
                background-color: var(--greyinputborder);
            }
        }
    }
`;