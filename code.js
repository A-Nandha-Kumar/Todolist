let cardContainer = document.getElementById("todoItemsContainer");

let items = [{
        text: "Learn HTML",
        id: 1
    },
    {
        text: "Learn CSS",
        id: 2
    },
    {
        text: "Learn JavaScript",
        id: 3
    }
];
let count = items.length;

function addItem(item) {
    let tolink = "checkbox" + item.id;
    let labelid = "label" + item.id;
    let remove = "delete" + item.id;

    let list = document.createElement("li");
    list.classList.add("todo-item-container", "d-flex", "flex-row");
    list.id = remove;
    cardContainer.appendChild(list);

    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.id = tolink;
    checkBox.onclick = function() {
        let checkBoxElement = document.getElementById(tolink);
        let labelElement = document.getElementById(labelid);
        labelElement.classList.toggle("checked");
    }
    checkBox.classList.add("checkbox-input");
    list.appendChild(checkBox);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    list.appendChild(labelContainer);

    let label = document.createElement("label");
    label.setAttribute("for", tolink);
    label.id = labelid;
    label.textContent = item.text;
    label.classList.add("checkbox-label");
    labelContainer.appendChild(label);

    let iconContainer = document.createElement("div");
    iconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(iconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIcon.onclick = function() {
        let element = document.getElementById(remove);
        cardContainer.removeChild(element);
    }
    iconContainer.appendChild(deleteIcon);
}
for (let value of items) {
    addItem(value);
}
let addtobutton = document.getElementById("add");

function clickAdd() {
    let input = document.getElementById("todoUserInput");
    let inputvalue = input.value;
    if (inputvalue === "") {
        alert("Enter valid input");
        return;
    }
    count = count + 1;
    let newitem = {
        text: inputvalue,
        id: count
    }
    addItem(newitem);
    input.value = ""
}
