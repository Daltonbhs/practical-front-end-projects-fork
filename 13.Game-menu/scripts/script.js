function quit(){
    var quitBtn = document.getElementById('quitBtn');
    quitBtn.style.display = 'none';

    var confirmBtn = document.createElement("button");
    var cancelBtn = document.createElement("button");

    confirmBtn.setAttribute("id", "confirmBtn");
    confirmBtn.setAttribute("class", "btn");
    cancelBtn.setAttribute("id", "cancelBtn");
    cancelBtn.setAttribute("class", "btn");


    confirmBtn.innerHTML = "Quit";
    cancelBtn.innerHTML = "Cancel";

    confirmBtn.onclick = quitGame;
    cancelBtn.onclick = cancelQuit;

    var container = document.createElement("div");
    container.setAttribute("class", "container");

    container.appendChild(confirmBtn);
    container.appendChild(cancelBtn);

    var navMenu = document.querySelector('.menu');
    navMenu.appendChild(container);
}

function quitGame(){
    var playBtn = document.getElementById('playBtn');
    var quitBtn = document.getElementById('quitBtn');
    var container = document.querySelector('.container');
    var confirmBtn = document.getElementById('confirmBtn');
    var cancelBtn = document.getElementById('cancelBtn');

    playBtn.remove();
    quitBtn.remove();
    optionsBtn.remove();
    creditsBtn.remove();
    confirmBtn.remove();
    cancelBtn.remove();
    container.remove();

    var message = document.createElement("p");
    message.setAttribute("class", "message");
    message.innerHTML = "Thank you for playing!";
    
    var navMenu = document.querySelector('.menu');
    navMenu.appendChild(message);  
}

function cancelQuit(){
    var confirmBtn = document.getElementById('confirmBtn');
    var cancelBtn = document.getElementById('cancelBtn');
    var container = document.querySelector('.container');
    confirmBtn.remove();
    cancelBtn.remove();
    container.remove();

    var quitBtn = document.getElementById('quitBtn');
    quitBtn.style.display = 'inline-block';
}