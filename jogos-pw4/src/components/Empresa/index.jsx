import { StyleEmpresa } from './style.jsx';
import {useState, useEffect} from 'react';

export default function Empresa() {
    const [busca, setBusca] = useState([])
    const [nome, setNome] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [option, setOption] = useState(0)

    const [erro, setErro] = useState({
        hasErro: false,
        mensagemErro: ""
    })

    async function buscaEmpresa() {
        const res = await fetch('http://localhost:8888/empresa/buscar').catch((erro) =>{
            console.log("Erro ao realizar o fetch");
            setErro({
                hasErro: true,
                mensagemErro: "Erro ao realizar a busca. Verifique o servidor"
            })
        })

        if(res.status >= 200 && res.status <= 299){
            const resJson = await res.json();
            setBusca(resJson);
            
        }else{
            console.log(`Erro! Requisição com código ${res.status}`)
        }
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                nome: nome,
                cnpj: cnpj
            })
        };
        fetch("http://localhost:8888/empresa/criar", requestOptions)
        .then(response => response.json())
    };

    return (
        <StyleEmpresa className='container'>
            <div className='options'>
                <button
                onClick={() => 
                    setOption(1)
                }
                >
                    Criar
                </button>

                <button>Editar</button>

                <button
                    className='busca_todos'
                    onClick={() => {
                        buscaEmpresa()
                        setOption(3)
                        } 
                    }
                >
                    Buscar todos os jogos
                </button>
            </div>

            <form onSubmit={handleSubmit} className={option == 1 ? 'visible' : 'invisible'}>
                <div className='input'>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        onChange={(e) => {
                            setNome(e.target.value);
                        }}
                    />
                </div>

                <div className='input'>
                    <label htmlFor="cnpj">cnpj</label>
                    <input
                        type="text"
                        name="cnpj"
                        id="cnpj"
                        onChange={(e) => {
                            setCnpj(e.target.value);
                        }}
                    />
                </div>

                <button type="submit">Enviar</button>
            </form>

            <table className={option == 3 ? 'lista_todos visible' : 'lista_todos invisible'}>
                <tr>
                    <th>Nome</th>
                    <th>CNPJ</th>
                </tr>
                {busca ?
                    busca.map( (busca, index) => 
                        <tr key={index}>
                            <td>{busca.nome}</td>
                            <td>{busca.cnpj}</td>
                        </tr>
                    )
                    :
                    ''
                }
            </table>
        </StyleEmpresa>
    );
}