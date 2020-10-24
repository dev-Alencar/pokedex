import React, { Component } from "react";
import pokeApi from "../../services/api";
import "../Pokemon/pokemonCard.css";
import Menu from "../menu/menu";
import { Link } from "react-router-dom";
import Footer from "../footer/footer"
import Loading from "../loading/loading"

const TYPE_COLORS = {
  bug: "linear-gradient(180deg, #ACC02C 0%, #BAD60E 100%)",
  dark: "linear-gradient(180deg, #10418A 0%, #103C7D 100%)",
  dragon: "linear-gradient(180deg, #5020D8 0%, #7027CC 100%)",
  electric: "linear-gradient(180deg, #EAEE20 0%, #CDD105 100%)",
  fairy: "linear-gradient(180deg, #EC92D8 0%, #F958D5 100%)",
  fighting: "linear-gradient(180deg, #8C1438 0%, #A02B4E 100%)",
  fire: "linear-gradient(180deg, #E01C1C 0%, #F12408 100%)",
  flying: "linear-gradient(180deg, #8BECFA 0%, #B0D9DF 100%)",
  ghost: "linear-gradient(180deg, #665AEF 0%, #34227C 100%)",
  grass: "linear-gradient(180deg, #169E2C 0%, #28C441 100%)",
  ground: "linear-gradient(180deg, #E2BA51 0%, #BD9121 100%)",
  ice: "linear-gradient(180deg, #71DCC9 0%, #61D0D0 69.4%)",
  normal: "linear-gradient(180deg, #B4B4B4 0%, #707070 100%)",
  poison: "linear-gradient(180deg, #7000FF 0%, #49089B 100%)",
  psychic: "linear-gradient(180deg, #F519DF 0%, #FF00E5 100%)",
  rock: "linear-gradient(180deg, #B99842 0%, #A97A00 100%)",
  steel: "linear-gradient(180deg, #6D819E 0%, rgba(71, 95, 123, 0.53) 100%)",
  water: "linear-gradient(180deg, #2A7DFA 0%, #0066FF 100%)"
};

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

export default class Pokemon extends Component {
  state = {
    pokemons: []
  };

  componentDidMount() {
    this.carregarListaPokemons();
  }

  async carregarListaPokemons() {
    let response = await pokeApi.get("pokemon?limit=150&offset=0");
    let arrayPokemon = [];

    let listaPokemons = response.data["results"];

    for (let poke of listaPokemons) {
      let responseInfo = await pokeApi.get(poke.url);
      let { name, id, height, weight, stats, types } = responseInfo.data;

      arrayPokemon.push({
        name: name,
        id: this.getimg(id),
        height: height,
        weight: weight,
        attack: this.getInformacao(stats, "attack"),
        defense: this.getInformacao(stats, "defense"),
        speed: this.getInformacao(stats, "speed"),
        specialattack: this.getInformacao(stats, "special-attack"),
        specialdefense: this.getInformacao(stats, "special-defense"),
        hp: this.getInformacao(stats, "hp"),
        types: types[0].type.name
      });
    }
     this.setState({ pokemons: arrayPokemon });
  }

  getInformacao(statsArray, statsName) {
    let stats = statsArray
      .filter((item) => item.stat.name === statsName)
      .shift();
    return stats.base_stat;
  }

  voltar = (event) => {
    this.props.history.push("/");
  };

  getimg(idpokemon) {
    if(idpokemon > 0 && idpokemon < 10) {
      return `00` + idpokemon
    } else if (idpokemon >= 10 && idpokemon <= 99) {
        return `0` + idpokemon
      } else if (idpokemon >= 100) {
        return idpokemon
      }
    }

  render() {
    return (
      <div>
        <Menu />
        <button className="btn" id="voltar"onClick={this.voltar}>
        🡠 Voltar
        </button>
        {this.state.pokemons && this.state.pokemons.length > 0 ? (
          <div className="container">
            {this.state.pokemons.map((pokemon, index) => (
              <Link
              to={{
                pathname: "/pokeinfos",
                state: { detalhesPokemon: pokemon , paginaAnterior: "/gen1"}
              }}
            >
              <section key={index}>
                <div className="card" id={pokemon.id} style={{background: `${TYPE_COLORS[pokemon.types]}` }}>
                  <div className="pokemon-id">
                    <p className="pokemon-name">{pokemon.name}</p>
                    <p className="id">#{pokemon.id}</p>
                  </div>
                  <div className="bagulho-branco">
                    <div className="bolinha maior"></div>
                    <div className="bolinha menor"></div>
                  </div>
                  <div className="img-pokemon">
                    <img
                      alt={pokemon.nome}
                      src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.id}.png`}
                    />
                  </div>
                  <div className="status-bar">
                  <div class="pokemon-type" style={{ background: `#${COLORS[pokemon.types]}` }}>
                      <span>{pokemon.types}</span>
                    </div>
                    <div className="with-stats">
                      <span>
                        
                          Atk:
                        
                      </span>
                      <div className="status-barW">
                        <div
                          className="green-bar-atk"
                          style={{
                            width: `${pokemon.attack}px`
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="with-stats">
                      <span>Def:</span>
                      <div className="status-barW">
                        <div
                          className="green-bar-def"
                          style={{
                            width: `${pokemon.defense}px`
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              </Link>
            ))}
          </div>
        ) : (
          <Loading />
        )}
        <Footer />
      </div>
    );
  }
}