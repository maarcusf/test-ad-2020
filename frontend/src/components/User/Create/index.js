import React from "react";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";
import api from "../../../services/api";
import history from "../../../services/history";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";

import { Button, ListGroup } from "react-bootstrap";

import { Container, Content } from "./styles";
import Axios from "axios";

const schema = Yup.object().shape({
    name: Yup.string().required("O nome é obrigatório"),
    email: Yup.string()
        .email("Insira um e-mail válido")
        .required("O e-mail é obrigatório"),
});

function Create() {
    async function handleSubmit({ name, email }) {
        try {
            await api.post("/users", {
                name,
                email,
            });

            toast.success("Participante criado com sucesso");
            history.push("/");
        } catch (error) {
            toast.error(
                "Erro ao criar o participante, tente novamente mais tarde"
            );
        }
    }
    return (
        <Container>
            <Content>
                <h2>Cadastrar novo participante</h2>
                <Form
                    schema={schema}
                    onSubmit={handleSubmit}
                    className="form-register"
                >
                    <div>
                        <Input type="text" name="name" placeholder="Nome" />
                    </div>
                    <div>
                        <Input type="email" name="email" placeholder="E-mail" />
                    </div>
                    <div className="actions">
                        <Link to="/">
                            <Button variant="secondary">Cancelar</Button>
                        </Link>
                        <Button variant="primary" type="submit">
                            Cadastrar
                        </Button>
                    </div>
                </Form>
            </Content>
        </Container>
    );
}

export default Create;
