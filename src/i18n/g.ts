import { locale } from "@lang"

const g = <T = string>(translation: Record<string, T>, l?:string): T => translation[l || locale]

export default g