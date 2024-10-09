import { render_adult_teeth, render_child_teeth } from "./renderers.js";

import {
    get_global_state,
    init_global_state,
    set_on_state_change,
} from "./state_manager.js";

import { configure_options } from "./helpers.js";

self.dzteeth = {
    configure_options,
    get_global_state,
    init_global_state,
    render_adult_teeth,
    render_child_teeth,
    set_on_state_change,
};
