import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";

import "./styles.css";

import logoImg from "../../assets/logo.svg";

function NewIncident() {
  const titulo = useState("");
  const descricao = useState("");
  const valor = useState("");

  const ongId = localStorage.getItem("ongId");

  const history = useHistory();

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      titulo: titulo[0],
      descricao: descricao[0],
      valor: valor[0]
    };

    try {
      await api.post("casos", data, {
        headers: {
          Authorization: ongId
        }
      });

      history.push("/profile");
    } catch (err) {
      console.log(err);
      alert("Erro ao cadastrar caso, por favor, tente novamente.");
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um heróia para
            resolver isso.
          </p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </section>
        <form onSubmit={handleNewIncident}>
          <input
            placeholder="Título do caso"
            value={titulo[0]}
            onChange={e => titulo[1](e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={descricao[0]}
            onChange={e => descricao[1](e.target.value)}
          />
          <input
            placeholder="Valor em reais"
            value={valor[0]}
            onChange={e => valor[1](e.target.value)}
          />
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewIncident;
