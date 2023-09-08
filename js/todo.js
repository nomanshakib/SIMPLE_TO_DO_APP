
let count = 0;

document.getElementById("item-add-btn").addEventListener('click', function () {
    
    /* When click the add button ,then increase number by one ,one ,one like 1, 2, 3...*/
    count++;

    /* Get input from the input field */
    const inputFieldValue = document.getElementById("input-field").value;

    /* Get content container */
    const tableContentContainer = document.getElementById("content-container");
    
    /* Create content element */
    const tableContent = document.createElement("tr");
    tableContent.innerHTML = `
                <th scope="row">${count}</th>
                <td>${inputFieldValue}</td>
                <td>
                    <button class="btn btn-danger delete-btn">Delete</button>
                    <button class="btn btn-primary done-btn">Done</button>
                </td>
    `;

    /* Append content to the content container */
    tableContentContainer.appendChild(tableContent);
    
    /* Clear the input field */
    document.getElementById("input-field").value = "";

    /* Single Delete Button Implementation */
    const deleteButton = document.getElementsByClassName("delete-btn");
    for (let button of deleteButton) {
        button.addEventListener('click', function (event) {
            /* console.log(event.target.parentNode.parentNode); */
            event.target.parentNode.parentNode.style.display = "none";
        });
    };
    
    /* Done Button Implementation */
    const doneButton = document.getElementsByClassName("done-btn");
    for (let button of doneButton) {
        button.addEventListener('click', function (event) {
            /* console.log(event.target.parentNode.parentNode); */
            event.target.parentNode.parentNode.style.textDecoration = "line-through";
        });
    };

});

/* Delete All Item Button */
document.getElementById("delete-all-btn").addEventListener('click', function () {
    document.getElementById("content-container").style.display = "none";
});