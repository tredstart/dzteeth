/** @param {int} fill_numero
 * @param {int} tooth_id
 */
function tooth_part(tooth_id, side_id, w, h, fill_numero) {
    svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    svg.dataset.tooth = tooth_id;
    svg.dataset.side = side_id;

    svg.style.viewBox = `0 0 ${w} ${h}`;
    svg.style.width = w;
    svg.style.height = h;
    svg.style.position = "absolute";

    svg.style.fill = get_fill(fill_numero);
    svg.style.stroke = "black";

    switch (side_id) {
        case 0:
            svg.innerHTML = bt_path;
            break;
        case 1:
            svg.innerHTML = br_path;
            svg.style.right = 0;
            break;
        case 2:
            svg.innerHTML = bb_path;
            svg.style.bottom = 0;
            break;
        case 3:
            svg.innerHTML = bl_path;
            break;
    }
    return svg;
}

// TODO: make transparent 0 element
fill_config = ["red", "blue", "#0055ff"];

function get_fill(i) {
    return fill_config[i];
}

const bt_path = `<path d=" M 0 0 h 48 l -12 12 h -24 z "></path>`;
const bl_path = `<path d=" M 0 0 v 48 l 12 -12 v -24 z " ></path>`;
const bb_path = `<path d=" M 0 12 h 48 l -12 -12 h -24 z " ></path>`;
const br_path = `<path d=" M 12 0 v 48 l -12 -12 v -24 z "></path>`;

/** @param {int} state */
function setFillState(state) {
    drawing_state = state;
}

self.onload = function () {
    console.log("we ball");
    document.body.appendChild(back_tooth(32));
};

function get_wh(i) {
    let w = 0;
    let h = 0;

    switch (i) {
        case 0:
        case 2:
            w = 48;
            h = 12;
            break;
        case 1:
        case 3:
            w = 12;
            h = 48;
            break;
    }

    return [w, h];
}

function back_tooth(tooth_id) {
    div = document.createElement("div");
    for (let side_id = 0; side_id < 4; ++side_id) {
        size = get_wh(side_id);
        div.appendChild(tooth_part(tooth_id, side_id, size[0], size[1], 0));
    }
    div.style.position = "relative";
    div.style.width = "48px";
    div.style.height = "48px";
    console.log(div.style);
    return div;
}

function get_number_attribute(event, attr) {
    return parseInt(event.target.parentElement.getAttribute(attr));
}

self.addEventListener("click", (event) => {
    console.log(get_number_attribute(event, "data-tooth"));
    console.log(get_number_attribute(event, "data-side"));
});
