package linguagem

var LinguagemDart = Linguagem{
	Nome: "Dart",
	Arquivos: Arquivos{
		RodarArquivo: `dart <endereco/arquivo.dart>`,
	}, // Arquivos

	EntradaSaidaDadosByLinguagem: EntradaSaidaDadosByLinguagem{
		TemEscopoDeEntradaESaidaPrincipal: true,
		QualEscopoDeEntradaESaidaPrincipal: "funcao main()",
	},  // EntradaSaidaDadosByLinguagem

	ComandosDeSaida: ComandosDeSaida{
		ViaConsole: `print()`,
	}, // ComandosDeSaida

	RegrasDaLinguagem: RegrasDaLinguagem{
		ObrigatorioPontoeVirgulaACadaSentenca: true,
	}, // RegrasDaLinguagem


	TiposDeDados: TiposDeDados{
		OrigemTiposDaLinguagem: "class Static",
		DescobrirTipo: AcessoOrigemStatica{
			AcessarMembroDeForma: ".desencadeavel",
			Membro: `.runtimeType`,
			ExemploUso: `alvo.runtimeType`,
		},
		TipoPrimitivo: TipoPrimitivo{

			Boleano: ModelTipo{
				Nome: "Boleano",
				TemNaLinguagem: true,
				ModeladorDeOrigem: "class Static",
				Keyword: "bool",
				Representacao_PodeInstanciar: []string{"true" , "false",},
				ValorDefault_SeNadaForPassado: "false",
				Exemplo: `bool boleana = true`,
			}, // Boleano

			Texto: ModelTipoTexto{
				Keyword: "String",
				Representacao_PodeInstanciar: "String",
				ValorDefault_SeNadaForPassado: "null",
				Exemplo: `string texto = "Meu texto"`,

			}, // ModelTipoTexto

		}, // TipoPrimitivo


	}, // TiposDeDados
}