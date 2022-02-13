import { useState } from "react";
import { useForm } from "react-hook-form";
import "./styles.css";

function Dizimista() {
  const [ check, setCheck ] = useState(false);
  const handleChecked = (event) => {
    setCheck(event.target.checked)
    handleSpouse()
  }
  
  const handleSpouse = () => {
    const spouse = document.querySelectorAll('.spouse');
    spouse.forEach(field => {
      field.classList.toggle('active')
    })
  }


  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (event) => {
    console.log(event);
  };

  const handleCep = (event) => {
    const { value } = event.target;

    const cep = value.replace(/\D/g, "");

    if (cep?.length !== 8) return;

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setValue("address", data.logradouro);
        setValue("address2", data.complemento);
        setValue("district", data.bairro);
        setValue("city", data.localidade);
        setValue("uf", data.uf);
      });
  };

  return (
    <>
      <div className="container">
        <h1>Novo Dizimista</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <label htmlFor="name">Nome Completo</label>
            <input
              type="text"
              {...register("name")}
              id="name"
              placeholder="Nome"
              className="form-input"
            />
          </div>
          <div className="row col-3">
            <div className="form-subitens">
              <label htmlFor="gender">Sexo:</label>
              <select
                className="form-select"
                defaultValue={''}
                id="gender"
                {...register("gender")}
              >
                <option value='' disabled>Selecione...</option>
                <option value="male">Masculino</option>
                <option value="female">Feminino</option>
              </select>
            </div>
            <div className="form-subitens">
              <label htmlFor="birthday">Data de Nascimento</label>
              <input
                type="date"
                {...register("birthday")}
                id="birthday"
                className="form-date"
              />
            </div>
            <div className="form-subitens">
              <label htmlFor="married">Casado</label>
              <input
                type="checkbox"
                {...register("married")}
                id="married"
                checked={check}
                onChange={handleChecked}
              />
            </div>
          </div>
          <div className="row spouse">
            <label htmlFor="spouseName">Nome Completo do Cônjuge</label>
            <input
              type="text"
              {...register("spouseName")}
              id="spouseName"
              placeholder="Nome"
              className="form-input"
            />
          </div>
          <div className="row col-3 spouse">
            <div className="form-subitens">
              <label htmlFor="spouseGender">Sexo:</label>
              <select
                className="form-select"
                defaultValue={''}
                id="spouseGender"
                {...register("spouseGender")}
              >
                <option value='' disabled>Selecione...</option>
                <option value="male">Masculino</option>
                <option value="female">Feminino</option>
              </select>
            </div>
            <div className="form-subitens">
              <label htmlFor="spouseBirthday">Data de Nascimento</label>
              <input
                type="date"
                {...register("spouseBirthday")}
                id="spouseBirthday"
                className="form-date"
              />
            </div>
          </div>
          <div className="row col-3">
            <div>
              <label htmlFor="zip">CEP</label>
              <input
                type="text"
                {...register("zip")}
                id="zip"
                className="form-input"
                onBlur={handleCep}
              />
            </div>
            <div>
              <label htmlFor="address">Logradouro</label>
              <input
                type="text"
                {...register("address")}
                id="address"
                placeholder="Rua/Avenida"
                className="form-input"
              />
            </div>
            <div>
              <label htmlFor="number">Número</label>
              <input
                type="text"
                {...register("number")}
                id="number"
                className="form-input"
              />
            </div>
          </div>
          <div className="row col-2">
            <div>
              <label htmlFor="address2">Complemento</label>
              <input
                type="text"
                {...register("address2")}
                id="address2"
                placeholder="Complemento"
                className="form-input"
              />
            </div>
            <div>
              <label htmlFor="district">Bairro</label>
              <input
                type="text"
                {...register("district")}
                id="district"
                className="form-input"
              />
            </div>
          </div>
          <div className="row col-2">
            <div>
              <label htmlFor="city">Cidade</label>
              <input
                type="text"
                {...register("city")}
                id="city"
                className="form-input"
              />
            </div>
            <div className="col-2">
              <div>
                <label htmlFor="uf">UF</label>
                <input
                  type="text"
                  {...register("uf")}
                  id="uf"
                  className="form-input"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <script type="text/javascript" src="../../Helpers/buscaCep.js"></script>
    </>
  );
}

export default Dizimista;
