const cep = document.querySelector('#cep');
const numero = document.querySelector('#numero');

const carregarListaEstados = async () => {
  const ufSelect = document.querySelector('#uf');

  const res = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`);
  //console.log('estados', res.data);

  const listaEstados = res.data.sort((a, b) => (a.nome > b.nome) ? 1 : -1);
  let optionEstados = '';

  listaEstados.forEach((estado) => {
    //console.log(`<option value="${estado.sigla}">${estado.nome}</option>`)

    optionEstados = optionEstados + `<option value="${estado.sigla}">${estado.nome}</option>`;
  });

  console.log('optionEstados', optionEstados);

  ufSelect.textHTML = optionEstados;
}

carregarListaEstados();

const carregarListaCidadePorUF = async siglaUf => {
  const cidadeSelect = document.querySelector('#localidade');

  const res = await axios.get(`https://brasilapi.com.br/api/ibge/municipios/v1/${siglaUf}`);
  console.log('cidades', res.data);

  let cidades = res.data;

  let optionCidades = '';

  cidades.forEach((cidade) => {
    //console.log(`<option value="${estado.sigla}">${estado.nome}</option>`)

    optionCidades = optionCidades + `<option value="${cidade.nome}">${cidade.nome}</option>`;
  });


  console.log('optionCidades', optionCidades);

  cidadeSelect.innerHTML = optionCidades;
}

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

const preencherCampos = async data => {
  const logradouro = document.querySelector('#logradouro');
  const bairro = document.querySelector('#bairro');
  const uf = document.querySelector('#uf');
  const cidade = document.querySelector('#localidade');

  logradouro.value = data.street;
  bairro.value = data.neighborhood;
  uf.value = data.state;

  await carregarListaCidadePorUF(data.state);

  cidade.value = data.city.toUpperCase();

}

//consultaCep('60420670')