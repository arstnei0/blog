module.exports = {
	// plugins: [require.resolve("prettier-plugin-astro")],
	plugins: ["./node_modules/prettier-plugin-astro"],
	overrides: [
		{
			files: "**/*.astro",
			options: {
				parser: "astro",
			},
		},
	],
	tabWidth: 4,
	useTabs: true,
	semi: false,
}
