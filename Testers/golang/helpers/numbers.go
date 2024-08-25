package helpers

// import "fmt"

func MinAge(age int, min int) int {
	if age < min {
		return 0
		// todo: fazer explodir mensagem de erro
	}
	return age
}

// func MinAge(age int, min int) (int, string) {
// 	if age < min {
// 		return 0, fmt.Sprintf("ops menor que %d", min)
// 	}
// 	return age, ""
// }
