package seeds_components

type Vogal struct {
	Letra      string
	VogalProps VogalProps
}

type VogalProps = int

const (
	dominadora VogalProps = iota
	viajante
)

// seeds

var Vogal_A = Vogal{
	Letra:      "A",
	VogalProps: 1,
}
var Vogal_E = Vogal{
	Letra:      "E",
	VogalProps: 2,
}
var Vogal_I = Vogal{
	Letra:      "I",
	VogalProps: 2,
}
var Vogal_O = Vogal{
	Letra:      "O",
	VogalProps: 1,
}
var Vogal_U = Vogal{
	Letra:      "U",
	VogalProps: 2,
}
