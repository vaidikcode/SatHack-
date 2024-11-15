package main

// we are currently using a static value of ef but we plan to fetch this dinamically through electricity map
func CarbonEmissionofSingleBlock() float64 {
	ef := 0.1
	value := (ef * 0.15) + (0.01 * 750 * 10)
	return value
}
