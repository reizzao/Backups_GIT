# ANOTACOES

### ANOTACOES PERSONALIZADAS

anotacoes_de_configuracao : [
  - definir o alvo se sera anotacao para classe(Type) ou metodo ou atributo com <@Target(TYPE)> // parece nao precisar mais o alvo.

  - definir quando sera executado em runTime ou outro com : <@Retention(RetentionPolicy.RUNTIME)>
]

> abaixo as anotacoes de configuracao insiro as que sera exportadas para uso.

---
### Receber argumento na Anotacao Personalizada
`
// define a annotation que recebera um argumento do tipo assinalado abaixo com o campo value que comeca por default vazio

  @AliasFor(annotation = RequestMapping.class)
  String value() default "";
`

---

> Para Dominio : classe >> by lombok
`
import lombok.Setter;
import lombok.Getter;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

// @Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
`