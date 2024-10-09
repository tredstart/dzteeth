function save_state(tid, part, sid, value) {
    console.log(tid, part, sid, value);
    console.log(dzteeth.get_global_state());

    localStorage.setItem(
        "global_state",
        JSON.stringify(dzteeth.get_global_state()),
    );
}

self.onload = function () {
    // for example we have a local storage as our database
    state = JSON.parse(localStorage.getItem("global_state"));

    // if our database is empty we should create a new diagram state
    // else we just initialize our state from the database
    // if the state is null then it will create a new empty one
    dzteeth.init_global_state(state);

    // here we are setting up available options for tooth diagram and canal
    // diagram. it's going to get every element that has those classes and set
    // appropriate handlers by taking the color from the value attribute of the
    // tag
    dzteeth.configure_options("teeth-option", "canals-option");

    // set a function that will handle any change of the diagram state
    dzteeth.set_on_state_change(save_state);

    // then we create a container for adult teeth component
    const adult_face = dzteeth.render_adult_teeth();
    const container = document.createElement("div");
    container.style.width = "50%";
    container.appendChild(adult_face);
    document.body.appendChild(container);

    // another container for childs face
    const child_face = dzteeth.render_child_teeth();
    const c = document.createElement("div");
    c.style.width = "50%";
    c.appendChild(child_face);
    document.body.appendChild(c);
};
