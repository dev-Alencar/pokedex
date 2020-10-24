import React, { Component } from "react";
import "./menu.css";
import { Link } from "react-router-dom";
import Pokeball from "../Assets/pokeball.png"

export default class Home extends Component {
  render() {
    return (
      <div class="nav">
        <Link to={"/"}>
    <div class="logo">
      <img
        src={Pokeball}
        alt="Pokedex" width="80" /></div></Link>
    <label for="btn" class="icon">
      <span class="fa fa-bars">&#9776;</span>
    </label>
    <input type="checkbox" id="btn" />
    <ul>
      <li>
        <label for="btn-1" class="show">Gerações</label>
        <a href="#">Gerações</a>
        <input type="checkbox" id="btn-1" />
        <ul>
            <li><Link id="link" to={"/gen1"}>Kanto</Link></li>
            <li><Link id="link" to={"/gen2"}>Johto</Link></li>
            <li><Link id="link" to={"/gen3"}>Hoenn</Link></li>
            <li><Link id="link" to={"/gen4"}>Sinnoh</Link></li>
            <li><Link id="link" to={"/gen5"}>Unova</Link></li>
            <li><Link id="link" to={"/gen6"}>Kalos</Link></li>
        </ul>
      </li>
      </ul>
    </div>
    );
  }
}