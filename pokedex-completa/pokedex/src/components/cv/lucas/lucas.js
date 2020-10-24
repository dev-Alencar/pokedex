import React, { Component } from "react";
import Menu from "../../menu/menu";
import Footer from "../../footer/footer";
import "../../voltar/voltar.css"
import "./lucas.css";
import Lucas from "../../Assets/lucas.jpeg"


export default class Cv extends Component {

  voltar = (event) => {
    this.props.history.push("/");
  };
    render() {
    return (
      <div>
  <div className="tela-cv"> 
    <Menu />
    <button className="btn" id="voltar"onClick={this.voltar}>
        🡠 Voltar
        </button>
      <div className="curriculo">
        <div className="wrapper-white">
          <section className="perfil-id">
            <article className="profile">
              <img src={Lucas} alt="foto de perfil"/>
            </article>
            <article className="name">
              <h2>Lucas Alencar</h2>
              <p>Front-end Developer</p>
              <p>lucasalencar.dev@gmail.com</p>
              <p>lucalencar.dev@gmail.com</p>
            </article>
          </section>
          <section className="descricao">
            <h2>Descrição</h2>
            <p> Em busca da primeira oportunidade como programador. Sou autodidata, comprometido e tenho facilidade em desenvolver projetos em equipe. Acredito que o processo de conhecimento é tão importante quanto o resultado final.</p>
          </section>
          <section className="Formacao">
            <h2>Formação/Cursos</h2>
            
            <p> SCRUM - SFPC | CertiProf </p>
            <p> Desenvolvedor Front-end (HTML,CSS, JS, React) | Start Latam - Accenture</p>
            <p> Formação Front-end (HTML,CSS, JS, React) | Alura</p>
            <p> Inglês | Alura</p>
            <p> Inglês | Transworld</p>
            <p> Linux | Alura</p>
            <p> Git/Github | Alura</p>
            <p> JavaScript | Origamid</p>
            <p> React | Origamid</p>
            <p> Web Design (HTML,CSS, JS) | Origamid</p>
            <p> Direito Bacharelado | Universidade Universo Salgado de Oliveira</p>

          </section>
        </div>
        <div className="barra-lateral">
          <div className="dados">
            <div className="dados-pessoais">
              <h3>Dados pessoais</h3>
              <p className="skill">Recife/PE</p>
              <p className="skill">(81) 9 9799-0128</p>
              <p className="skill"><a href="https://www.linkedin.com/in/lucas-alencar-dev/" target="_blank">Linkedin</a></p>
            <p className="skill"><a href="https://github.com/dev-Alencar" target="_blank">Github</a></p>
             
            </div>

            <div className="skills">
              <h3>Conhecimentos</h3>
        
              <p className="skill">CSS</p>
              <p className="skill">Sass</p>
              <p className="skill">JavaScript</p>
              <p className="skill">ReactJs</p>
              <p className="skill">Scrum</p>
              <p className="skill">Linux</p>
              <p className="skill">html</p>
              <p className="skill">Git</p>
             

            </div>
          </div>
        </div>
      </div>
    </div>
      
  <Footer />
</div>
  )
  }

}
