import { configure_options } from "./helpers.js";
import { render_adult_teeth, render_child_teeth } from "./renderers.js";
import {
    global_state,
    init_global_state,
    set_on_state_change,
} from "./state_manager.js";

function log_state(tid, part, sid, value) {
    console.log(tid, part, sid, value);
    console.log(global_state);
}

self.onload = function () {
    console.log("we ball");
    set_on_state_change(log_state);
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
