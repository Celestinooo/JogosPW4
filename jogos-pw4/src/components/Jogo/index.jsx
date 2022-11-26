import { StyleJogo } from './style.jsx';
import {useState, useEffect} from 'react';

export default function Jogo() {
    const retornoUseState =  useState([]);
    const state = retornoUseState[0];
    const setState = retornoUseState[1];
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [avaliacao, setAvaliacao] = useState('')
    const [ano, setAno] = useState('')
    const [empresaId, setEmpresaId] = useState('')

    const [erro, setErro] = useState({
        hasErro: false,
        mensagemErro: ""
    })

    async function buscaJogo() {
        const res = await fetch('http://localhost:8888/jogo/buscar').catch((erro) =>{
            //tratamento de erro
            console.log("Erro ao realizar o fetch");
            setErro({
                hasErro: true,
                mensagemErro: "Erro ao realizar a busca. Verifique o servidor"
            })
        })

        if(res.status >= 200 && res.status <= 299){
            const resJson = await res.json();
            setState(resJson);
            
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
        .then(data => this.setState({ postId: data.id }));
    };

    return (
        <StyleJogo className='container'>
            <form onSubmit={handleSubmit}>
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
                        onChange={(e) => {
                            setEmpresaId(e.target.value);
                        }}
                    />
                </div>
                
                <button type="submit">Enviar</button>
            </form>
        </StyleJogo>
    );
}