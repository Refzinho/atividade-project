"use client";

import { useState, useEffect } from "react";
import dados from "@/produtos.json"
import CardProdutos from "@/components/CardProdutos";

export default function Produtos(){

const [listarProdutos, setListarProdutos] = useState([]);
const [msgErro, setMsgErro] = useState("");

useEffect( () => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data => {
        console.log(dados);
        setListarProdutos(data.products);
        setMsgErro("");
    }))
    
}, []);   

    return(
        <main>
            {listarProdutos.length > 0 &&

            <div className="lista-produtos">
                {listarProdutos.map( l => {
                    return <CardProdutos key={l.id} produtos={l}/>
                })}
                
            </div>
            }
        </main>
        
    );
}