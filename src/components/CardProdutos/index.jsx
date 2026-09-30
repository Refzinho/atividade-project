import Produtos from "@/app/produtos/page";
import "@/components/CardProdutos/cardProdutos.css";


export default function CardProdutos( {produtos} ){
    return (
        <main>
        <div className="cleitin-produtos">

            <div className="cleitin-imagem">
            <img src={produtos.thumbnail} alt="" />
            </div>

            <div className="cleitin-informacoes">
                    <h2>{produtos.title}</h2>
                    <p className="tamanho">{produtos.description}</p>
                    <p>SKU: {produtos.sku}</p>
                <div className="sub-informacoes">
                    <p>Categoria: {produtos.category}</p>
                    <p>Estoque: {produtos.stock}</p>
                    <p>disponibilidade: {produtos.availabilityStatus}</p>
                    <p>marca: {produtos.brand}</p>

                </div>
                <div className="cleitin-preguica">
                <p>Desconto: {produtos.discountPercentage}</p>
                <p>Preço: {produtos.price}</p>
                </div>
                <div className="caminho-cleitin">
                    
                    <a href="#">Comprar</a>
                </div>
                <div className="clientes-cleitin">
                <p>Avaliação: {produtos.rating}</p>
                
                </div>

            </div>
            
        </div>
        </main>
    );
}