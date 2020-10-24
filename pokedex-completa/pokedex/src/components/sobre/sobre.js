import React, { Component } from "react";
import "./sobre.css";
import "../voltar/voltar.css";
import Menu from "../menu/menu";
import Footer from "../footer/footer"
import ReactImage from "../Assets/react-img.png"
import StyledImage from "../Assets/styled-components-img.png"
import AxiosImage from "../Assets/axios-img.png"
import PokedexImage from "../Assets/pokedex-image.jpg"



export default class Sobre extends Component {
    voltar = (event) => {
        this.props.history.push("/");
      };

  render() {
    return (
      <div>
          <Menu />
          
        <section class="sobre">
        <button className="btn" id="voltar"onClick={this.voltar}>
        🡠 Voltar
        </button>
            
            <h1>Pokedex</h1>
          
          <p>
            A Pokémon Company International, uma subsidiária da The Pokémon Company do Japão,
            gerencia a propriedade fora da Ásia e é responsável pelo gerenciamento da marca,
            licenciamento, marketing, o jogo Pokémon Estampas Ilustradas, a série de TV animada, 
            entretenimento doméstico e o site oficial do Pokémon. O Pokémon foi lançado no Japão
            em 1996 e hoje é uma das marcas de entretenimento infantil mais populares do mundo.
          </p>    
            <div id="imagem">
              <img src={PokedexImage} />
            </div>
             
          <h1>
            Tecnologias Utilizadas
          </h1>
          <div class="div2">        
            <div class="tecnologias">
              <div>
              <img src={ReactImage} width="150px" height="150px"/>
                <p>
                O React é a biblioteca mais popular do JavaScript e é usada para construir uma interface de usuário (IU). Ela oferece uma resposta excelente para o usuário adicionar comandos usando um novo método de renderizar sites. Os componentes dessa ferramenta foram desenvolvidos pelo Facebook
              </p>
              </div>
            </div>
            
            <div class="tecnologias">
              <div>
              <img src={StyledImage} width="150px" height="150px"/>
                <p>
                uma biblioteca (lib) que nos permite escrever códigos CSS dentro do JavaScript. Dessa maneira não precisamos mais ficar importando nossos arquivos .css em nossas páginas e se um dia precisarmos utilizar esse mesmo componente em outro projeto, uma das maneiras seria basicamente copiar o arquivo .js
              </p>
              </div>
            </div>
            
            <div class="tecnologias">
              <div>
              <img src={AxiosImage} width="250px" height="150px"/>
                <p>
                Axios é um cliente HTTP, que funciona tanto no browser quanto em node. js. A biblioteca é basicamente uma API que sabe interagir tanto com XMLHttpRequest quanto com a interface http do node. Isso significa que o mesmo código utilizado para fazer requisições ajax no browser também funciona no servidor  
              </p>
              </div>
            </div>
            </div>    
              
            <div class="div-2">
                <div class="skills">
                  <p class="texto">
                      Clique para ter Acesso ao nosso repositório no GitHub
                  </p>
                            <div class="btn-group">
                          <div class="btn ball">
                        <button>
                          <div class="pokemon-ball"></div><a href="https://github.com/Luizgomess/Pokedex-using-reactjs-and-axios" target="_blank">Github<span data-letters="Go!"></span><span data-letters="Go!"></span></a>
                        </button>
                      </div>
                    </div>
                  </div>
              </div>
      
              <div class="div-2">
                <div class="skills">
                  <p class="texto">
                      Clique para ter Acesso ao nosso projeto no CodeSandBox
                  </p>
                  <div class="btn-group">
            <div class="btn ball">
              <button>
                <div class="pokemon-ball"></div><a href="https://codesandbox.io/s/fervent-night-jyrrt?file=/pokedex-completa/pokedex/src/App.js" target="_blank">Box<span data-letters="Go!"></span><span data-letters="Go!"></span></a>
              </button>
            </div>
          </div>
                  </div>
              </div>
          </section>
    
    
  
    <Footer />
      </div>
    );
  }
}