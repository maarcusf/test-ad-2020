import React from "react";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";
import api from "../../../services/api";
import history from "../../../services/history";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";
import adireto from "./../../../assets/logoadireto.png";

import { Button } from "react-bootstrap";

import { Container, Content, Logomarca } from "./styles";

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

            toast.success("Participante Criado com Sucesso!!!");
            history.push("/");
        } catch (error) {
            toast.error("Houve um erro tentar criar um novo participante!");
        }
    }
    return (
        <Container>
            <Content>
                <Logomarca src={adireto} />
                <h2>Cadastrar Participante</h2>
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
