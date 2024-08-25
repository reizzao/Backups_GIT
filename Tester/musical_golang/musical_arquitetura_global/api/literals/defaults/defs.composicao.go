package defaults

import "github.com/reizzao/musical/api/model"

var DefaultComposicao = model.Defaults{

	All_Estrofes: []string{
		"conecte o ouvinte",
		"seja direto sem duvidas nos blocos",
		",faca o entender sobre o sentimento central emocao neste proprio bloco",
		"use sacadas padrao na resposta inicio",
		"seja curto e objetivo em cada estrofe",
		"faça estrofes desconexas independentes",
		"faz uma parte resolve e nao deixe duvida pra proxima",
		"",
	},

	Evitar: []string{
		"nao_gere_perguntas",
		"Palavras_duvidas:  POR ISSO (é por isso o que?)",
		"Nao conte historias cronologicas passo a passo:: isso é antigo.",
		"nao deixe duvida pra proxima estrofe resolva cada uma na sua.",
	},

	Def_Tempo_Verbal_Master: model.Presente,

	Estrofe_A: model.Default_Estrofes_Props{
		Conceito: "tem que ser igual sentimento central tonal se esse for alegre -> fale tambem de alegria , se for triste fale de naoAlegre.",

		Gatilhos: []string{"Frases_Sacada", "Tempos_Verbais_Presente_passado_Futuro", "nao use frases subjetivas viajantes ao menos que faca entender.", "verbo ele ou person faz algo", "Emocao_Consequencia_Dela"},

		Opcoes: model.OpcoesEstrofes{
			Reinicio: []string{"DUVIDA: MAS , TALVES", "ACAO: JÁ ,ATÉ, FAZ <VERBO>", "APONTAR: A, DA SUA, E A <ALGO>, TO, SABE O QUE,AQUELE, QUE EU, SÓ ME, NOS", "MUDANCA: TUDO TEM | FAZ, JÁ, ENTÃO <VERBO>,<VERBO>, OUTRA VEZ, FICA A <ALGO>, sentimento consequencia deste sentimento", "", "", "", "", "", "", "", ""},

			Fechar_Bloco: []string{""},
		},
	},

	Estrofe_B: model.Default_Estrofes_Props{
		Conceito: "",

		Gatilhos: []string{"declaracao", "minha percepção", "uma lembranca", ""},

		Opcoes: model.OpcoesEstrofes{
			Reinicio: []string{},

			Fechar_Bloco: []string{},
		},
	},

	Estrofe_C: model.Default_Estrofes_Props{
		Conceito: "",

		Gatilhos: []string{"Promessas", "me explicar", "minha reação", "algo que me faz lembrar", "o que resta", "estado atual da emoção escolhida"},

		Opcoes: model.OpcoesEstrofes{
			Reinicio: []string{"Sacada", "APONTAR", "o que vou fazer pra melhorar", "Apelo", "Usar Armas que tem", "desenrolar Situacao", "Achar solucao", "COMO", "ENTAO", "SENTIMENTO<VERBO>", "APONTAR: AQUELE", "E OUTRA VEZ"},

			Fechar_Bloco: []string{""},
		},
	},

	Estrofe_Refrao: model.Default_Estrofes_Props{
		Conceito: "entregar o ouro da emmocao do sentimento central tonal escolhido, conectar a primeira e ultima frase no refrao pra gerar loop ex: Pendência - Gusttavo Lima, AI QUE MORA O PERIGO- Arranhão : Henrique e Juliano,refrao loop universal funcionar sozinho em loop, fazer contexto com outras estrofes mas funcionando sozinho.",

		Gatilhos: []string{"entao esse personagem quer?", "Atitude", "GModo de cantar : Gritado a Frase de chamada, E Cadenciado suave o reinicio para amortizar a voz e terminar", "frase de chamada espacada gritada pense os ouvintes tem que cantar levantando somente 1 braco pro alto", "joga pro publico", "verbo de mudanca", "reviravolta", "viajar no imaginario", "Sacada", "Verbo", "Ação", "Como estou agindo"},

		Opcoes: model.OpcoesEstrofes{
			Reinicio: []string{"", "", "", "", "", "", "", "", "", "", "", ""},

			Fechar_Bloco: []string{"Declaracao"},
		},
	},

	Estrofe_RefraoExtra: model.Default_Estrofes_Props{
		Conceito: "",

		Gatilhos: []string{"", "", ""},

		Opcoes: model.OpcoesEstrofes{
			Reinicio: []string{"", "", "", "", "", "", "", "", "", "", "", ""},

			Fechar_Bloco: []string{""},
		},
	},
}
