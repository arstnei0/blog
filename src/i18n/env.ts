import t from "@t"

const env = <T = any>(
	base: string,
	func: (translate: typeof t) => T,
) => func(t(base, true))

export default env
