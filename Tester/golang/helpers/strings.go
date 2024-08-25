package helpers

import "fmt"

// a acao foi criada para string qualquer string
func MinString(n string, min int) string {
	if len(n) < min {
		return fmt.Sprintf("ops menor que %d", min)
	}
	return n
}