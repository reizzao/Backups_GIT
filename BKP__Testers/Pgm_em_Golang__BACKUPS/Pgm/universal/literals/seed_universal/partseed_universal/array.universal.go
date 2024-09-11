package partseed_universal

import "github.com/rzjprogramador/Pgm/Pgm/universal"

var Array_Universal_Hard = universal.Array_Universal{
	Declarar_Array: `const nomeArray = [ item, item, item ]`,

	Modificar_Item: `array[ posicao ] = novoValor `,

	Remover_Item: `#todo`,

	Remover_UltimoItem: `#todo`,

	Add_Item_Hard: `array[ posicao ] = novoItem`,
	
	Add_Varios_Items: `#todo`,

	Add_Item_Dinamico: `array.push( novoItem )`,

	Pegar_Pedaco: `#todo`,

	Pegar_PrimeiroItem: `const primeiroItem = array[0]
	// pegarPrimeiro: é sempre pegando a posicao 0 que é onde as posicoes comecam para array.`,

	Pegar_UltimoItem: `
	Exemplo:
	const ultimoItem = array[array.length -1]
	explicacao:
	pegar_a_Ultima: será (comprimento da fatia - 1) arrayAlvo[ arrayAlvo.length -1] // obs: no arrayalvo coloca a posicao desejada que é o tamanho deste proprio array -1.
	`,
}
