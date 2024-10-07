export let global_state = {};

function init_parts(parts, min, cmp, inc) {
    for (let i = min; cmp(i); i += inc) {
        global_state[i] = [];
        for (let j = 0; j < parts; ++j) {
            global_state[i].push("transparent");
        }
    }
}

export function init_global_state() {
    for (let part = 1; part <= 8; part += 1) {
        const row = part * 10;
        if (part & 1 == 1) {
            // FIXME: this
            init_parts(
                6,
                row + 8,
                (i) => {
                    return i >= row + 4;
                },
                -1,
            );
            init_parts(
                4,
                row + 3,
                (i) => {
                    return i > row;
                },
                -1,
            );
        } else {
            init_parts(
                4,
                row + 1,
                (i) => {
                    return i <= row + 3;
                },
                1,
            );
            init_parts(
                6,
                row + 4,
                (i) => {
                    return i <= row + 8;
                },
                1,
            );
        }
    }
}

export let state_changed_callback;
export function set_global_state(state) {
    global_state = state;
    state_changed_callback(global_state);
}
export let fill_color = "transparent";
export function set_fill_color(color) {
    fill_color = color;
}
export let root_color = "transparent";
export function set_root_color(color) {
    root_color = color;
}
export function set_state_callback(callback) {
    state_changed_callback = callback;
}
