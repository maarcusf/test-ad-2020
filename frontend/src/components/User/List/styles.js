import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
`;

export const Content = styled.div`
    width: 500px;
    margin: 20px auto;
    h1 {
        text-align: center;
    }
    p {
        font-size: 14px;
        margin-top: 20px;
        color: red;
    }
    .actions {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
    }
`;

export const ListParticipants = styled.div`
    .list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
`;

export const UserActions = styled.div`
    button {
        cursor: pointer;
        border: 0;
        background: none;
        margin-left: 5px;
        outline: none;
        svg {
            font-size: 20px;
        }
        .icon-edit {
            color: #007bff;
        }
        .icon-delete {
            color: #ff0000;
        }
    }
`;

export const FormContent = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    input {
        height: 30px;
        border: 1px solid #007bff;
        padding: 5px;
        margin-bottom: 10px;
    }
`;

export const FormActions = styled.div`
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
`;

export const Loading = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
`;
