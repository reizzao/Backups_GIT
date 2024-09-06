package defaults

type DefaultMain struct {
	Conceitos ConceitosDefault
}
type ConceitosDefault struct {
	FrasesConceitos FrasesConceitos
}
type FrasesConceitos struct {
	Metricas Metrica_by_SubFraseProps
	Frases   FrasesPossiveis
}
type Metrica_by_SubFraseProps struct {
	SilabasPoeticas_by_SubFrase Metrica_SilabasPoeticas_by_SubFraseOptions
	PulsosFortes_by_Frase       PulsosFortes_by_FraseOptions
}
type FrasesPossiveis struct {
	Frase_1_Fato         FrasesPossiveisProps
	Frase_2_RespostaFato FrasesPossiveisProps
	Frase_3_Conclusao    FrasesPossiveisProps
}
type FrasesPossiveisProps struct {
	Oquefaz string
}
