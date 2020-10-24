import React, { Component } from "react";
import Menu from "../../menu/menu";
import Footer from "../../footer/footer";
import "../../voltar/voltar.css"
import "./luiz.css";
import Luiz from "../../Assets/luiz.jpg"


export default class Cv extends Component {
  voltar = (event) => {
    this.props.history.push("/");
  };

  render() {
  return (
    
<div className="tela-cv"> 
  <Menu />
  <button className="btn" id="voltar"onClick={this.voltar}>
        🡠 Voltar
        </button>
    <div className="curriculo">
      <div className="wrapper-white">
        <section className="perfil-id">
          <article className="profile">
            <img src={Luiz} alt="foto de perfil"/>
          </article>
          <article className="name">
            <h2>Luiz Gomes</h2>
            <p>Front-end Developer</p>
            <p>Luizgomes77777@gmail.com</p>
          </article>
        </section>
        <section className="descricao">
          <h2>Descrição</h2>
          <p>Olá, meu nome é Luiz Gomes, sou desenvolvedor web estou em busca da primeira oportunidade,estou em formação no curso de Técnico em informática para internet no IFPE e outros cursos voltados ao Desenvolvimento Front-End (Sass, React e Bootstrap), JavaScript, HTML5, CSS3, Git e GitHub, UI/UX Skills e Lógica de Programação.</p>
        </section>
        <section className="Formacao">
          <h2>Formações</h2>
          <p>Técnico em informática para internet,IFPE
          </p>
          <p>responsive web design certification,FreeCodeCamp
          </p>
          <p>JavaScript Algorithms and Data Structures
Certification,FreeCodeCamp
          </p>
          <p>UI/UX Basics Experience, Interface e Prototype
          </p>
          <p>Scrum Foundations Professional Certificate(SFPC) - (PTBR)
          </p>
        </section>
      </div>
      <div className="barra-lateral">
        <div className="dados">
          <div className="dados-pessoais">
            <h3>Dados pessoais</h3>
            <p className="skill">Recife-PE</p>
            <p className="skill">99891-4397</p>
            <p className="skill"><a href="https://www.linkedin.com/in/luiz-gomes1/" target="_blank">Linkedin</a></p>
            <p className="skill"><a href="https://github.com/Luizgomess" target="_blank">Github</a></p>
          </div>

          <div className="skills">
            <h3>Conhecimentos</h3>
            <p className="skill">Html</p>
            <p className="skill">Css</p>
            <p className="skill">Sass</p>
            <p className="skill">JavaScript</p>
            <p className="skill">React</p>
            <p className="skill">Scrum</p>
          </div>
        </div>
      </div>
    </div>
      
  <Footer />
</div>
  )
  }

}
