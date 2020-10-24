import React, { Component } from "react";
import "../footer/footer.css";
import { Link } from "react-router-dom";
import Danilo from "../Assets/danilo.jpeg"
import Hylkson from "../Assets/hylkson.jpeg"
import Lucas from "../Assets/lucas.jpeg"
import Luiz from "../Assets/luiz.jpg"


export default class Footer extends Component { 
  render () {
    return (
    <div>
      <div class="rodape footer">
      <div className="devs">  
        <h4 class="developerName">
          Desenvolvedores:
        </h4>
        <div class="developers">        
        <Link to={"/lucas"}><div class="photo"><img src={Lucas} height="40"/></div> </Link>
          <Link to={"/luiz"}><div class="photo"><img src={Luiz} height="40"/></div></Link>
         <Link to={"/danilo"}> <div class="photo"><img src={Danilo} height="40"/></div> </Link>
         <Link to={"/hylkson"}><div class="photo"><img src={Hylkson} height="40"/></div></Link>
        </div> 
      </div>
      <div class="about">
      <h5>
         © 2020 Equipe Rocket | <Link id="footer-sobre" to={"/sobre"}>Sobre</Link>
      </h5>
      </div>
      </div>
    </div>
    );
  }
}
  
