import "./styles.css";

function Dizimista() {
  return (
    <>
      <div className="container">
        <h1>Novo Dizimista</h1>
        <form>
          <div className="row">
            <label for="name">Nome Completo</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nome"
              className="form-input"
            />
          </div>
          <div className="row col-2">
            <div className="form-subitens">
              <div>
                <input type="radio" name="gender" id="male" value="Masculino" />
                <label for="male">Masculino</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  value="Feminino"
                />
                <label for="female">Feminino</label>
              </div>
            </div>
            <div className="form-subitens">
              <label for="birthday">Data de Nascimento </label>
              <input
                type="date"
                name="birthday"
                id="birthday"
                className="form-date"
              />
            </div>
          </div>
          <div className="row col-3">
            <div>
              <label for="address">Endereço</label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Rua/Avenida"
                className="form-input"
              />
            </div>
            <div>
              <label for="number">Número</label>
              <input
                type="number"
                name="number"
                id="number"
                className="form-input"
              />
            </div>
          </div>
          <div className="row col-2">
            <div>
              <label for="address2">Complemento</label>
              <input
                type="text"
                name="address2"
                id="address2"
                placeholder="Complemento"
                className="form-input"
              />
            </div>
            <div>
              <label for="district">Bairro</label>
              <input
                type="text"
                name="district"
                id="district"
                className="form-input"
              />
            </div>
          </div>
          <div className="row col-2">
            <div>
              <label for="city">Cidade</label>
              <input type="text" name="city" id="city" className="form-input" />
            </div>
            <div className="col-2">
              <div>
                <label for="uf">UF</label>
                <input type="text" name="uf" id="uf" className="form-input" />
              </div>
              <div>
                <label for="zip">CEP</label>
                <input
                  type="number"
                  name="zip"
                  id="zip"
                  className="form-input"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Dizimista;
