import { fill_color, global_state, set_global_state } from "./state_manager.js";
const back_path = [
    [`<path d=" M 0 0 h 48 l -12 12 h -24 z "></path>`, [48, 12]],
    [`<path d=" M 12 0 v 48 l -12 -12 v -24 z "></path>`, [12, 48]],
    [`<path d=" M 0 12 h 48 l -12 -12 h -24 z " ></path>`, [48, 12]],
    [`<path d=" M 0 0 v 48 l 12 -12 v -24 z " ></path>`, [12, 48]],
    [`<path d=" M 0 0 h 12 v 24 h -24 z " ></path>`, [12, 24]],
    [`<path d=" M 0 0 h 12 v 24 h -12 z " ></path>`, [12, 24]],
];

const front_path = [
    [`<path d=" M 0 0 h 48 l -12 24 h -24 z " ></path> `, [48, 24]],
    [`<path d=" M 12 0 v 48 l -12 -24 z " ></path>`, [12, 48]],
    [`<path d=" M 0 24 h 48 l -12 -24 h -24 z"></path>`, [48, 24]],
    [`<path d=" M 0 0 v 48 l 12 -24 z " ></path>`, [12, 48]],
];

function central_bottom() {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.style.stroke = "black";
    path.style.fill = "none";
    path.setAttribute(
        "d",
        `M 12.561 5.065 C 11.062
        3.627 25.215 -2.978 32.916 4.406 C 37.712 4.95 35.477 21.865 32.625
        21.542
        C 33.173 24.643 12.956 26.749 11.979 21.212 C 8.877 21.652 9.459 5.505
        12.561 5.065 Z`,
    );
    return path;
}

function fang() {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.style.stroke = "black";
    path.style.fill = "none";
    path.setAttribute(
        "d",
        `M 11.551 6.075 C 9.988
4.065 25.399 -5.764 33.522 5.416 C 38.336 5.948 37.355 21.691 33.029 22.35 C
34.005 26.598 15.053 30.778 11.575 21.818 C 6.263 19.49 8.516 6.313 11.551
6.075 Z`,
    );
    return path;
}

function fifth() {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.style.stroke = "black";
    path.style.fill = "none";
    path.setAttribute(
        "d",
        `M 12.763 7.287 C 11.2 5.277 22.975 -5.36 31.098 5.82 C 33.361 6.777 37.006
        21.749 33.029 22.35 C 34.005 26.598 15.053 30.778 11.575 21.818 C 7.54
        19.49 10.588 7.525 12.763 7.287 Z`,
    );
    return path;
}

function bottom_sixth() {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.style.stroke = "black";
    path.style.fill = "none";
    path.setAttribute(
        "d",
        `M 6.092 12.654 C 3.906
12.654 3.906 25.32 6.092 25.32 C 7.44 31.387 42.286 30.089 41.259 25.469 C
43.643 25.668 43.941 11.958 41.557 11.759 C 36.007 4.44 32.56 7.058 23.824
12.057 C 17.446 8.089 12.203 4.535 6.092 12.654 Z`,
    );
    return path;
}

function bottom_back() {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.style.stroke = "black";
    path.style.fill = "none";
    path.setAttribute(
        "d",
        `M 6.092 11.164 C 3.906 11.164 3.906 25.32 6.092 25.32 C 7.44 31.387
        42.286 30.089 41.259 25.469 C 43.643 25.668 43.941 11.958 41.557 11.759
        C 37.335 6.763 35.323 8.84 23.973 9.971 C 16.289 9.623 8.868 4.329
        6.092 11.164 Z`,
    );
    return path;
}

// root bottom central
const rbc_directions =
    `M 15.239 24.249 C 19.189 26.806 10.986 62.036 15.239 63.378 C 19.194
        62.1 32.663 36.131 30.164 23.075 C 29.331 25.991 15.212 24.918 15.239
        24.249 Z`;

// root fang
const rf_directions = `M 12.41 23.239 C 11.141
26.336 10.819 73.956 17.461 75.298 C 21.416 76.323 34.673 36.888 33.194 23.075
C 31.954 28.486 11.725 27.308 12.41 23.239 Z`;

// root single fouth
const rsf_directions = `M 32.932 22.583 C 36.032
24.406 26.277 60.785 20.406 57.332 C 14.623 61.308 9.608 15.05 11.719 22.381 C
13.83 29.712 32.962 29.234 32.932 22.583 Z`;

// root fifth
const rff_directions = `M 11.719 22.785 C 11.814
28.223 14.303 41.289 15.706 44.533 C 16.015 46.729 11.98 55.737 17.594 57.494 C
25.538 62.973 36.363 22.23 32.702 24.322 C 29.041 26.414 17.279 31.045 11.719
22.785 Z`;

