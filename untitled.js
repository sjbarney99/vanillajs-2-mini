document.querySelector('form').addEventListener('submit', addTodo);
//document.querySelector("form").addEventListener("submit", addTodo);

const addTodo = (event) => {
    event.preventDefault();
    //event.preventDefault();
    const itm = document.createElement('li');
    //const item = document.createElement("li");
    itm.innerText = document.getElementById('itm').value;
    //item.innerText = document.getElementById("item").value;
    itm.addEventListener('click', completeTodo);
    //item.addEventListener("click", completeTodo);

    const deleteButton = document.createElement('button');
    //const button = document.createElement("button");
    deleteButton.innerText = 'X';
    //button.innerText = "x";
    deleteButton.addEventListener('click', removeTodo);
    //button.addEventListener("click", removeTodo);
    item.append(deleteButton);
    //item.append(button);

    const list = document.querySelector('ul');
    //const list = document.querySelector("ul");
    list.appendChild(item);
    //list.appendChild(item);   

}

const removeTodo = (event) => {
    event.target.parentNode.remove();
    //event.target.parentNode.remove();
}

const completeTodo = (event) => {
    let checked = event.target.getAttribute('aria-checked');
    //const value = event.target.getAttribute("aria-checked");
    if(checked !== 'true') {
    //if (value !== "true") 
        event.target.setAttribute("aria-checked", "true");
        //event.target.setAttribute("aria-checked", "true");
    }
    else {
        event.target.setAttribute("aria-checked", "false");
        //event.target.setAttribute("aria-checked", "false");
    }
}