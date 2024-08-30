//1 - Objeto vazio que se chama moto
let moto = {};

//2 -Criando um objeto com as propriedades/keys/chave e seus valores
let pessoa = {
    nome: 'Breno',
    sobrenome: 'Frederico',
    idade: 30,
    cores_favoritas: ['branco', 'prata', 'vermelho'],
    valor_emprestimo: 120.500,
    estrangeiro: false,
    //endereco: 'Rua 01, Vila Pery, Fortaleza-Ce, 60879-954'
    endereco: {
        rua: 'Rua 01',
        cidade: 'Vila Pery',
        estado: 'Fortaleza-Ce',
        cep: '60879-954'
    }
}

//3 - acessando o valor de uma propriedade
//console.log(pessoa.nome);

//4 - atualizando o valor do objeto
pessoa.nome = 'Breno Aragão';
pessoa.sobrenome = 'Araújo';
pessoa.idade = 120;

//console.log(pessoa);

//5 - Adicionando uma nova propriedade ao objeto



pessoa.profissao = 'Advogado';
//pessoa['profissao'] = 'Advogado';

//6 - Criando uma propriedade de forma mais flexível
pessoa['peso'] = 140.4;
//console.log(pessoa);

//7 - Deletando uma propriedade
delete pessoa['endereco'] 

//console.log(pessoa);

//8 - Adicionando uma propriedade
pessoa.nomeCompleto = `${pessoa.nome} ${pessoa.sobrenome}`;
//console.log(pessoa);

//9 - Verificar se a propriedade existe
/* console.log('nome' in pessoa); // true
console.log('idade' in pessoa); // true
console.log('telefone' in pessoa); // false */

//10 - Listar propriedade do objeto
//console.log(Object.keys(pessoa))

//11 - Listar os valores das propriedade
//console.log(Object.values(pessoa))

//12 - Desestrutuação de objeto para criar um novo sem referencia para o objeto de origem
const pessoa_teste = {...pessoa};
//console.log(pessoa_teste);

//13 - Criar uma array com a combinação chave valor 
//console.log(Object.entries(pessoa));

//14 - Converter um objeto em JSON
const objeto = JSON.stringify(pessoa)
//console.log(objeto);

//15 - Mesclando objeto

let moto_objeto = {
    marca: 'Honda',
    modelo: 'ADV',
    ano: 2024,
    cor: 'Vermelho',
    cc: 150
}

let moto_objeto2 = {
    tipo: 'Trail',
    ano: 2025,
    combustivel: 'flex',
    chassi: 'fdsfg5dsf6g4d65fgd6sf45g6'
}


let moto_completa = Object.assign({}, moto_objeto, moto_objeto2 );
//console.log(moto_completa)

//16 -propriedade com função e refenciado a variável de escopo this ao objeto
moto.marca = 'Honda';
moto.modelo = 'XRE';
moto.ano = 2014;
moto.ligar = function() { return `A moto ${moto.marca} ${this.modelo}  ligou!`}

/* console.log(moto);
console.log(moto.ligar()) */

const ligarMoto =() => `A moto ${moto.marca} ${moto.modelo}  ligou!`

// 17 - Convertendo uma string em objeto JSON

let jsonString = '{"nome": "Breno", "idade": 30, "cores_favoritas": ["branco", "prata", "vermelho"]}'
let jsonObj = JSON.parse(jsonString)
//console.log(jsonObj);

//18 - Identação do objeto
const obj = { nome: 'Teste 1', valor: 12, ativo: false}
console.log(JSON.stringify(obj, null, 4));