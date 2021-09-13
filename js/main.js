(() => {
    let coworkers = document.querySelectorAll(".teamInfo .staffMember"),
        dataDisplay =document.querySelector(".dataDisplay");

    // this is the array for each members information
    const teamBio = [
        "This is the info about Nic",
        "This is the info about Irene",
        "This is the info about Emily",
        "This is the info about Jackson"
    ];

    function selectStaff() {
        if (dataDisplay.children.length > 0) {
            dataDisplay.innerHTML = "";
        }
    
    let staffPick = this.cloneNode(true);
    let staffInfo = staffPick.querySelector(".teamMate");
    /* let staffName = staffInfo.querySelector("h2"); */
    let staffText = staffInfo.querySelector("p");

    console.log(staffPick.id);

    dataDisplay.appendChild(staffPick);
    /* dataDisplay.appendChild(staffName); */
    dataDisplay.appendChild(staffText);

    console.log(staffText);
    staffText.textContent = `${teamBio[this.dataset.index]}`;

    }
    coworkers.forEach(coworker => coworker.addEventListener("click", selectStaff));
})();