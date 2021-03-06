(() => {
    //Profile Display START
    let coworkers = document.querySelectorAll(".teamInfo .staffMember"),
        dataDisplay =document.querySelector(".dataDisplay");

    // this is the array for each members information
    const teamBio = [
        "Nicholas Amerongen is a cook renowned for his mastery of preparing eggs and onions. He values having a wide variety of skills and thus has come to the world of design & development to master cooking up code as quality as his breakfast.",
        "Hello there! I'm Irene. I'm in my second year of Interactive media design at Fanshawe College. I like cats, coffee and long road trips.",
        "Hi! My name is Emily, I am 21 years old and in my second year of the Interactive Media Design program at Fanshawe College. Outside of school, I love playing the piano, cooking, and being outdoors. After school I hope to have a successful career in event coordination and design",
        "Hi my name is Jackson, I am 20 years old, I am in my second year of the interactive media design program at Fanshawe, I love collecting vintage t-shirts and creating art"
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
})();