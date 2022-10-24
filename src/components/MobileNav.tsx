import type { Component } from "solid-js";
import '$style/mobileNav.css'

const MobileNav: Component<{}> = (props) => {


    return <>
        <label for="check" class="bar">
            <input id="check" type="checkbox"></input>

            <span class="top"></span>
            <span class="middle"></span>
            <span class="bottom"></span>
        </label>
    </>
}

export default MobileNav