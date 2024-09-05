//console.log('js link');
const cep = document.querySelector("#cep");
const numero = document.querySelector("#numero");

//criar a div que terá o mapa
const divMap = document.createElement("div");
divMap.id = "map";
divMap.className = "map-container";
/*    divMap.style.height = '50em';
    divMap.style.width = '100%'; */

const consultaCep = async () => {
  let cepValue = cep.value;
  console.log(cepValue);

  if (cepValue.length === 8) {
    try {
      const res = await axios.get(
        `https://brasilapi.com.br/api/cep/v2/${cepValue}`
      );
      console.log(res.data);

      const geo = res.data.location.coordinates;
      console.log("geo", geo);

      preencherCampos(res.data);
      numero.focus();

      showMap(geo.latitude, geo.longitude, res.data.street);
    } catch (error) {
      console.error(error);
    }
  }
};

const preencherCampos = (data) => {
  const logradouro = document.querySelector("#logradouro");
  const bairro = document.querySelector("#bairro");
  const uf = document.querySelector("#uf");

  logradouro.value = data.street;
  bairro.value = data.neighborhood;
  uf.value = data.state;
};

//consultaCep('60420670')

// Initialize and add the map
let map;

async function showMap(lat, long, name) {
  console.log("params:", lat, long, name);
  const mainDiv = document.querySelector(".container");

  // The location of Uluru
  const position = { lat: parseFloat(lat), lng: parseFloat(long) };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  console.log(`geo:`, position);
  // The map, centered at Uluru
  map = new Map(divMap, {
    zoom: 20,
    center: position,
    mapId: "DEMO_MAP_ID",
    mapTypeId: google.maps.MapTypeId.SATELLITE, // Set map type to satellite
  });

  // The marker, positioned at Uluru
  new AdvancedMarkerElement({
    map: map,
    position: position,
    title: name,
  });

  mainDiv.appendChild(divMap);
}

const limpar = () => {
  divMap.innerHTML = null;
};
