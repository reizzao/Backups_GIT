package linguagem

var Linguagem_Basica_Universal = Linguagem{
	Nome: "Linguagem_Basica_Universal",
	Arquivos: Arquivos{
		RodarArquivo: `deno run <endereco/arquivo.extensao>`,
	}, // Arquivos

	EntradaSaidaDadosByLinguagem: EntradaSaidaDadosByLinguagem{
		TemEscopoDeEntradaESaidaPrincipal: false,
		LocalArquivoDeEntradaESaidaPrincipal: "na raiz do projeto",
		ArquivoDeEntradaESaidaPrincipal: "main.extensao",
		QualPacoteNameSpaceDeEntradaESaidaPrincipal: "NAO_TEM",
		QualEscopoDeEntradaESaidaPrincipal: "NAO_TEM",
	},  // EntradaSaidaDadosByLinguagem

	ComandosDeSaida: ComandosDeSaida{
		ViaConsole: `console.log()`,
	}, // ComandosDeSaida

	RegrasDaLinguagem: RegrasDaLinguagem{
		ObrigatorioPontoeVirgulaACadaSentenca: false,
	}, // RegrasDaLinguagem


	TiposDeDados: TiposDeDados{
		OrigemTiposDaLinguagem: "class",
		DescobrirTipo: AcessoOrigemStatica{
			AcessarMembroDeForma: ".desencadeavel",
			Membro: `#TODO`,
			ExemploUso: `#TODO`,
		},
		TipoPrimitivo: TipoPrimitivo{

			Boleano: ModelTipo{
				Nome: "Boleano",
				TemNaLinguagem: true,
				ModeladorDeOrigem: "class",
				Keyword: "bool",
				Representacao_PodeInstanciar: []string{"true" , "false",},
				ValorDefault_SeNadaForPassado: "false",
				CriarNovo: "TODO",
				EditarNovo: "TODO",
				Exemplo: `bool boleana = true`,
			}, // Boleano

			Texto: ModelTipoTexto{
				Keyword: "string",
				Representacao_PodeInstanciar: "string",
				ValorDefault_SeNadaForPassado: "string vazia sem espaço nem nada dentro",
				CriarNovo: "TODO",
				EditarNovo: "TODO",
				Exemplo: `
				// exemplo longo 
				var texto = "Meu texto"
				
				// exemplo curto dentro de escopo
				texto2 := "meu texto"
				`,

				AcoesTexto: AcoesTexto{
					PularLinhas: `usar as crazes ao invez de aspas duplas exemplo ... o texto dentro nao é interpretado..pode pular linhas nao precisa escapar caracteres especiais.`,
					Interpolar_Variavel_Em_Texto: `usar o pacote fmt ... funcao >>> Sprintf("%#v", variavel)`,
					Concatenar_Variaveis_Com_Texto: `"texto" + variavel`,

					Caracteres_Especiais: []string{"#TODO", "#VEM_DE_UNIVERSAL"},

					Interpolar_ObjetoFuncao_Em_Texto: `"texto" + objeto.campo`,

					EscaparCaracteresEspeciaisEDeConflito: `use barra invertida antes do caractere #UNIVERSAL`,
				},

			}, // ModelTipoTexto

			CaractereUnico: ModelTipo{
				Nome: "Caractere Unico",
				Significado: "apenas uma letra",
				TemNaLinguagem: true,
				Conceito: "dentro de aspas simples um caractere unico é um char",
				ModeladorDeOrigem: "class",
				Keyword: "#NAO_TEM",
				Representacao_PodeInstanciar: []string{"'F' qualquer caractere unico dentro de obrigatoria aspas simples"},
				ValorDefault_SeNadaForPassado: "string vazia sem espaco '' com aspas simples.",
				CriarNovo: "TODO",
				EditarNovo: "TODO",
				Exemplo: `char caractereF = 'f' `,
			},// CaractereUnico

		Numeros: ModelTipoNumeros{
			QualquerNumero: ModelTipo{
				Nome: "QualquerNumero",
				Significado: "qualquer tipo de numero.",
				TemNaLinguagem: false,
				Conceito: "#NAO_TEM",
				ModeladorDeOrigem: "#NAO_TEM",
				Keyword: "#NAO_TEM",
				Representacao_PodeInstanciar: []string{"#NAO_TEM", },
				ValorDefault_SeNadaForPassado: "#NAO_TEM",
				CriarNovo: "TODO",
				EditarNovo: "TODO",
				Exemplo: `/"#NAO_TEM"`,
				}, // QualquerNumero

			NumeroInteiro: ModelTipo{
				Nome: "NumeroInteiro",
				Significado: "numero sem quebras.",
				TemNaLinguagem: true,
				Conceito: "numero inteiro sem pontos flutuantes.",
				ModeladorDeOrigem: "class",
				Keyword: "<int> para positivoOuNegativo, <uint> somente para positivos ",
				Representacao_PodeInstanciar: []string{"numero Inteiro sem casas decimais",},
				ValorDefault_SeNadaForPassado: "0",
				CriarNovo: "TODO",
				EditarNovo: "TODO",
				Exemplo: `uint idade = 45`,
			}, // NumeroInteiro

			NumeroDecimal: ModelTipo{
				Nome: "NumeroDecimal",
				Significado: "numero com ponto flutuante",
				TemNaLinguagem: true,
				Conceito: "Numero com ponto flutuante.",
				ModeladorDeOrigem: "class",
				Keyword: "float64 ou float32 ou inferido com a foquinha := ",
				Representacao_PodeInstanciar: []string{"numero Decimal com casas decimais separadas por . PONTO", },
				ValorDefault_SeNadaForPassado: "0",
				CriarNovo: "TODO",
				EditarNovo: "TODO",
				Exemplo: `// exemplo
				numDecimal1 := 10.77 
				var numDecimal2 = 10.77
				var numDecimal3 float64 = 10.77
				fmt.Println(numDecimal1, numDecimal2, numDecimal3)`,
			},// NumeroDecimal

		}, // Numeros

		}, // TipoPrimitivo

		TipoParaModeladores: TipoParaModeladores{
			ModeladorNovoTipoPersonalizado: ModelTipo{
				Nome: "ModeladorNovoTipoPersonalizado",
				Significado: "Modelador Para Novo Tipo Personalizado",
				TemNaLinguagem: true,
				Conceito: "class seria em outras linguagens uma class static que gera objetos.",
				ModeladorDeOrigem: "class static",
				Keyword: "class",
				Representacao_PodeInstanciar: []string{"objeto", },
				ValorDefault_SeNadaForPassado: "#NAO_TEM",
				CriarNovo: "TODO",
				EditarNovo: "TODO",
				Exemplo: `type Entidade class { campo tipo }`,
			},
		},// TipoParaModeladores

		TipoParaVariaveis: TipoParaVariaveis{
			LivreParaReescrita: ModelTipo{
				Nome: "LivreParaReescrita",
				Significado: "apos atribuicao pode ser reescrita",
				TemNaLinguagem: true,
				Conceito: "apos atribuicao pode ser reescrita.",
				ModeladorDeOrigem: "class",
				Keyword: "var",
				Representacao_PodeInstanciar: []string{"qualquer tipo", },
				ValorDefault_SeNadaForPassado: "#NAO_TEM",
				CriarNovo: "TODO",
				EditarNovo: "TODO",
				Exemplo: `
				var foo = "foo"
				foo = "ddd"
				fmt	.Println(foo)"
				`,
				},

				ConstanteNaoPodeSerReescrita: ModelTipo{
					Nome: "ConstanteNaoPodeSerReescrita",
					Significado: "apos atribuicao NAO pode ser reescrita",
					TemNaLinguagem: true,
					Conceito: "apos atribuicao NAO pode ser reescrita.",
					ModeladorDeOrigem: "class",
					Keyword: "const",
					Representacao_PodeInstanciar: []string{"qualquer tipo", },
					ValorDefault_SeNadaForPassado: "#NAO_TEM",
					CriarNovo: "TODO",
					EditarNovo: "https://medium.com/technofunnel/creating-constant-in-golang-c958c1821c20",
					Exemplo: `
					const foo2 = "foo"
					// foo2 = "ddd" // NAO PODE REATRIBUIR UMA CONSTANTE
					console.log(foo)
					`,
					},
		},
		


	}, // TiposDeDados
}
