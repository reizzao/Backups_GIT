class UserModel {
  nome;
  sobrenome;
  constructor(userRequest) {
    this.nome = userRequest.nome;
    this.sobrenome = userRequest.sobrenome;
  }
}

// Funcao Factory : vira o pontoUnico onde se instancia o objeto - dispensando factoryMethod na classe, ou criar metodos staticos
const CreateUserFactory = (u) => {
  return new UserModel(u);
};

const newUserRequest1 = { nome: "Reinaldo", sobrenome: "Zacharias" };

console.log(CreateUserFactory(newUserRequest1));
