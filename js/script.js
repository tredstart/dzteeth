import { configure_options } from "./helpers.js";
import render_adult_teeth from "./renderers.js";
import { init_global_state } from "./state_manager.js";

self.onload = function () {
    console.log("we ball");
    init_global_state();
    configure_options();
    render_adult_teeth();
};
