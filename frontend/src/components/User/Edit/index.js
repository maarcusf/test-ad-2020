import React, { useEffect, useState } from "react";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";
import api from "../../../services/api";
import history from "../../../services/history";
import { Link } from "react-router-dom";

import { Button } from "react-bootstrap";

import { toast } from "react-toastify";
import adireto from "./../../../assets/logoadireto.png";

import { Container, Content, Logomarca } from "./styles";

const schema = Yup.object().shape({
    name: Yup.string().required("O nome é obrigatório"),
    email: Yup.string()
        .email("Insira um e-mail válido")
        .required("O e-mail é obrigatório"),
});

function Edit({ match }) {
    const [user, setUser] = useState([]);
    const { id } = match.params;

    useEffect(() => {
        async function loadUser() {
            try {
                const response = await api.get(`/users/${id}`);
                setUser(response.data);
            } catch (error) {
                toast.error("Erro ao buscar o usuário");
            }
        }

        loadUser();
    }, [id]);

    async function handleSubmit({ name, email }) {
        try {
            await api.put(`/users/${id}`, {
                name,
                email,
            });
            toast.success("Participante atualizado com sucesso");
            history.push("/");
        } catch (error) {
            toast.error("Erro ao atualizar o participante");
        }
    }
    return (
        <Container>
            <Content>
                <Logomarca src={adireto} />
                <h2>Editar Participante</h2>
                <Form
                    initialData={user}
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
                            Atualizar
                        </Button>
                    </div>
                </Form>
            </Content>
        </Container>
    );
}

export default Edit;
