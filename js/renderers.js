import {
    change_global_state,
    fill_state,
    global_state,
} from "./state_manager.js";
import {
    bbc,
    bottom_back,
    rb_directions,
} from "./teeth/bottom_specific/back.js";
import {
    bottom_sixth,
    bsc,
    rs_directions,
} from "./teeth/bottom_specific/sixth.js";
import {
    central_bottom,
    rbc_directions,
    scc,
} from "./teeth/general/central.js";
import { fang, fc, rf_directions } from "./teeth/general/fang.js";
import {
    fourth_fifth,
    rff_directions,
    rsf_directions,
    sff,
} from "./teeth/general/fourth.js";
import { rbt_directions, tbc, top_back } from "./teeth/top_specific/back.js";
import { central_top, ctc, rct } from "./teeth/top_specific/central.js";
import { rft_directions, tfc } from "./teeth/top_specific/fourth.js";
import { rts_directions, tsc } from "./teeth/top_specific/sixth.js";

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

export function crown(directions) {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.style.stroke = "black";
    path.style.fill = "none";
    path.setAttribute(
        "d",
        directions,
    );
    return path;
}

function canal(tid, cid, directions) {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.style.stroke = "black";
    path.style.fill = global_state[tid].canals[cid];
    path.setAttribute(
        "d",
        directions,
    );
    path.addEventListener("click", (event) => {
        if (fill_state.canal_color !== null) {
            event.target.style.fill = fill_state.canal_color;
            change_global_state(
                tid,
                "canals",
                cid,
                fill_state.canal_color,
            );
        }
    });
    return path;
}

function roots(directions) {
    const group = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "g",
    );
    for (const direction of directions) {
        const path = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "path",
        );
        path.style.stroke = "black";
        path.style.fill = "none";
        path.setAttribute(
            "d",
            direction,
        );
        group.appendChild(path);
    }
    return group;
}

function upper_jaw(tooth, tid, path, total_count, scale_x) {
    let t = {};
    let rts = {};
    let canals = [];
    switch (tid % 10) {
        case 1:
            t = crown(central_top);
            rts = roots(rct);
            canals = ctc.map((dir, index) => canal(tid, index, dir));
            break;
        case 2: {
            t = crown(central_bottom);
            rts = roots(rbc_directions);
            canals = scc.map((dir, index) => canal(tid, index, dir));
            break;
        }
        case 3: {
            t = crown(fang);
            rts = roots(rf_directions);
            canals = fc.map((dir, index) => canal(tid, index, dir));
            break;
        }
        case 4:
            // no point in making fourth crown for now as they look basically
            // the same
            t = crown(fourth_fifth);
            rts = roots(rft_directions);
            canals = tfc.map((dir, index) => canal(tid, index, dir));
            break;
        case 5:
            t = crown(fourth_fifth);
            rts = roots(rff_directions);
            canals = sff.map((dir, index) => canal(tid, index, dir));
            break;
        case 6:
            t = crown(bottom_sixth);
            rts = roots(rts_directions);
            canals = tsc.map((dir, index) => canal(tid, index, dir));
            break;
        case 7:
        case 8:
            t = crown(top_back);
            rts = roots(rbt_directions);
            canals = tbc.map((dir, index) => canal(tid, index, dir));
            break;
    }
    tooth.appendChild(side_view(t, rts, canals, scale_x, -1));
    tooth.appendChild(build_tooth(tid, path, total_count));
}

function lower_jaw(tooth, tid, path, total_count, scale_x) {
    tooth.appendChild(build_tooth(tid, path, total_count));
    let t = {};
    let rts = {};
    let canals = [];
    switch (tid % 10) {
        case 1:
        case 2: {
            t = crown(central_bottom);
            rts = roots(rbc_directions);
            canals = scc.map((dir, index) => canal(tid, index, dir));
            break;
        }
        case 3: {
            t = crown(fang);
            rts = roots(rf_directions);
            canals = fc.map((dir, index) => canal(tid, index, dir));
            break;
        }
        case 4:
            // no point in making fourth crown for now as they look basically
            // the same
            t = crown(fourth_fifth);
            rts = roots(rsf_directions);
            canals = sff.map((dir, index) => canal(tid, index, dir));
            break;
        case 5:
            t = crown(fourth_fifth);
            rts = roots(rff_directions);
            canals = sff.map((dir, index) => canal(tid, index, dir));
            break;
        case 6:
            t = crown(bottom_sixth);
            rts = roots(rs_directions);
            canals = bsc.map((dir, index) => canal(tid, index, dir));
            break;
        case 7:
        case 8:
            t = crown(bottom_back);
            rts = roots(rb_directions);
            canals = bbc.map((dir, index) => canal(tid, index, dir));
            break;
    }
    tooth.appendChild(side_view(t, rts, canals, scale_x, 1));
}

