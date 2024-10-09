export let global_state = {};

function init_parts(parts, min, max) {
    for (let i = min; i < max; ++i) {
        global_state[i] = {};
        global_state[i].tooth = [];
        for (let j = 0; j < parts; ++j) {
            global_state[i].tooth.push("transparent");
        }
    }
}

function upper_adult_case(i) {
    let canals = 0;
    switch (i) {
        case 1:
        case 2:
        case 3:
        case 5:
            canals = 1;
            break;
        case 4:
            canals = 2;
            break;
        case 6:
            canals = 4;
            break;
        case 7:
        case 8:
            canals = 3;
            break;
    }
    return canals;
}

function lower_adult_case(i) {
    let canals = 0;
    switch (i) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            canals = 1;
            break;
        case 6:
        case 7:
        case 8:
            canals = 3;
            break;
    }
    return canals;
}

function adult_case(side, row) {
    for (let i = 1; i <= 8; ++i) {
        global_state[row + i].canals = [];
        for (let j = 0; j < side(i); ++j) {
            global_state[row + i].canals.push("transparent");
        }
    }
}
function child_case(row) {
    for (let i = 1; i <= 3; ++i) {
        global_state[row + i].canals = ["transparent"];
    }
    for (let i = 4; i <= 5; ++i) {
        global_state[row + i].canals = [
            "transparent",
            "transparent",
            "transparent",
            "transparent",
        ];
    }
}

function init_canals(row) {
    if (row < 30) {
        adult_case(upper_adult_case, row);
    } else if (row < 50) {
        adult_case(lower_adult_case, row);
    } else {
        child_case(row);
    }
}

export function init_global_state(state = null) {
    if (state === null) {
        for (let part = 1; part <= 8; part += 1) {
            const row = part * 10;
            init_parts(4, row + 1, row + 4);
            if (part < 5) {
                init_parts(6, row + 4, row + 9);
            } else {
                init_parts(6, row + 4, row + 6);
            }
            init_canals(row);
        }
    } else {
        global_state = state;
    }
}

let on_state_change;
export function change_global_state(tid, part, pid, value) {
    global_state[tid][part][pid] = value;
    on_state_change(tid, part, pid, value);
}

export const fill_state = {
    part_color: null,
    canal_color: null,
};

export function set_part_color(color) {
    fill_state.part_color = color;
    fill_state.canal_color = null;
}
export function set_canal_color(color) {
    fill_state.canal_color = color;
    fill_state.part_color = null;
}

export function set_on_state_change(callback) {
    on_state_change = callback;
}

export function get_global_state() {
    return global_state;
}
