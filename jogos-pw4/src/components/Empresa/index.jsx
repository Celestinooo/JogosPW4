import { StyleEmpresa } from './style.jsx';
import {useState, useEffect} from 'react';

export default function Empresa() {
    const retornoUseState =  useState([]);
    const state = retornoUseState[0];
    const setState = retornoUseState[1];
    const [nome, setNome] = useState('')
    const [cnpj, setCnpj] = useState('')

    const [erro, setErro] = useState({
        hasErro: false,
        mensagemErro: ""
    })

    async function buscaEmpresa() {
        const res = await fetch('http://localhost:8888/empresa/buscar').catch((erro) =>{
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
                cnpj: cnpj
            })
        };
        fetch("http://localhost:8888/empresa/criar", requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ postId: data.id }));
    };

    return (
        <StyleEmpresa>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={(e) => {
                        setNome(e.target.value);
                    }}
                />

                <label htmlFor="cnpj">cnpj</label>
                <input
                    type="text"
                    name="cnpj"
                    id="cnpj"
                    onChange={(e) => {
                        setCnpj(e.target.value);
                    }}
                />


                <button type="submit">Enviar</button>
            </form>
        </StyleEmpresa>
    );
}