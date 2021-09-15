(() => {
    //Profile Display START
    let coworkers = document.querySelectorAll(".teamInfo .staffMember"),
        dataDisplay =document.querySelector(".dataDisplay");

    // this is the array for each members information
    const teamBio = [
        "Nicholas Amerongen is a cook renowned for his mastery of preparing eggs and onions. He values having a wide variety of skills and thus has come to the world of design & development to master cooking up code as quality as his breakfast.",
        "Hello there! I'm Irene. I'm in my second year of Interactive media design at Fanshawe College. I like cats, coffee and long road trips.",
        "This is the info about Emily",
        "Hi my name is Jackson, I am 20 years old, I am in my second year of the interactive media design program at Fanshawe  "
    ];

    function selectStaff() {
        if (dataDisplay.children.length > 0) {
            dataDisplay.innerHTML = "";
        }
    
    let staffPick = this.cloneNode(true);
    let staffInfo = staffPick.querySelector(".teamMate");
    // let staffName = staffInfo.querySelector("h2"); 
    let staffText = staffInfo.querySelector("p");

    console.log(staffPick.id);

    dataDisplay.appendChild(staffPick);
    // dataDisplay.appendChild(staffName); 
    dataDisplay.appendChild(staffText);

    console.log(staffText);
    staffText.textContent = `${teamBio[this.dataset.index]}`;

    }
    coworkers.forEach(coworker => coworker.addEventListener("click", selectStaff));

    // Profile Display END
    //Video Controls START

    //Video Controls END
})();