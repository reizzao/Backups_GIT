package partseed_universal

import u "github.com/rzjprogramador/Pgm/Pgm/universal"

var Nomear_Variavel = u.Nomeacao{
	Contexto: u.NovoConceito{
		Titulo:    "Nomear_Variavel",
		Conceito:  []string{"o que ela guarda?"},
		Exemplos:  []string{""},
		Tutoriais: []u.Tutoriais{{By: "", Link: ""}},
	},
}

var Nomear_Parametro = u.Nomeacao{
	Contexto: u.NovoConceito{
		Titulo:    "Nomear_Parametro",
		Conceito:  []string{"proposito + Entidade", "VAI RECEBER UM?"},
		Exemplos:  []string{"( newUser ) "},
		Tutoriais: []u.Tutoriais{{By: "", Link: ""}},
	},
}

var Nomear_Input_Request = u.Nomeacao{
	Contexto: u.NovoConceito{
		Titulo:    "Nomear_Input_Request",
		Conceito:  []string{"proposito + Entidade + Request", "VOU ENTREGAR UM?"},
		Exemplos:  []string{"newUserRequest1"},
		Tutoriais: []u.Tutoriais{{By: "", Link: ""}},
	},
}

var Nomear_Funcao = u.Nomeacao{
	Contexto: u.NovoConceito{
		Titulo:    "Nomear_Funcao",
		Conceito:  []string{"OQueFaz + Entidade"},
		Exemplos:  []string{"createUser ()"},
		Tutoriais: []u.Tutoriais{{By: "", Link: ""}},
	},
}

var Nomear_Metodo = u.Nomeacao{
	Contexto: u.NovoConceito{
		Titulo:    "Nomear_Metodo",
		Conceito:  []string{"SóOQueFaz"},
		Exemplos:  []string{"objeto . create ()"},
		Tutoriais: []u.Tutoriais{{By: "", Link: ""}},
	},
}

var Nomear_Molde = u.Nomeacao{
	Contexto: u.NovoConceito{
		Titulo:    "Nomear_Molde",
		Conceito:  []string{"Entidade + Proposito + OQue vai Variar"},
		Exemplos:  []string{"UserRepositoryMemory"},
		Tutoriais: []u.Tutoriais{{By: "", Link: ""}},
	},
}
