package tester

import (
	"fmt"

	"github.com/rzjprogramador/Pgm/Pgm/universal/literals/seed_universal"
)

func UniversalPGM_Tester() {
	fmt.Println(
		seed_universal.NomePastaGuardaOutrasPastas(),
		seed_universal.NomePastaDeArquivosSoltos(),
		seed_universal.QuebraDeLinhas(),
		seed_universal.Implementacoes(),
	)
}
