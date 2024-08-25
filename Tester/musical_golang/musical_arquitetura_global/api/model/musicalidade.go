package model

// TODO
/*
No_Decorrer_da_frase:
conceito: um acorde cobre o outro só na ultima frase se fecha com CadenciaFechaBloco
se_o_acorde_for_funcaoTonica : é coberto com acorde NaoTonico: Dominante ou SubDominante
na_ultima_Frase_do_Bloco_Usar: CadenciaFechaBloco: []string{ "2_5_1", "3_1", "5_1", "4-5-1"}

Cobertura_NaoTonico: aplicaar: para preparar um reinicio posso_usar: {"subdividir no mesmotempo 7_3com7"}

*/

type Cadencia_Fecha_Options = string

const (
	Fecha_251 Cadencia_Fecha_Options = "Fecha_251"
	Fecha_31  Cadencia_Fecha_Options = "Fecha_31"
	Fecha_51  Cadencia_Fecha_Options = "Fecha_51"
	Fecha_451 Cadencia_Fecha_Options = "Fecha_451"
)
