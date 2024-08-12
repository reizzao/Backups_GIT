package example

import "errors"

func Soma(x int, y int) (int, error) {
	res := x + y
	if res > 10 {
		return 0, errors.New("Ops.. resultado maior que a regra que é 10")
	}
	return res, nil
}
