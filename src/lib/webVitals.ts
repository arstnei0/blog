import { getCLS, getFCP, getFID, getLCP, getTTFB, Metric } from "web-vitals"

const vitalsUrl = "https://vitals.vercel-analytics.com/v1/vitals"

function getConnectionSpeed() {
	return "connection" in navigator &&
		(navigator as any)["connection"] &&
		"effectiveType" in (navigator as any)["connection"]
		? (navigator as any)["connection"]["effectiveType"]
		: ""
}

function sendToAnalytics(metric: Metric, options: Options) {
	const page = Object.entries(options.params).reduce(
		(acc, [key, value]) => acc.replace(value as string, `[${key}]`),
		options.path
	)

	const body = {
		dsn: options.analyticsId, // qPgJqYH9LQX5o31Ormk8iWhCxZO
		id: metric.id, // v2-1653884975443-1839479248192
		page, // /blog/[slug]
        // page: options.page,
		href: location.href, // https://my-app.vercel.app/blog/my-test
		event_name: metric.name, // TTFB
		value: metric.value.toString(), // 60.20000000298023
		speed: getConnectionSpeed(), // 4g
	}

	if (options.debug) {
		console.log("[Analytics]", metric.name, JSON.stringify(body, null, 2))
	}

	const blob = new Blob([new URLSearchParams(body).toString()], {
		// This content type is necessary for `sendBeacon`
		type: "application/x-www-form-urlencoded",
	})

	if (navigator.sendBeacon) {
		navigator.sendBeacon(vitalsUrl, blob)
	} else
		fetch(vitalsUrl, {
			body: blob,
			method: "POST",
			credentials: "omit",
			keepalive: true,
		})
}

export interface Options {
	// page: string
	path: string
	params: Record<string, string>
    analyticsId: string
	debug: boolean
}

export function webVitals(options: Options) {
	try {
		getFID((metric) => sendToAnalytics(metric, options))
		getTTFB((metric) => sendToAnalytics(metric, options))
		getLCP((metric) => sendToAnalytics(metric, options))
		getCLS((metric) => sendToAnalytics(metric, options))
		getFCP((metric) => sendToAnalytics(metric, options))
	} catch (err) {
		console.error("[Analytics]", err)
	}
}

export default webVitals