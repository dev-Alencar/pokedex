import React, { Component } from "react";
import "./pokeinfo.css";
import Menu from "../menu/menu";
import "../voltar/voltar.css";
import Footer from "../footer/footer"

const COLORS = {
  bug: "B1C12E",
  dark: "4F3A2D",
  dragon: "755EDF",
  electric: "FCBC17",
  fairy: "F4B1F4",
  fighting: "823551D",
  fire: "E73B0C",
  flying: "A3B3F7",
  ghost: "6060B2",
  grass: "74C236",
  ground: "D3B357",
  ice: "A3E7FD",
  normal: "C8C4BC",
  poison: "934594",
  psychic: "ED4882",
  rock: "B9A156",
  steel: "B5B5C3",
  water: "3295F6"
};

export default class Pokeinfos extends Component {
  state = {
    detalhesPokemon: {},
    mensagemErro: "",
    paginaAnterior: ""
  };

  componentDidMount() {
    if (
      this.props &&
      this.props.location &&
      this.props.location.state &&
      this.props.location.state.detalhesPokemon && this.props.location.state.paginaAnterior
    ) {
      this.setState({
        detalhesPokemon: this.props.location.state.detalhesPokemon,
        paginaAnterior: this.props.location.state.paginaAnterior
      });
    } else {
      this.setState({ mensagemErro: "erro" });
    }
  }

  voltar = (event) => {
    this.props.history.push(this.state.paginaAnterior);
  };

  render() {
    const { detalhesPokemon, mensagemErro } = this.state;
    return (
      <div className="principal">
        <Menu />
        <button id="voltar" onClick={this.voltar}>
        🡠 Voltar
        </button>
        {detalhesPokemon ? (
        <div className="pokeinfos">
          <div className="image"> 
                <img id="ima"
                    alt={detalhesPokemon.name}
                    src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${detalhesPokemon.id}.png`}
                  />
              </div>
            <section className="real-sidebar">
              <div className="side-bar">
                <div className="barra-de-status"> 
                <div id="nome">{detalhesPokemon.name}</div>         
                <p> HP:</p>
                <p>Ataque:</p>
                <p>Defesa:</p>
                <p>Velocidade:</p> 
                <p>Ataque Especial:</p>
                <p>Defesa Especial:</p>
              </div>
                <div className="status-bar-pokeinf">
                  <div className="grey-bar">
                    <div className="bar-hp" style={{ width: `${detalhesPokemon.hp}px` }}><span className="status-em-preto">{detalhesPokemon.hp}</span></div>
                  </div>

                  <div className="grey-bar">
                    <div className="bar-atk" style={{ width: `${detalhesPokemon.attack}px` }}><span className="status-em-preto">{detalhesPokemon.attack}</span></div>
                  </div>

                  <div className="grey-bar">
                    <div className="bar-def" style={{ width: `${detalhesPokemon.defense}px` }}><span className="status-em-preto">{detalhesPokemon.defense}</span></div>
                  </div>

                  <div className="grey-bar">
                    <div className="bar-speed" style={{ width: `${detalhesPokemon.speed}px` }}><span className="status-em-preto">{detalhesPokemon.speed}</span></div>
                  </div>

                  <div className="grey-bar">
                    <div className="bar-spatk" style={{ width: `${detalhesPokemon.specialattack}px` }} ><span className="status-em-preto">{detalhesPokemon.specialattack}</span></div>
                  </div>

                  <div className="grey-bar">
                    <div className="bar-spdef" style={{ width: `${detalhesPokemon.specialdefense}px` }} ><span className="status-em-preto">{detalhesPokemon.specialdefense}</span></div>
                  </div>
                </div> 
              </div>

                

              <div className="segundaBox">
                <div><p>Altura</p><span className="status-numero">{detalhesPokemon.height / 10}m</span></div>
                <div><p>Peso</p><span className="status-numero">{detalhesPokemon.weight / 10}kg</span></div>
                <div><p>ID</p><span className="status-numero">{detalhesPokemon.id}</span></div>
                <div><p>Tipo</p><div class="pokemon-type" style={{ background: `#${COLORS[detalhesPokemon.types]}` }}>
                      <span>{detalhesPokemon.types}</span>
                    </div></div>
              </div>
            </section>
              
          </div>

        ) : (
          ((<span>{mensagemErro}</span>),
          console.log("error ao carregar pokemons na página"))
        )}
      <Footer />
      </div>
    )
  }
}
