import styled from 'styled-components';

export const StyleJogo = styled.div`
    padding: 50px 0;
    text-align: center;

    .invisible {
        display: none;
    }

    visible {
        display: block;
    }

    .options {
        display: flex;
        justify-content: space-between;
        margin: 30px 0;
        button {
            border-radius: 20px;
            width: 30%;
            margin: 30px 0;
            padding: 10px 0;
            cursor: pointer;
            &:hover {
                background-color: var(--greyinputborder);
            }
        }
    }
    form {
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 50%;
        margin: 0 auto;

        .input {
            display: flex;
            flex-direction: column;
            margin-bottom: 50px;

            input {
                margin-top: 20px;
                border: 1px solid black;
                border-radius: 10px;
                padding: 10px;
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

    .lista_todos {
        width: 100%;
        border-collapse: collapse;
        border: 1px solid black;

        th, td {
            border: 1px solid black;
            padding: 15px;
        }
    }
`;