// root sixth
const rs_directions = `M 22.185 47.82 C 23.164
47.971 27.758 29.245 25.314 29.343 C 25.898 30.074 9.012 28.784 8.029 27.555 C
17.718 32.234 4.636 62.973 9.966 64.361 C 12.998 68.404 22.629 48.461 22.483
48.267 C 21.947 49.004 31.268 69.437 33.659 66.149 C 41.743 65.572 41.374
27.685 39.023 27.853 C 39.029 27.864 26.798 30.821 26.059 29.343 C 26.26 30.501
23.453 48.15 22.185 47.82 Z`;

// root back
const rb_directions =
    `M 22.185 47.82 C 23.164 47.971 27.758 29.245 25.314 29.343 C 25.898 30.074
9.012 28.784 8.029 27.555 C 14.442 48.976 4.6 63.155 9.966 64.361 C 12.998
68.404 22.629 48.461 22.483 48.267 C 21.947 49.004 31.268 71.672 33.659 68.384
C 41.743 67.807 41.374 27.685 39.023 27.853 C 39.029 27.864 26.798 30.821
26.059 29.343 C 26.26 30.501 23.453 48.15 22.185 47.82 Z`;

function roots(directions) {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.style.stroke = "black";
    path.style.fill = "none";
    path.setAttribute(
        "d",
        directions,
    );
    return path;
}

// don't touch for now, we need to rerender on click
function single_central_canal() {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.style.stroke = "black";
    path.style.fill = fill_color;
    path.setAttribute(
        "d",
        `M 21.416 25.007 L 26.467
        24.401 C 26.844 24.652 17.719 61.535 16.365 60.767 C 15.011 59.999 21.618
        25.209 21.416 25.007 Z`,
    );
    path.addEventListener("click", (event) => {
        event.target.replaceWith(single_canal());
    });
    return path;
}

// don't touch for now, we need to rerender on click
function fang_canal() {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.style.stroke = "black";
    path.style.fill = fill_color;
    path.setAttribute(
        "d",
        `M 18.588 27.027 L 25.659 27.431 C 25.65 30.381
18.808 75.126 17.577 73.495 C 16.346 71.864 18.79 27.229 18.588 27.027
Z`,
    );
    path.addEventListener("click", (event) => {
        event.target.replaceWith(fang_canal());
    });
    return path;
}

// don't touch for now, we need to rerender on click
// single fourth_fifth canal
function sff_canal() {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.style.stroke = "black";
    path.style.fill = fill_color;
    path.setAttribute(
        "d",
        `
  M 22.224 27.229 C 21.79
        28.572 25.428 28.167 26.063 27.431 C 23.591 48.585 18.658 58.317 19.194
        56.726 C 19.264 57.633 22.531 27.402 22.224 27.229 Z`,
    );
    path.addEventListener("click", (event) => {
        event.target.replaceWith(sff_canal());
    });
    return path;
}

function sixth_canal_left() {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.style.stroke = "black";
    path.style.fill = fill_color;
    path.setAttribute(
        "d",
        `M 16.97 29.343 L 21.142 29.641 C 22.715 30.54 11.015 65.491 9.817
        64.807 C 9.662 64.809 16.732 29.341 16.97 29.343 Z`,
    );
    path.addEventListener("click", (event) => {
        event.target.replaceWith(sixth_canal_left());
    });
    return path;
}

function sixth_canal_middle() {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.style.stroke = "black";
    path.style.fill = fill_color;
    path.setAttribute(
        "d",
        `M 30.828 29.343 L 35.298 28.449 C 37.648 33.447 35.904 66.533 35.298
        65.255 L 30.828 29.343 Z`,
    );
    path.addEventListener("click", (event) => {
        event.target.replaceWith(sixth_canal_middle());
    });
    return path;
}

function sixth_canal_right() {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.style.stroke = "black";
    path.style.fill = fill_color;
    path.setAttribute(
        "d",
        `M 30.679 29.194 C 30.732 29.394 33.103 46.378 32.765 46.181 C 33.012
        46.428 29.864 62.8 29.338 62.274 C 28.324 62.666 28.588 29.597 30.679
        29.194 Z`,
    );
    path.addEventListener("click", (event) => {
        event.target.replaceWith(sixth_canal_right());
    });
    return path;
}

function bottom_back_canal_left() {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.style.stroke = "black";
    path.style.fill = fill_color;
    path.setAttribute(
        "d",
        `M 16.97 29.343 L 21.142 29.641 C 22.715 30.54 11.015 65.491 9.817
        64.807 C 9.662 64.809 16.732 29.341 16.97 29.343 Z`,
    );
    path.addEventListener("click", (event) => {
        event.target.replaceWith(bottom_back_canal_left());
    });
    return path;
}

function bottom_back_canal_middle() {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.style.stroke = "black";
    path.style.fill = fill_color;
    path.setAttribute(
        "d",
        `M 32.765 28.896 L 35.298 28.449 C 37.648 33.447 36.5 67.874 35.894
        66.596 L 32.765 28.896 Z`,
    );
    path.addEventListener("click", (event) => {
        event.target.replaceWith(bottom_back_canal_middle());
    });
    return path;
}

