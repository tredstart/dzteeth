/// <reference lib="dom" />
import { expect, test } from "bun:test";
import {
    init_global_state,
    set_on_state_change,
    set_part_color,
} from "./state_manager.js";
import { render_adult_teeth } from "./renderers.js";
import { global_state } from "./state_manager.js";

/**
 * Simulate a click event.
 * @public
 * @param {Element} elem  the element to simulate a click on
 */
const simulateClick = function (elem) {
    // Create our event (with options)
    const evt = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window,
    });
    elem.dispatchEvent(evt);
};

test("test click on svgs", () => {
    init_global_state();
    set_on_state_change((tid, part, pid, value) => {
        expect(global_state[tid][part][pid]).toBe("red");
    });
    set_part_color("red");
    const html = render_adult_teeth();

    for (let i = 0; i < html.children.length; ++i) {
        const element = html.children[i];
        for (let j = 0; j < element.children.length; ++j) {
            const tooth_block = element.children[j];
            const parts = tooth_block.children[1].children;
            console.log(canals.tagName);
            for (const part of parts) {
                simulateClick(part);
            }
        }
    }
});
