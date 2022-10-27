import lang, { locale, defaultLocale } from "./lang"

const t = (base: string, bind = false, l?: string) => typeof bind === 'boolean' && bind ? (
	(key: string) => (
		key.split(".").reduce((prev, current) => prev[current], lang[l || locale][base]) ||
		key.split(".").reduce((prev, current) => prev[current], lang[defaultLocale][base]) ||
		"unknown"
	)
) : (
	base.split(".").reduce((prev, current) => prev[current], lang[l || locale]) ||
	base.split(".").reduce((prev, current) => prev[current], lang[defaultLocale]) ||
	"unknown"
)

export default t
