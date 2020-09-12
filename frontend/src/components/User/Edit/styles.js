import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
`;

export const Content = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    h2 {
        margin-top: 40px;
    }
    .form-register {
        width: 400px;
        height: 200px;
        div,
        input {
            width: 100%;
            margin-top: 5px;
        }
        span {
            color: red;
        }
        button {
            margin-top: 10px;
        }
        .actions {
            display: flex;
            justify-content: space-between;
        }
    }
`;
