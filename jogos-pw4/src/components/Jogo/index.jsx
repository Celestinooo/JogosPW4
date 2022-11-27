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
    const [edit, setEdit] = useState(-1)
    const [enviado, setEnviado] = useState(false)

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
        setEnviado(true)
    };

    useEffect(() => {
        if(enviado){
            setTimeout(() => {
                setNome('')
                setDescricao('')
                setAvaliacao('')
                setAno('')
                setEmpresaId('')
                document.getElementById('name').value=''
                document.getElementById('description').value=''
                document.getElementById('aval').value=''
                document.getElementById('date').value=''
                document.getElementById('empresa').value=''
                setEnviado(false)
            }, 5000);
        }
    });

    const handleSubmitEdit = (event) => {
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                nome: nome,
                descricao: descricao,
                avaliacao: avaliacao,
                anoLancamento: ano,
                id: edit+1,
            })
        };
        fetch("http://localhost:8888/jogo/atualizar", requestOptions)
        .then(response => response.json())
        setEdit(-1)
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
                    Criar Jogo
                </button>

                <button
                    onClick={() => {
                        buscaJogo()
                        setOption(2)
                        } 
                    }
                >
                    Editar Jogo
                </button>

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
                    <label htmlFor="name">Nome do jogo</label>
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
                    <label htmlFor="description">Descriçao do jogo</label>
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
                    <label htmlFor="aval">Avaliação</label>
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
                    <label htmlFor="date">Data de lançamento</label>
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
                    <label htmlFor="empresa">Empresa responsavel</label>
                    <input
                        type="text"
                        name="empresa"
                        id="empresa"
                        list="empresas"
                        onChange={(e) => {
                            setEmpresaId(e.target.value);
                        }}
                    />
                    <datalist id="empresas">
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

            <table className={option == 2 ? 'lista_todos visible' : 'lista_todos invisible'}>
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
                            <td>
                                <button
                                className='edit'
                                onClick={() => 
                                    setEdit(index)
                                }
                                >
                                    Editar
                                </button>
                            </td>
                        </tr>
                    )
                    :
                    ''
                }
            </table>

            {edit !== -1 ?
                <form onSubmit={handleSubmitEdit} className={edit !== -1 ? 'visible' : 'invisible'}>
                    <div className='input'>
                        <label htmlFor="nameE">Nome do jogo</label>
                        <input
                            type="text"
                            name="name"
                            id="nameE"
                            placeholder={busca[edit].nome}
                            onChange={(e) => {
                                setNome(e.target.value);
                            }}
                        />
                    </div>
                    
                    <div className='input'>
                        <label htmlFor="descriptionE">Descrição do jogo</label>
                        <input
                            type="text"
                            name="description"
                            id="descriptionE"
                            onChange={(e) => {
                                setDescricao(e.target.value);
                            }}
                            placeholder={busca[edit].descricao}
                        />
                    </div>
                    
                    <div className='input'>
                        <label htmlFor="avalE">Avaliação</label>
                        <input
                            type="text"
                            name="aval"
                            id="avalE"
                            onChange={(e) => {
                                setAvaliacao(e.target.value);
                            }}
                            placeholder={busca[edit].avaliacao}
                        />
                    </div>
                    
                    <div className='input'>
                        <label htmlFor="dateE">Data de lançamento</label>
                        <input
                            type="date"
                            name="date"
                            id="dateE"
                            onChange={(e) => {
                                setAno(e.target.value);
                            }}
                            placeholder={busca[edit].anoLancamento}
                        />
                    </div>
                    
                    <button type="submit">Enviar</button>
                </form>
            : ''}
            
            
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