/** @param {Boolean} mirror */
export function side_view(tooth, rts, canals, scale_x, scale_y) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.style.width = "48px";
    svg.style.height = "90px";
    const group = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "g",
    );

    const tx = scale_x === -1 ? 48 : 0;
    const ty = scale_y === -1 ? 90 : 0;

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
        const p = document.createElement("p");
        p.innerHTML = i;
        if (i < 50) {
            if (i < 30) {
                if (i > 20) {
                    upper_jaw(tooth, i, path, total_count, -1);
                } else {
                    upper_jaw(tooth, i, path, total_count, 1);
                }
                tooth.appendChild(p);
            } else {
                tooth.appendChild(p);
                if (i > 40) {
                    lower_jaw(tooth, i, path, total_count, 1);
                    half_row.style.gridColumnStart = 1;
                    half_row.style.gridRowStart = 2;
                } else {
                    lower_jaw(tooth, i, path, total_count, -1);
                    half_row.style.gridColumnStart = 2;
                    half_row.style.gridRowStart = 2;
                }
            }
        } else {
            if (i < 70) {
                if (i > 60) {
                    child_jaw(tooth, i, path, total_count, -1, -1);
                } else {
                    child_jaw(tooth, i, path, total_count, 1, -1);
                }
                tooth.appendChild(p);
            } else {
                tooth.appendChild(p);
                if (i > 80) {
                    child_jaw(tooth, i, path, total_count, 1, 1);
                    half_row.style.gridColumnStart = 1;
                    half_row.style.gridRowStart = 2;
                } else {
                    child_jaw(tooth, i, path, total_count, -1, 1);
                    half_row.style.gridColumnStart = 2;
                    half_row.style.gridRowStart = 2;
                }
            }
        }
        half_row.appendChild(tooth);
    }
}

function child_jaw(tooth, tid, path, total_count, scale_x, scale_y) {
    let t = {};
    let rts = {};
    let canals = [];
    switch (tid % 10) {
        case 1:
        case 2: {
            t = crown(central_bottom);
            rts = roots(rbc_directions);
            canals = scc.map((dir, index) => canal(tid, index, dir));
            break;
        }
        case 3: {
            t = crown(fang);
            rts = roots(rf_directions);
            canals = fc.map((dir, index) => canal(tid, index, dir));
            break;
        }
        case 4:
            t = crown(bottom_sixth);
            rts = roots(rts_directions);
            canals = tsc.map((dir, index) => canal(tid, index, dir));
            break;
        case 5:
            t = crown(bottom_sixth);
            rts = roots(rts_directions);
            canals = tsc.map((dir, index) => canal(tid, index, dir));
            break;
    }
    if (scale_y === 1) {
        tooth.appendChild(build_tooth(tid, path, total_count));
        tooth.appendChild(side_view(t, rts, canals, scale_x, scale_y));
    } else {
        tooth.appendChild(side_view(t, rts, canals, scale_x, scale_y));
        tooth.appendChild(build_tooth(tid, path, total_count));
    }
}

export function render_child_teeth() {
    return render_teeth(5, 8, 5);
}
export function render_adult_teeth() {
    return render_teeth(1, 4, 8);
}

function render_asc(half_row, row, max) {
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
            return i <= row + max;
        },
        1,
        back_path,
        6,
    );
}
function render_dsc(half_row, row, max) {
    render_tooth(
        half_row,
        row + max,
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
}

export function render_teeth(start, end, max) {
    const face = document.createElement("div");
    face.style.display = "grid";
    face.style.gridTemplateColumns = "repeat(2, 1fr)";
    face.style.gridTemplateRows = "repeat(2, 1fr)";
    for (let part = start; part <= end; part += 1) {
        const half_row = document.createElement("div");
        half_row.style.display = "flex";
        half_row.style.flexDirection = "row";

        const row = part * 10;
        switch (part) {
            case 1:
            case 4:
            case 5:
            case 8:
                render_dsc(half_row, row, max);
                break;
            case 2:
            case 3:
            case 6:
            case 7:
                render_asc(half_row, row, max);
                break;
        }
        face.appendChild(half_row);
    }

    return face;
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
                global_state[tooth_id].tooth[part_id],
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

    svg.addEventListener("click", (e) => {
        if (fill_state.part_color !== null) {
            const s = e.target.parentElement;
            s.style.fill = fill_state.part_color;
            change_global_state(
                tooth_id,
                "tooth",
                side_id,
                fill_state.part_color,
            );
        }
    });

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
