import { useForm } from "react-hook-form";
import "./styles.css";

function Dizimista() {
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (event) => {
    console.log(event)
  }

  const handleCep = (event) => {
    const { value } = event.target

    const cep = value.replace(/\D/g, "");

    if (cep?.length !== 8) return; 
    
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(res => res.json()).then(data => {
      setValue('address', data.logradouro)
      setValue('address2', data.complemento)
      setValue('district', data.bairro)
      setValue('city', data.localidade)
      setValue('uf', data.uf)
    })
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
              name="name"
              id="name"
              placeholder="Nome"
              className="form-input"
            />
          </div>
          <div className="row col-2">
            <div className="form-subitens">
              <div>
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  value="Masculino"
                />
                <label htmlFor="male">Masculino</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  value="Feminino"
                />
                <label htmlFor="female">Feminino</label>
              </div>
            </div>
            <div className="form-subitens">
              <label htmlFor="birthday">Data de Nascimento </label>
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
              <label htmlFor="address">Logradouro</label>
              <input
                type="text"
                {... register('address')}
                id="address"
                placeholder="Rua/Avenida"
                className="form-input"
              />
            </div>
            <div>
              <label htmlFor="number">Número</label>
              <input
                type="text"
                {...register('number')}
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
                {...register('address2')}
                id="address2"
                placeholder="Complemento"
                className="form-input"
              />
            </div>
            <div>
              <label htmlFor="district">Bairro</label>
              <input
                type="text"
                {...register('district')}
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
                {...register('city')}
                id="city"
                className="form-input"
              />
            </div>
            <div className="col-2">
              <div>
                <label htmlFor="uf">UF</label>
                <input type="text" {...register('uf')} id="uf" className="form-input" />
              </div>
              <div>
                <label htmlFor="zip">CEP</label>
                <input
                  type="text"
                  {...register('zip')}
                  id="zip"
                  className="form-input"
                  onBlur={handleCep}
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
