
import { useState } from "react"
function Index() {
    const [dados, setDados] = useState([])

    function buscar() {
        setDados([
                ...dados, 
                {   
                    nome: document.getElementById("1").value,
                    idade: document.getElementById("2").value
                }])

        return (
            dados
        )
    }
    return (
        <div>
            <input type="text" name="nome" id="1" />
            <input type="text" name="idade" id="2" />
            <button onClick={buscar}>Buscar</button>

            {dados.map((item, index) => (
                <div key={index}>
                    <p>Nome: {item.nome}</p>
                    <p>Idade: {item.idade}</p>
                </div>
            ))}
        </div>
  );
}

export default Index;