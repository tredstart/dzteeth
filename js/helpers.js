import { set_fill_color } from "./state_manager.js";

export function configure_options() {
    const options = document.getElementsByClassName("illness-option");
    if (options.length !== 0) {
        for (const option of options) {
            option.addEventListener("click", (event) => {
                for (const o of options) {
                    o.classList.remove("active");
                }
                event.target.classList.add("active");
                set_fill_color(event.target.value);
            });

            console.log(option);
            if (option.classList.contains("active")) {
                set_fill_color(option.value);
            }
        }
    }
}
