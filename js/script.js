import { get_fill, get_number_attribute } from "./helpers.js";
import render_adult_teeth from "./renderers.js";

let drawing_state = 0;

function setFillState(state) {
    drawing_state = state;
}

self.addEventListener("click", (event) => {
    id = get_number_attribute(event, "data-tooth");
    console.log(id);
    console.log(get_number_attribute(event, "data-side"));
    console.log(drawing_state);
    if (!isNaN(id)) {
        event.target.style.fill = get_fill(drawing_state);
    }
});

self.onload = function () {
    console.log("we ball");
    render_adult_teeth();
};
