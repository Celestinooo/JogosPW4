import { StyleJogo } from './style.jsx';
import {useState, useEffect} from 'react';

export default function Jogo() {
    const retornoUseState =  useState([]);
    const state = retornoUseState[0];
    const setState = retornoUseState[1];

    const [erro, setErro] = useState({
        hasErro: false,
        mensagemErro: ""
    })
    useEffect(() => {
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
        
        buscaJogo();
    }, []);

    return (
        <StyleJogo>
            <h1>TESTE DO JOGO</h1>
        </StyleJogo>
    );
}