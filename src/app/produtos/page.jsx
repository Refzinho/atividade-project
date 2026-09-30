
"use client";

import { useState, useEffect } from "react";
import "./produtos.css"
import CardProdutos from "@/components/CardProdutos";

export default function Produtos() {

    const [listarProdutos, setListarProdutos] = useState([]);
    const [msgErro, setMsgErro] = useState("");

    useEffect(() => {

        fetch("https://dummyjson.com/products")

            .then(res => res.json())

            .then((data) => {

                console.log(data);

                setListarProdutos(data.products);

                setMsgErro("");

            })

            .catch((erro) => {

                console.log(erro);

                setMsgErro("Erro ao carregar os produtos.");

            });

    }, []);

    return (
        <main>

            {msgErro && <p>{msgErro}</p>}

            {listarProdutos.length > 0 && (

                <div className="lista-produtos">

                    {listarProdutos.map((l) => {

                        return (
                            <CardProdutos
                                key={l.id}
                                produtos={l}
                            />
                        );

                    })}

                </div>

            )}

        </main>
    );
}

