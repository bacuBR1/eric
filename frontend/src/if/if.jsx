import { useState } from 'react';

function Mostrar1() {
    const [pagina, setPagina] = useState("home");

    function renderizarPagina() {
        switch (pagina) {
            case "home":
                return <h1>Home</h1>;

            case "perfil":
                return <h1>Perfil</h1>;

            case "config":
                return <h1>Configurações</h1>;

            default:
                return <h1>Página não encontrada</h1>;
        }
    }

    return (
        <div>
            <button onClick={() => setPagina("home")}>
                Home
            </button>

            <button onClick={() => setPagina("perfil")}>
                Perfil
            </button>

            <button onClick={() => setPagina("config")}>
                Config
            </button>

            {renderizarPagina()}
        </div>
    );
}

export default Mostrar1;