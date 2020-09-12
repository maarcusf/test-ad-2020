import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../../../services/api";
import { MdModeEdit, MdDelete, MdRemoveRedEye } from "react-icons/md";
import { toast } from "react-toastify";
import adireto from "./../../../assets/logoadireto.png";

import { Button, ListGroup, Modal, Spinner } from "react-bootstrap";

import {
    Logomarca,
    Container,
    Content,
    ListParticipants,
    UserActions,
    Loading,
} from "./styles";

function Users() {
    const [users, setUsers] = useState([]);
    const [secretFriend, setFriend] = useState("");
    const [smShow, setSmShow] = useState(false);
    const [loading, setLoading] = useState(false);

    //const usersController = new UsersController();

    async function loadUsers() {
        const response = await api.get("users");
        setUsers(response.data);
    }

    useEffect(() => {
        loadUsers();
    }, []);

    async function handleSorted() {
        setLoading(true);
        try {
            //chamar função do controller aqui
            await api.get("users/draw");
            toast.success("Emails enviados para os participantes sorteados");
            loadUsers();
        } catch (error) {
            toast.error(
                "Erro ao realizar o sorteio, tente novamente mais tarde"
            );
        }
        setLoading(false);
    }

    async function handleDelete(userId) {
        const confirm = window.confirm(
            "Tem certeza que deseja excluir este participante?"
        );
        if (confirm) {
            try {
                await api.delete(`/users/${userId}`);
                toast.success("Parcipante excluído com sucesso");
                loadUsers();
            } catch (error) {
                toast.error(
                    "Erro ao excluir o participante, tente novamente mais tarde"
                );
            }
        }
    }

    async function handleShowFriend(friend) {
        setFriend(friend);
        setSmShow(true);
    }
    return (
        <Container>
            <Content>
                <Logomarca src={adireto} />
                <h1>Amigo Secreto</h1>
                {users.length === 0 && <p>Nenhum participante cadastrado.</p>}
                <ListParticipants>
                    <ListGroup>
                        {users.map((user) => (
                            <ListGroup.Item variant="light" className="list">
                                <div>{user.name}</div>
                                <UserActions>
                                    <Link to={`/edit/${user._id}`}>
                                        <MdModeEdit
                                            className="icon-edit"
                                            title="Editar"
                                        />
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(user._id)}
                                    >
                                        <MdDelete
                                            className="icon-delete"
                                            title="Deletar"
                                        />
                                    </button>
                                    {user.secretFriend && (
                                        <button
                                            onClick={() =>
                                                handleShowFriend(
                                                    user.secretFriend
                                                )
                                            }
                                        >
                                            <MdRemoveRedEye title="Visualizar Amigo Secreto Sorteado" />
                                        </button>
                                    )}
                                </UserActions>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </ListParticipants>
                <div className="actions">
                    <Link to="/create">
                        <Button variant="primary">
                            Adicionar Participante
                        </Button>
                    </Link>
                    {users.length > 2 && (
                        <Button variant="success" onClick={handleSorted}>
                            Sortear Amigo Secreto
                        </Button>
                    )}
                </div>
            </Content>

            {loading && (
                <Loading>
                    <Spinner animation="border" variant="primary" />
                </Loading>
            )}

            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Amigo sorteado
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>{secretFriend}</Modal.Body>
            </Modal>
        </Container>
    );
}

export default Users;
