function get_number_attribute(event, attr) {
    return parseInt(event.target.parentElement.getAttribute(attr));
}

fill_config = ["transparent", "red", "#005555"];

function get_fill(i) {
    return fill_config[i];
}

