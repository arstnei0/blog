export function getRandomInt(max: number) {
	return Math.floor(Math.random() * max)
}

export function randomChoose<T = any>(list: T[]) {
	return list[getRandomInt(list.length)]
}
