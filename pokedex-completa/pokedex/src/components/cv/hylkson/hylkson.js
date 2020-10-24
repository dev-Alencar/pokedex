import React, { Component } from "react";
import Menu from "../../menu/menu";
import Footer from "../../footer/footer";
import "../../voltar/voltar.css"
import "./hylkson.css";
import Hylkson from "../../Assets/hylkson.jpeg"



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
        <div className="wrapper-white-hylk">
          <section className="perfil-id">
            <article className="profile">
              <img src={Hylkson} alt="foto de perfil"/>
            </article>
            <article className="name">
              <h2>Hylkison Freitas</h2>
              <p>Front-end Developer</p>
              <p>Hylkison.freitas@gmail.com</p>
            </article>
          </section>
          <section className="descricao">
            <h2>Descrição</h2>
            <p>Adquirir experiência e aumentar meus conhecimentos para me tornar um
profissional qualificado na área de tecnologia da informação, atuando
sempre para crescer junto com a empresa.</p>
          </section>
          <section className="Formacao">
            <h2>Formações</h2>
            <p>Curso de Front End com ênfase em React - Start Latam - 2020
            </p>
            <p>SCRUM - SFPC | CertiProf
            </p>
            <p>Ensino Médio (Completo)
            </p>

          </section>
        </div>
        <div className="barra-lateral-hylk">
          <div className="dados">
            <div className="dados-pessoais">
              <h3>Dados pessoais</h3>
              <p className="skill">Olinda/PE</p>
              <p className="skill">Sapucaia de fora</p>
              <p className="skill">98660-8556</p>
              <p className="skill"><a href="https://www.linkedin.com/in/hylkison-freitas-363b391a2/" target="_blank">Linkedin</a></p>
            <p className="skill"><a href="https://github.com/hylkison" target="_blank">Github</a></p>
            </div>

            <div className="skills">
              <h3>Conhecimentos</h3>
              <p className="skill">HTML</p>
              <p className="skill">CSS</p>
              <p className="skill">JavaScript</p>
              <p className="skill">React</p>
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