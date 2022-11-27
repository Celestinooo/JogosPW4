import { StyleJogo } from './style.jsx';
import {useState, useEffect} from 'react';

export default function Jogo() {
    const [busca, setBusca] = useState([])
    const [empresas, setEmpresas] = useState([])
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [avaliacao, setAvaliacao] = useState('')
    const [ano, setAno] = useState('')
    const [empresaId, setEmpresaId] = useState('')
    const [option, setOption] = useState(0)

    const [erro, setErro] = useState({
        hasErro: false,
        mensagemErro: ""
    })

    async function buscaJogo() {
        const res = await fetch('http://localhost:8888/jogo/buscar').catch((erro) =>{
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

    async function buscaEmpresas() {
        const res = await fetch('http://localhost:8888/empresa/buscar').catch((erro) =>{
            console.log("Erro ao realizar o fetch");
            setErro({
                hasErro: true,
                mensagemErro: "Erro ao realizar a busca. Verifique o servidor"
            })
        })

        if(res.status >= 200 && res.status <= 299){
            const resJson = await res.json();
            setEmpresas(resJson);
            
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
                descricao: descricao,
                avaliacao: avaliacao,
                anoLancamento: ano,
                empresaId: empresaId,
            })
        };
        fetch("http://localhost:8888/jogo/criar", requestOptions)
        .then(response => response.json())
    };

    return (
        <StyleJogo className='container'>
            <div className='options'>
                <button
                onClick={() => {
                    setOption(1)
                    buscaEmpresas()
                    }
                }
                >
                    Criar
                </button>

                <button>Editar</button>

                <button
                    className='busca_todos'
                    onClick={() => {
                        buscaJogo()
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
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        name="description"
                        id="description"
                        onChange={(e) => {
                            setDescricao(e.target.value);
                        }}
                    />
                </div>
                
                <div className='input'>
                    <label htmlFor="aval">Avaliacao</label>
                    <input
                        type="text"
                        name="aval"
                        id="aval"
                        onChange={(e) => {
                            setAvaliacao(e.target.value);
                        }}
                    />
                </div>
                
                <div className='input'>
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        name="date"
                        id="date"
                        onChange={(e) => {
                            setAno(e.target.value);
                        }}
                    />
                </div>
                
                <div className='input'>
                    <label htmlFor="empresa">Empresa</label>
                    <input
                        type="text"
                        name="empresa"
                        id="empresa"
                        list="cidades"
                        onChange={(e) => {
                            setEmpresaId(e.target.value);
                        }}
                    />
                    <datalist id="cidades">
                    {empresas.map((opcao, index) => {
                        return (
                        <option key={index} value={opcao.id}>
                            {opcao.nome}
                        </option>
                        );
                    })}
                    </datalist>
                </div>
                
                <button type="submit">Enviar</button>
            </form>
            
            <table className={option == 3 ? 'lista_todos visible' : 'lista_todos invisible'}>
                <tr>
                    <th>Nome</th>
                    <th>Descricao</th>
                    <th>Avaliacao</th>
                    <th>Data</th>
                    <th>Empresa</th>
                </tr>
                {busca ?
                    busca.map( (busca, index) => 
                        <tr key={index}>
                            <td>{busca.nome}</td>
                            <td>{busca.descricao}</td>
                            <td>{busca.avaliacao}</td>
                            <td>{busca.anoLancamento}</td>
                            <td>{busca.empresaId}</td>
                        </tr>
                    )
                    :
                    ''
                }
            </table>
        </StyleJogo>
    );
}