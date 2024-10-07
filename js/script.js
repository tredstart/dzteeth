import { configure_options } from "./helpers.js";
import { render_adult_teeth, render_child_teeth } from "./renderers.js";
import { init_global_state } from "./state_manager.js";

self.onload = function () {
    console.log("we ball");
    init_global_state();
    configure_options();
    const adult_face = render_adult_teeth();
    const container = document.createElement("div");
    container.style.width = "50%";
    container.appendChild(adult_face);
    document.body.appendChild(container);

    const child_face = render_child_teeth();
    const c = document.createElement("div");
    c.style.width = "50%";
    c.appendChild(child_face);
    document.body.appendChild(c);
};
