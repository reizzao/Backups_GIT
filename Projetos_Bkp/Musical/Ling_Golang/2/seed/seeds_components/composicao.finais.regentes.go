package seeds_components

type Final_Regente struct {
	Final_Predominante Vogal
	Final_Viajante     Vogal
	Final_Finalizante  Vogal
}

// seeds

var Finais_A_I_U = Final_Regente{
	Final_Predominante: Vogal_A,
	Final_Viajante:     Vogal_I,
	Final_Finalizante:  Vogal_U,
}
