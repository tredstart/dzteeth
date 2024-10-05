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
