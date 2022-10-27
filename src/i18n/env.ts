import t from "@t"

const env = <T = any>(base: string, func: (translate: typeof t) => T, l?:string) => func(t(base, true, l))

export default env