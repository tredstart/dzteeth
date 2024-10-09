import { set_canal_color, set_part_color } from "./state_manager.js";

function options_handler(options, set_color) {
    for (const option of options) {
        option.addEventListener("click", (event) => {
            for (const o of options) {
                o.classList.remove("active");
            }
            event.target.classList.add("active");
            set_color(event.target.value);
        });

        if (option.classList.contains("active")) {
            set_color(option.value);
        }
    }
}

export function configure_options(teeth_options, canals_options) {
    const t_op = document.getElementsByClassName(teeth_options);
    const c_op = document.getElementsByClassName(canals_options);
    if (t_op.length !== 0) {
        options_handler(t_op, set_part_color);
    }

    if (c_op.length !== 0) {
        options_handler(c_op, set_canal_color);
    }
}
