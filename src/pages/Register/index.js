import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";

import "./styles.css";

import logoImg from "../../assets/logo.svg";

function Register() {
  const nome = useState("");
  const email = useState("");
  const whatsapp = useState("");
  const cidade = useState("");
  const uf = useState("");

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      nome: nome[0],
      email: email[0],
      whatsapp: whatsapp[0],
      cidade: cidade[0],
      uf: uf[0]
    };

    try {
      const response = await api.post("ongs", data);
      alert("Seu ID de acesso: " + response.data.id);
      history.push("/");
    } catch (err) {
      alert("Erro no cadastro, tente novamente.");
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude a encontrarem os
            casos da sua ONG.
          </p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para Logon
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome da ONG"
            value={nome[0]}
            onChange={e => nome[1](e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email[0]}
            onChange={e => email[1](e.target.value)}
          />
          <input
            placeholder="Whatsapp"
            value={whatsapp[0]}
            onChange={e => whatsapp[1](e.target.value)}
          />
          <div className="input-group">
            <input
              placeholder="Cidade"
              value={cidade[0]}
              onChange={e => cidade[1](e.target.value)}
            />
            <input
              placeholder="UF"
              style={{ width: 80 }}
              value={uf[0]}
              onChange={e => uf[1](e.target.value)}
            />
          </div>
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
