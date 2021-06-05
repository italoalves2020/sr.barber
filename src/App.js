import React from 'react'

import './App.css';

function App() {
  return (
    <div className="div-pai">
        <h2>Recuperação de senha</h2>

        <section className="tela">
          <div className="titulo">
            <h3>Informe o código de segurança enviado por E-mail</h3>
          </div>
          <div className="block">
            <div>
              <input type="text" placeholder="Code" className="campo-code"/>
            </div>
            <div>
              <button className="button" value="recSenha" onclick="">Recuperar senha</button>
            </div>
          </div>
        </section>
    </div>
  );
}

export default App;
