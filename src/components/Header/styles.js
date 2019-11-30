import styled from 'styled-components';

export const Container = styled.div`
    background-color: #222;
    color: #fff;
    height: 55px;
    width: 100%;
    display: flex;
    align-content: center;
    justify-content: space-between;
    padding: 5px;
    border-radius: 10px;

    > img {
        height: 40px;
        margin-left: 15px;
        &:hover {
            cursor: pointer;
        }
    }

    div {
        display: flex;
        align-items: center;
        margin-left: 5px;

        svg {
            color: #fff;

            &:hover {
                cursor: pointer;
                color: #e3e3e3;
            }
        }

        img {
            height: 40px;
            border-radius: 50%;
            border: 2px solid #fff;
            margin-left: 15px;
        }
    }
`;

export const Search = styled.input`
    height: 43px;
    margin-left: 20px;
    max-width: 400px;
    width: 100%;
    border-radius: 10px;

    color: #fff;
    padding: 5px;
    border-color: #555;

    ::placeholder {
        color: #fefefe;
    }
`;
