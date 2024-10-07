import { configure_options } from "./helpers.js";
import render_adult_teeth from "./renderers.js";
import { init_global_state } from "./state_manager.js";

self.onload = function () {
    console.log("we ball");
    init_global_state();
    configure_options();
    const face = render_adult_teeth();
    const container = document.createElement("div");
    container.style.width = "50%";
    container.appendChild(face);
    document.body.appendChild(container);
};
