import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    div#leftCol {
        max-width: 300px;
        width: 100%;
    }
    div#feed {
        max-width: 800px;
        width: 100%;
    }
`;

export const User = styled.div`
    display: flex;
    margin: 5px;
    border-bottom: 1px solid #eee;
    padding: 5px;
    align-items: center;
    justify-content: center;
    img {
        height: 60px;
        width: 60px;
        border-radius: 50%;
        border: 3px solid #fff;
    }
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 5px;

        h2 {
            color: #fff;
        }
        p {
            color: #999;
        }
    }
`;

export const LeftColOptions = styled.div`
    width: 95%;
    margin: 5px;
    p {
        color: #fff;
        margin-top: 10px;
        padding: 5px;
        &:hover {
            background-color: #222;
            border-radius: 2px;
            cursor: pointer;
        }
    }
    div {
        display: flex;
        justify-content: space-between;

        border: 1px solid #999;
        padding: 3px;
        border-radius: 5px;
        margin: 10px 30px;

        h1 {
            padding: 3px;
            color: #fff;
            font-size: 18px;
        }
        &:hover {
            background-color: #222;
            border-radius: 2px;
            cursor: pointer;
        }
    }
`;

export const Post = styled.div`
    background-color: #222;
    border-radius: 10px;
    img {
        width: 100%;
    }
`;

export const PostHeader = styled.div`
    margin-top: 15px;
    display: flex;
    align-items: center;
    color: #fff;
    padding: 5px;
    margin-left: 15px;
    img {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        border: 2px solid #fff;
    }
    p {
        font-size: 14px;
        margin-left: 15px;
        font-weight: bold;
    }
    h5 {
        font-size: 12px;
        margin-left: 15px;
        color: #999;
    }
`;

export const PostFooter = styled.div`
    div {
        padding: 5px;
        svg {
            margin-left: 17px;
            color: #fff;

            &:hover {
                cursor: pointer;
                color: #999;
            }
        }
    }

    p {
        color: #fff;
        margin-left: 15px;
        padding: 5px;
    }
`;

export const Trends = styled.div`
    max-width: 250px;
    width: 100%;
    margin: 10px;
    h1 {
        color: #fff;
        font-size: 20px;
        padding: 5px;
    }
`;
export const Today = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    list-style: none;
    img {
        max-height: 70px;
        max-width: 70px;
    }
`;