function bottom_back_canal_right() {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.style.stroke = "black";
    path.style.fill = fill_color;
    path.setAttribute(
        "d",
        `M 29.934 29.492 C 29.987 29.692 32.209 29.689 31.871 29.492 C 32.118
        29.739 30.609 65.333 30.083 64.807 C 29.069 65.199 27.843 29.895 29.934
        29.492 Z`,
    );
    path.addEventListener("click", (event) => {
        event.target.replaceWith(bottom_back_canal_right());
    });
    return path;
}

function lower_jaw(tooth, tid, path, total_count, scale_x) {
    tooth.appendChild(build_tooth(tid, path, total_count));
    let t = {};
    let rts = {};
    let canals = [];
    switch (tid % 10) {
        case 1:
        case 2: {
            t = central_bottom();
            rts = roots(rbc_directions);
            canals = [single_central_canal()];
            break;
        }
        case 3: {
            t = fang();
            rts = roots(rf_directions);
            canals = [fang_canal()];
            break;
        }
        case 4:
            // no point in making fourth crown for now as they look basically
            // the same
            t = fifth();
            rts = roots(rsf_directions);
            canals = [sff_canal()];
            break;
        case 5:
            t = fifth();
            rts = roots(rff_directions);
            canals = [sff_canal()];
            break;
        case 6:
            t = bottom_sixth();
            rts = roots(rs_directions);
            canals = [
                sixth_canal_left(),
                sixth_canal_middle(),
                sixth_canal_right(),
            ];
            break;
        case 7:
        case 8:
            t = bottom_back();
            rts = roots(rb_directions);
            canals = [
                bottom_back_canal_left(),
                bottom_back_canal_middle(),
                bottom_back_canal_right(),
            ];
            break;
    }
    tooth.appendChild(side_view(t, rts, canals, scale_x, 1));
}

/** @param {Boolean} mirror */
export function side_view(tooth, rts, canals, scale_x, scale_y) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.viewBox = "0 0 48 90";
    svg.style.width = "48px";
    svg.style.height = "90px";
    // Create a group with transform for mirroring
    const group = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "g",
    );

    tx = scale_x === -1 ? 48 : 0;
    ty = scale_y === -1 ? 90 : 0;

    console.log(canals);
    group.setAttribute(
        "transform",
        `translate(${tx},${ty}) scale(${scale_x}, ${scale_y})`,
    );
    group.appendChild(tooth);
    group.appendChild(rts);
    for (const canal of canals) {
        group.appendChild(canal);
    }
    svg.appendChild(group);
    return svg;
}

function render_tooth(half_row, min, cmp, inc, path, total_count) {
    for (let i = min; cmp(i); i += inc) {
        const tooth = document.createElement("div");
        tooth.style.display = "flex";
        tooth.style.flexDirection = "column";
        if (i < 30) {
            // scale_y = -1;
            // if (i > 20) {
            //     scale_x = -1;
            // }
            // tooth.appendChild(side_view(i, scale_x, scale_y));
            // tooth.appendChild(build_tooth(i, path, total_count));
            //
            // const p = document.createElement("p");
            // p.innerHTML = i;
            // tooth.appendChild(p);
        } else {
            const p = document.createElement("p");
            p.innerHTML = i;
            tooth.appendChild(p);

            if (i > 40) {
                lower_jaw(tooth, i, path, total_count, -1);
            } else {
                lower_jaw(tooth, i, path, total_count, 1);
            }
        }
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
                6,
            );
        }
        document.body.appendChild(half_row);
    }
}

export function build_tooth(tooth_id, path, total_parts) {
    const div = document.createElement("div");
    for (let part_id = 0; part_id < total_parts; ++part_id) {
        const part_type = path[part_id];
        const size = part_type[1];
        div.appendChild(
            build_tooth_part(
                tooth_id,
                part_id,
                size[0],
                size[1],
                global_state[tooth_id][part_id],
                part_type[0],
            ),
        );
    }
    div.style.position = "relative";
    div.style.width = "48px";
    div.style.height = "48px";
    return div;
}

export function build_tooth_part(tooth_id, side_id, w, h, fill, path) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    svg.dataset.tooth = tooth_id;
    svg.dataset.side = side_id;

    svg.addEventListener("click", (e) => {
        s = e.target.parentElement;
        tid = s.dataset.tooth;
        sid = s.dataset.side;
        if (tid !== undefined && sid !== undefined) {
            s.style.fill = fill_color;
            const temp_state = global_state;
            temp_state[tid][sid] = fill_color;
            set_global_state(temp_state);
        }
    });

    svg.style.viewBox = `0 0 ${w} ${h}`;
    svg.style.width = w;
    svg.style.height = h;
    svg.style.position = "absolute";

    svg.style.fill = fill;
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
