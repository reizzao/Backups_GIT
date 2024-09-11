# Arquiteturas : Estrutura de Diretorios

arquiteturas: [
 mvc:  Model + Service + Controller + Test,

]

Diretorios: [
"na entidade core/, usecases/ cada usecase tera : [ service, controller, controller.test,]",
],

# fluxos
1. service:
  1. nunca sirva um service direto, entregue-o a camada  controller para futuras regras pra ter este serviço e sirva entregue sempre o controler