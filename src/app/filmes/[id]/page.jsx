"use client";

import "@/components/descritivo.css"
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import dados from "@/filmes.json";

export default function Filme(){
    const [filme, setFilme] = useState(null);
    const params = useParams();

    useEffect( () => {
        const filmEncontrado = dados.find(f => f.id == params.id);
        setFilme(filmEncontrado);
    }, []);

    return(
        <main>
            {filme != null && <>

            <div className="img-descritivo">
                <img src={filme.imagem} alt="" />
            </div>

            

            <h1>Descrição do filme</h1>
            <p>Nome: {filme.nome}</p>
            <p>Gênero: {filme.genero}</p>
            <p>Ano de lançamento: {filme.ano}</p>
            <p>Sinopse: {filme.sinopse}</p>

            </>}
        </main>
    )

}