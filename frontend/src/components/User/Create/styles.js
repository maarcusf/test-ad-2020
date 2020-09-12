import styled from "styled-components";
import background from "./../../../assets/imagemfundo.jpg";
import adireto from "./../../../assets/logoadireto.png";

export const Logomarca = styled.img`
    width: 142;
    height: 38px;
    margin: 0px;
    display: table;
    margin-left: auto;
    margin-right: auto;
`;
export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${background});
`;

export const Content = styled.div`
    background: rgba(123, 123, 123, 0.5);
    width: 50%;
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
