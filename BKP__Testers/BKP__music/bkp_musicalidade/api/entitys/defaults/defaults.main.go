package defaults

var DefaultConceitosMainInputDefault = ConceitosDefault{
	FrasesConceitos: FrasesConceitos{
		Metricas: Metrica_by_SubFraseProps{
			SilabasPoeticas_by_SubFrase: METRICA_2,
			PulsosFortes_by_Frase:       UM,
		},
		Frases: FrasesPossiveis{
			Frase_1_Fato:         FrasesPossiveisProps{Oquefaz: "diz o Fato"},
			Frase_2_RespostaFato: FrasesPossiveisProps{Oquefaz: "a 2° responde_MataDuvida_da_Primeira (OQUE, PORQUE,PRAQUE)"},
			Frase_3_Conclusao:    FrasesPossiveisProps{Oquefaz: "a 3° É a Conclusao (RESULTADO, DESFECHO SEM ENTREGAR OURO o TemaObjetivoDosEnvolvido_PrimeiraRefrao )"},
		},
	},
}
