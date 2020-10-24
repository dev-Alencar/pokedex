import React, { Component } from "react";
import Menu from "../../menu/menu";
import Footer from "../../footer/footer";
import "../../voltar/voltar.css"
import "../danilo/danilo.css";
import Danilo from "../../Assets/danilo.jpeg"



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
          <div className="wrapper-white-danilo">
            <section className="perfil-id">
              <article className="profile">
                <img src={Danilo} alt="foto de perfil"/>
              </article>
              <article className="name">
                <h2>Danilo José</h2>
                <p>Front-end Developer</p>
                <p>dajoliol5@gmail.com</p>
              </article>
            </section>
            <section className="descricao">
              <h2>Descrição</h2>
              <p>Olá, meu nome é Danilo José, tenho 24 anos e atualmente curso T.I. na Start.</p>
            </section>
            
            <section className="Formacao">
              <h2>Formações</h2>
              <p>Curso de Front End com ênfase em React - Start Latam - 2020
              </p>
              <p>Curso Mecatrônica no CEPEP
              </p>
              <p>Ensino Médio (Completo)
              </p>
              <p>Curso de inglês - 3º período do curso de Inglês Intermediário - Prolinfo
              </p>
            </section>
          </div>
          <div className="barra-lateral-danilo">
            <div className="dados">
              <div className="dados-pessoais">
                <h3>Dados pessoais</h3>
                <p className="skill">Olinda/PE</p>
                <p className="skill">Passarinho</p>
                <p className="skill">98896-1001</p>
                <p className="skill"><a href="https://www.linkedin.com/in/danilo-lima-1158591ab/" target="_blank">Linkedin</a></p>
            <p className="skill"><a href="https://github.com/Aqualire5" target="_blank">Github</a></p>
              </div>
  
              <div className="skills">
                <h3>Conhecimentos</h3>
                <p className="skill">HTML</p>
                <p className="skill">CSS</p>
                <p className="skill">JavaScript</p>
                <p className="skill">React</p>
                <p className="skill">C++</p>
                <p className="skill">SCRUM</p>
              </div>
            </div>
          </div>
        </div>
          
      <Footer />
    </div>
      )
      }
  
  }
