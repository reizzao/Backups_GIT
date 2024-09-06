package defaults

var DefaultComposicao = Estrofes_ConceitosDefaults{

	All_Estrofes: []string{
		"conecte o ouvinte",
		"seja direto sem duvidas nos blocos",
		",faca o entender sobre o sentimento central emocao neste proprio bloco",
		"use sacadas padrao na resposta inicio",
		"seja curto e objetivo em cada estrofe",
		"faça estrofes desconexas independentes",
		"faz uma parte resolve e nao deixe duvida pra proxima",
		"TODO",
	},

	Evitar: []string{
		"nao_gere_perguntas",
		"Palavras_duvidas:  POR ISSO (é por isso o que?)",
		"Nao conte historias cronologicas passo a passo:: isso é antigo.",
		"nao deixe duvida pra proxima estrofe resolva cada uma na sua.",
	},

	Def_Tempo_Verbal_Master: Presente,

	Estrofe_A: Estrofes_Default_Props{
		Conceito: "tem que ser igual sentimento central tonal se esse for alegre -> fale tambem de alegria , se for triste fale de naoAlegre.",

		Gatilhos: []string{"Frases_Sacada", "Tempos_Verbais_Presente_passado_Futuro", "nao use frases subjetivas viajantes ao menos que faca entender.", "verbo ele ou person faz algo", "Emocao_Consequencia_Dela"},

		Opcoes: OpcoesEstrofes{
			Reinicio: []string{"DUVIDA: MAS , TALVES", "ACAO: JÁ ,ATÉ, FAZ <VERBO>", "APONTAR: A, DA SUA, E A <ALGO>, TO, SABE O QUE,AQUELE, QUE EU, SÓ ME, NOS", "MUDANCA: TUDO TEM | FAZ, JÁ, ENTÃO <VERBO>,<VERBO>, OUTRA VEZ, FICA A <ALGO>, sentimento consequencia deste sentimento", "TODO", "TODO", "TODO", "TODO", "TODO", "TODO", "TODO", "TODO"},

			Fechar_Bloco: []string{"TODO"},
		},
	},

	Estrofe_A2: Estrofes_Default_Props{
		Conceito: "TODO",

		Gatilhos: []string{"declaracao", "minha percepção", "uma lembranca", "TODO"},

		Opcoes: OpcoesEstrofes{
			Reinicio: []string{"TODO"},

			Fechar_Bloco: []string{"TODO"},
		},
	},

	Estrofe_B: Estrofes_Default_Props{
		Conceito: "TODO",

		Gatilhos: []string{"declaracao", "minha percepção", "uma lembranca", "TODO"},

		Opcoes: OpcoesEstrofes{
			Reinicio: []string{"TODO"},

			Fechar_Bloco: []string{"TODO"},
		},
	},

	Estrofe_Ponte: Estrofes_Default_Props{
		Conceito: "TODO",

		Gatilhos: []string{"Promessas", "me explicar", "minha reação", "algo que me faz lembrar", "o que resta", "estado atual da emoção escolhida"},

		Opcoes: OpcoesEstrofes{
			Reinicio: []string{"Sacada", "APONTAR", "o que vou fazer pra melhorar", "Apelo", "Usar Armas que tem", "desenrolar Situacao", "Achar solucao", "COMO", "ENTAO", "SENTIMENTO<VERBO>", "APONTAR: AQUELE", "E OUTRA VEZ"},

			Fechar_Bloco: []string{"TODO"},
		},
	},

	Estrofe_Refrao: Estrofes_Default_Props{
		Conceito: "entregar o ouro da emmocao do sentimento central tonal escolhido, conectar a primeira e ultima frase no refrao pra gerar loop ex: Pendência - Gusttavo Lima, AI QUE MORA O PERIGO- Arranhão : Henrique e Juliano,refrao loop universal funcionar sozinho em loop, fazer contexto com outras estrofes mas funcionando sozinho.",

		Gatilhos: []string{"entao esse personagem quer?", "Atitude", "GModo de cantar : Gritado a Frase de chamada, E Cadenciado suave o reinicio para amortizar a voz e terminar", "frase de chamada espacada gritada pense os ouvintes tem que cantar levantando somente 1 braco pro alto", "joga pro publico", "verbo de mudanca", "reviravolta", "viajar no imaginario", "Sacada", "Verbo", "Ação", "Como estou agindo"},

		Opcoes: OpcoesEstrofes{
			Reinicio: []string{"TODO", "TODO", "TODO", "TODO", "TODO", "TODO", "TODO", "TODO", "TODO", "TODO", "TODO", "TODO"},

			Fechar_Bloco: []string{"Declaracao"},
		},
	},

	Estrofe_Coro: Estrofes_Default_Props{
		Conceito: "TODO",

		Gatilhos: []string{"TODO", "TODO", "TODO"},

		Opcoes: OpcoesEstrofes{
			Reinicio: []string{"TODO", "TODO", "TODO", "TODO", "TODO", "TODO", "TODO", "TODO", "TODO", "TODO", "TODO", "TODO"},

			Fechar_Bloco: []string{"TODO"},
		},
	},
}
