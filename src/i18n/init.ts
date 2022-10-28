import { locale } from "@lang"
import dayjs from "dayjs"

const initLocale = () => {
	if (locale === "cn") {
		import("dayjs/locale/zh-cn")

		dayjs.locale("zh-cn")
	}
}

export default initLocale
