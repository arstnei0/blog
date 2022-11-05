import type { Component } from "solid-js"
import { createSignal, onMount } from "solid-js"
import "$style/mobileNav.css"
import ModeToggleButton from "./ModeToggleButton"
import env from "@env"

const MobileNav: Component<{}> = (props) => {
	const [opened, setOpened] = createSignal(false)
	const toggle = () => {
		setOpened((opened) => !opened)
		if (opened()) {
			document.body.classList.replace("nav-inactive", "nav-active")
		} else {
			document.body.classList.replace("nav-active", "nav-inactive")
		}
	}

	const [page, setPage] = createSignal<string>("")

	onMount(() => {
		setPage(location.pathname)
	})

	return env("nav", (t) => (
		<>
			<div class="nav-but-wrap">
				<div class="menu-icon hover-target" onClick={toggle}>
					<span class="menu-icon__line menu-icon__line-left"></span>
					<span class="menu-icon__line"></span>
					<span class="menu-icon__line menu-icon__line-right"></span>
				</div>
			</div>

			<div class="nav">
				<div class="nav__content">
					<ul class="nav__list">
						<li
							classList={
								page() === "/"
									? {
											"active-nav": true,
											"nav__list-item": true,
									  }
									: { "nav__list-item": true }
							}
						>
							<a href="/" class="hover-target">
								{t("home")}
							</a>
						</li>

						<li
							classList={
								page() === "/about"
									? {
											"active-nav": true,
											"nav__list-item": true,
									  }
									: { "nav__list-item": true }
							}
						>
							<a href="/about" class="hover-target">
								{t("about")}
							</a>
						</li>

						<li
							classList={
								page() === "/projects"
									? {
											"active-nav": true,
											"nav__list-item": true,
									  }
									: { "nav__list-item": true }
							}
						>
							<a href="/projects" class="hover-target">
								{t("projects")}
							</a>
						</li>

						<li
							classList={
								page() === "/blog" ||
								page() === "/archive" ||
								page().startsWith("/post")
									? {
											"active-nav": true,
											"nav__list-item": true,
									  }
									: { "nav__list-item": true }
							}
						>
							<a href="/blog" class="hover-target">
								{t("blog")}
							</a>
						</li>

						<div id="nav-icon-container">
							<a
								aria-label="RSS Feed"
								class="nav-icon opacity-effect-reversed"
								id="rss-ico"
								href="/rss.xml"
							>
								<svg
									width="25px"
									height="25px"
									viewBox="0 0 24 24"
								>
									<circle
										cx="6.18"
										cy="17.82"
										r="2.18"
										fill="currentColor"
									/>
									<path
										fill="currentColor"
										d="M5.59 10.23c-.84-.14-1.59.55-1.59 1.4c0 .71.53 1.28 1.23 1.4c2.92.51 5.22 2.82 5.74 5.74c.12.7.69 1.23 1.4 1.23c.85 0 1.54-.75 1.41-1.59a9.894 9.894 0 0 0-8.19-8.18zm-.03-5.71C4.73 4.43 4 5.1 4 5.93c0 .73.55 1.33 1.27 1.4c6.01.6 10.79 5.38 11.39 11.39c.07.73.67 1.28 1.4 1.28c.84 0 1.5-.73 1.42-1.56c-.73-7.34-6.57-13.19-13.92-13.92z"
									/>
								</svg>
							</a>
							<a
								aria-label="My Github"
								class="nav-icon opacity-effect-reversed"
								id="gh"
								target="_blank"
								href="https://github.com/zihan-ch"
							>
								<svg
									viewBox="0 0 24 24"
									display="inline-block"
									height="25px"
									width="25px"
									vertical-align="text-bottom"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill="currentColor"
										d="M10.07 20.503a1 1 0 0 0-1.18-.983c-1.31.24-2.963.276-3.402-.958a5.708 5.708 0 0 0-1.837-2.415a1.2 1.2 0 0 1-.167-.11a1 1 0 0 0-.93-.645h-.005a1 1 0 0 0-1 .995c-.004.815.81 1.338 1.141 1.514a4.44 4.44 0 0 1 .924 1.36c.365 1.023 1.423 2.576 4.466 2.376l.003.098l.004.268a1 1 0 0 0 2 0l-.005-.318c-.005-.19-.012-.464-.012-1.182ZM20.737 5.377a5.39 5.39 0 0 0 .09-.42a6.278 6.278 0 0 0-.408-3.293a1.002 1.002 0 0 0-.615-.58c-.356-.12-1.67-.357-4.184 1.25a13.87 13.87 0 0 0-6.354 0C6.762.75 5.455.966 5.102 1.079a.997.997 0 0 0-.631.584a6.3 6.3 0 0 0-.404 3.357c.025.127.051.246.079.354a6.27 6.27 0 0 0-1.256 3.83a8.422 8.422 0 0 0 .043.921c.334 4.603 3.334 5.984 5.424 6.459a4.591 4.591 0 0 0-.118.4a1 1 0 0 0 1.942.479a1.678 1.678 0 0 1 .468-.878a1 1 0 0 0-.546-1.745c-3.454-.395-4.954-1.802-5.18-4.899a6.61 6.61 0 0 1-.033-.738a4.258 4.258 0 0 1 .92-2.713a3.022 3.022 0 0 1 .195-.231a1 1 0 0 0 .188-1.025a3.388 3.388 0 0 1-.155-.555a4.094 4.094 0 0 1 .079-1.616a7.543 7.543 0 0 1 2.415 1.18a1.009 1.009 0 0 0 .827.133a11.777 11.777 0 0 1 6.173.001a1.005 1.005 0 0 0 .83-.138a7.572 7.572 0 0 1 2.406-1.19a4.04 4.04 0 0 1 .087 1.578a3.205 3.205 0 0 1-.169.607a1 1 0 0 0 .188 1.025c.078.087.155.18.224.268A4.122 4.122 0 0 1 20 9.203a7.039 7.039 0 0 1-.038.777c-.22 3.056-1.725 4.464-5.195 4.86a1 1 0 0 0-.546 1.746a1.63 1.63 0 0 1 .466.908a3.06 3.06 0 0 1 .093.82v2.333c-.01.648-.01 1.133-.01 1.356a1 1 0 1 0 2 0c0-.217 0-.692.01-1.34v-2.35a4.881 4.881 0 0 0-.155-1.311a4.256 4.256 0 0 0-.116-.416a6.513 6.513 0 0 0 5.445-6.424A8.697 8.697 0 0 0 22 9.203a6.13 6.13 0 0 0-1.263-3.826Z"
									/>
								</svg>
							</a>
							<a
								aria-label="Search"
								class="nav-icon opacity-effect-reversed"
								id="search"
								href="/search"
							>
								<svg width="32" height="32" viewBox="0 0 24 24">
									<path
										fill="currentColor"
										d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0c.41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"
									/>
								</svg>
							</a>
							<ModeToggleButton></ModeToggleButton>
						</div>
					</ul>
				</div>
			</div>
			{/* </Show> */}
		</>
	))
}

export default MobileNav
