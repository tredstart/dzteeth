import { get_fill } from "./helpers.js";
back_path = [
    [`<path d=" M 0 0 h 48 l -12 12 h -24 z "></path>`, [48, 12]],
    [`<path d=" M 12 0 v 48 l -12 -12 v -24 z "></path>`, [12, 48]],
    [`<path d=" M 0 12 h 48 l -12 -12 h -24 z " ></path>`, [48, 12]],
    [`<path d=" M 0 0 v 48 l 12 -12 v -24 z " ></path>`, [12, 48]],
    [`<path d=" M 0 0 h 12 v 24 h -24 z " ></path>`, [12, 24]],
    [`<path d=" M 0 0 h 12 v 24 h -12 z " ></path>`, [12, 24]],
];

front_path = [
    [`<path d=" M 0 0 h 48 l -12 24 h -24 z " ></path> `, [48, 24]],
    [`<path d=" M 12 0 v 48 l -12 -24 z " ></path>`, [12, 48]],
    [`<path d=" M 0 24 h 48 l -12 -24 h -24 z"></path>`, [48, 24]],
    [`<path d=" M 0 0 v 48 l 12 -24 z " ></path>`, [12, 48]],
];

function render_tooth(half_row, min, cmp, inc, path, total_count) {
    for (let i = min; cmp(i); i += inc) {
        tooth = document.createElement("div");
        tooth.style.display = "flex";
        tooth.style.flexDirection = "column";
        tooth.appendChild(build_tooth(i, path, total_count));
        p = document.createElement("p");
        p.innerHTML = i;
        tooth.appendChild(p);
        half_row.appendChild(tooth);
    }
}

export default function render_adult_teeth() {
    for (let part = 1; part <= 4; part += 1) {
        const half_row = document.createElement("div");
        half_row.style.display = "flex";
        half_row.style.flexDirection = "row";

        const row = part * 10;
        if (part & 1 == 1) {
            render_tooth(
                half_row,
                row + 8,
                (i) => {
                    return i >= row + 4;
                },
                -1,
                back_path,
                6,
            );
            render_tooth(
                half_row,
                row + 3,
                (i) => {
                    return i > row;
                },
                -1,
                front_path,
                4,
            );
        } else {
            render_tooth(
                half_row,
                row + 1,
                (i) => {
                    return i <= row + 3;
                },
                1,
                front_path,
                4,
            );
            render_tooth(
                half_row,
                row + 4,
                (i) => {
                    return i <= row + 8;
                },
                1,
                back_path,
                4,
            );
        }
        document.body.appendChild(half_row);
    }
}

function build_tooth(tooth_id, path, total_parts) {
    div = document.createElement("div");
    for (let part_id = 0; part_id < total_parts; ++part_id) {
        part_type = path[part_id];
        size = part_type[1];
        div.appendChild(
            tooth_part(
                tooth_id,
                part_id,
                size[0],
                size[1],
                0,
                part_type[0],
            ),
        );
    }
    div.style.position = "relative";
    div.style.width = "48px";
    div.style.height = "48px";
    return div;
}

function tooth_part(tooth_id, side_id, w, h, fill_numero, path) {
    svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    svg.dataset.tooth = tooth_id;
    svg.dataset.side = side_id;

    svg.style.viewBox = `0 0 ${w} ${h}`;
    svg.style.width = w;
    svg.style.height = h;
    svg.style.position = "absolute";

    svg.style.fill = get_fill(fill_numero);
    svg.style.stroke = "black";
    svg.innerHTML = path;

    switch (side_id) {
        case 0:
        case 3:
            break;
        case 1:
            svg.style.right = 0;
            break;
        case 2:
            svg.style.bottom = 0;
            break;
        case 4:
            svg.style.top = "12px";
            svg.style.left = "12px";
            break;
        case 5:
            svg.style.top = "12px";
            svg.style.left = "24px";
            break;
    }
    return svg;
}
