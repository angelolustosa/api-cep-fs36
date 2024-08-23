#API-CEP

### Tecnologias:

1. [Bootstrap](https://getbootstrap.com/)
2. [Axios](https://axios-http.com/docs/example)


### Consulta dos ceps utilizando o serviço gratuito [brasilapi.com.br](https://brasilapi.com.br)

GET [https://brasilapi.com.br/api/cep/v2/60420670](https://brasilapi.com.br/api/cep/v2/60420670)

```json
// 20240822205640
// https://brasilapi.com.br/api/cep/v2/60420670

{
  "cep": "60420670",
  "state": "CE",
  "city": "Fortaleza",
  "neighborhood": "Montese",
  "street": "Rua Irmã Bazet",
  "service": "open-cep",
  "location": {
    "type": "Point",
    "coordinates": {
      "longitude": "-38.5477778",
      "latitude": "-3.7677725"
    }
  }
}
```