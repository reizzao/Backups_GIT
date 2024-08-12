# ESTRUTURANDO
- a src da app tera para usar nas entidades [ data/, model/, usecases/ services/, repositories/ ] -> dentro delas a entidade
- Criar Entidade [  DE QUEM VAI USAR A APP <fazercom tests: data/EntidadeDados + usecases/CRUD>, ]
- FormarEntidade: cada entidade tera o model usado pelo usecase e que sera formado por: [data, ]
- Model <usa> Data & UseCase <usa> Services <usa> Model
- Tests: testar o usecase [ cada usecase de crud, ]






- Criar estrutura do Usuario que vai usar o sistema (estrutura + contrato) {
  - campos que quero que ele tenha
  - acoes que quero que ele possa fazer
  }


- Criar estrutura com o nome da AÇÃO que o ClientRequest vai poder fazer com a app.
- Dar em forma de Estrutura Resposta de Acoes que ele pode fazer - esta acao sera o nome da classe e unico metodo execute.
- O que for #DadoEstatico criar uma estrutura para ser o poloUnico de fonte destes dados
