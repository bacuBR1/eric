import api from '../api/api.js';
import { useState } from 'react';

function Filmes() {
    const [filmes, setFilmes] = useState([]);
    const [mostrarFilmes, setMostrarFilmes] = useState(false);

    function fetchFilmes() {
        api.get('/filmes')
            .then(response => {
                console.log(response.data);
                setFilmes([response.data]);
                setMostrarFilmes(true);
            }).catch(error => {
                console.error('Erro ao buscar filmes:', error);
            });
    }

    return (
        <div>
                        <button onClick={fetchFilmes}>
                Buscar Filmes
            </button>

            {mostrarFilmes && (
                <ul>
                    {filmes.map((filme) => (
                        <li key={filme.id}>
                            <h2>{filme.nome}</h2>
                            <p>Ano: {filme.ano}</p>
                            <p>Diretor: {filme.diretor}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Filmes;