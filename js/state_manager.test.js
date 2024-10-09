import { expect, test } from "bun:test";

import { global_state, init_global_state } from "./state_manager.js";

test("global state is initialized correctly", () => {
    init_global_state();
    for (let i = 11; i <= 13; i++) {
        for (let j = 0; j < 4; j++) {
            expect(global_state[i].tooth[j]).toBe("transparent");
        }
    }
    for (let i = 44; i <= 48; i++) {
        for (let j = 0; j < 6; j++) {
            expect(global_state[i].tooth[j]).toBe("transparent");
        }
    }
    expect(global_state[31][4]).toBe(undefined);
    expect(global_state[10]).toBe(undefined);
});
