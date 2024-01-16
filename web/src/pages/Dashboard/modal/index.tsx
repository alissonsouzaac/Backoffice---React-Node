import { Box, Modal } from "@mui/material";
import Titulo from "../../../components/Titulo";
import styled from "styled-components";

const BoxCustomizado = styled(Box)`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30vw;
    max-height: 90vh;
    overflow-y: auto;
    background-color: white;
    border: none;
    border-radius: 16px;
    padding: 1em 5em;
`


export default function ModalCadastro({open, handleClose}: {open: boolean, handleClose: () => void }) {
    return (
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledy="Modal de cadastro do usuário"
        aria-describedby="Nesse Modal terá os dados de cadastro do especialista"
        >
            <BoxCustomizado>
                <Titulo>Cadastre o especialista inserindo os dados abaixo</Titulo>
            </BoxCustomizado>

        </Modal>
    )
}