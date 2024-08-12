package partseed_go

import l "github.com/rzjprogramador/Pgm/Pgm/linguagem"

var Array_GO_Hard = l.Array{
	Declarar_Array: `#todo`,

	Modificar_Item: `array1[1] = novoValor `,

	Remover_Item: `#todo`,

	Remover_UltimoItem: `#todo`,
	
	Add_Varios_Items: `#todo`,

	Add_Item_Hard: `array1[1] = 1000  // add valor no array de forma hard : referencia o arrayAlvo e dentro de colchetes a posicao onde deseja inserir o novo item.`,

	Add_Item_Dinamico: `novoArray := append(array1, 30, 40, 50)  // dinamicamente: append( arrayAlvo, dpois quantos items desejar separados por virgula) -- vai devolve um novo array com os items que ja tinha e os add depois da variavel do array alvo`,

	Pegar_Pedaco: `pedaco2items := novoArray[1:3]  // pegar pedacos de arrayAlvo : dentro de [] indique o intervalo de posicoes que deseja pegar`,

	Pegar_PrimeiroItem: `#todo`,

	Pegar_UltimoItem: `
	ultimaPosicaoDoNovoArray := novoArray[len(novoArray)-1]
	`,
}
