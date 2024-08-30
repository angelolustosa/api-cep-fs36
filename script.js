//console.log('js link');
const cep = document.querySelector('#cep');
const numero = document.querySelector('#numero');

const consultaCep = async () => {
  let cepValue = cep.value;
  console.log(cepValue);

  if (cepValue.length === 8) {
    try {
      const res = await axios.get(`https://brasilapi.com.br/api/cep/v2/${cepValue}`);
      console.log(res.data);

      preencherCampos(res.data);
      numero.focus();

    } catch (error) {
      console.error(error);
    }
  }
}

const preencherCampos = data => {
  const logradouro = document.querySelector('#logradouro');
  const bairro = document.querySelector('#bairro');
  const uf = document.querySelector('#uf');

  logradouro.value = data.street;
  bairro.value = data.neighborhood;
  uf.value = data.state;

}

//consultaCep('60420670')