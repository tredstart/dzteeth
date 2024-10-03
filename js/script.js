function back_top(fill, id) {
    return `<svg
    viewBox="0 0 48 12"
    width="48"
    height="12"
    fill=${fill}
    stroke="black"
    onclick=""
    data-num=${id}
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        d="
        M 0 0
        h 48 
        l -12 12
        h -24 z
        "
    ></path>
</svg>`;
}

function back_left() {
    return `<svg></svg>`;
}
function back_tooth() {
    return back_top("red", 32) + back_left();
}

function fillWithColor(element) {
    element.classList.toggle(fill_color[drawing_state]);
}

/** @type ?int */
let drawing_state = null;

const fill_color = [
    "bg-red-500",
    "bg-blue-500",
];

/** @param {int} state */
function setFillState(state) {
    drawing_state = state;
}

self.onload = function () {
    console.log("we ball");
    document.body.innerHTML += back_tooth();
};

function get_number_attribute(event) {
    return parseInt(event.target.parentElement.getAttribute("data-num"));
}

self.addEventListener("click", (event) => {
    console.log(get_number_attribute(event));
});
