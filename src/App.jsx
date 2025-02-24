import { useEffect, useState } from "react";
import "./App.css";
import BarraDePesquisa from "./componentes/BarraDePesquisa";
import Card from "./componentes/Card";
import Filtro from "./componentes/Filtro";
import Ordena from "./componentes/Ordenacao";
import SideBar from "./componentes/Sidebar";

function App() {
  const [dados, setDatos] = useState([]);

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/brunomesquita1/a870a0753d87e1646e029d52fe97a7f2/raw/04df1574d2af6fc0b79d485c2c377c617695e9fc/codeconnect_api_fake.txt"
    )
      .then((resposta) => resposta.json())
      .then((dados) => setDatos(dados));
  }, []);

  return (
    <div className="container">
      <SideBar />
      <div>
        <BarraDePesquisa />
        <Filtro />
        <Ordena />
        <ul className="lista-cards">
          {dados
            ? dados.map((item, index) => (
                <li key={index}>
                  <Card
                    //id={item.id}
                    imagemUrl={item.imagem_capa}
                    titulo={item.titulo}
                    resumo={item.resumo}
                    linhasDeCodigo={item.linhas_de_codigo}
                    compartilhamentos={item.compartilhamentos}
                    comentarios={item.comentarios}
                    usuario={item.usuario}
                  />
                </li>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
}

export default App;
