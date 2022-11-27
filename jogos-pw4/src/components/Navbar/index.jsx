import { StyleNavbar } from './style.jsx';

export default function Navbar() {

    return (
        <StyleNavbar>
            <ul>
                <li><a href="/jogo">Pagina de jogos</a></li>
                <li><a href="/empresa">Pagina de empresas</a></li>
            </ul>
        </StyleNavbar>
    );
}