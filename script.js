$(document).ready(() => {

    const projectData = [
        {
            projectName: "Up For Beer Review",
            image: "./assets/brew.gif",
            repoLink: "https://github.com/TMPeeler/Project-2",
            deployLink: "https://upforbeerreview.herokuapp.com/",
            description: "Up for beer review is an interactive application where users can review existing beers or users can also create new beers and review them."
        },

        {
            projectName: "Trail Scout",
            image: "./assets/trail-scout.gif",
            repoLink: "https://github.com/markkhoo/Trail-Scout/tree/data",
            deployLink: "https://markkhoo.github.io/Trail-Scout/",
            description: "Trail Scout is an interactive application where users can search for trails by city name and it also provides weather information for the trail."
        },
        {
            projectName: "Note Taker",
            image: "./assets/note-taker.gif",
            repoLink: "https://github.com/javimarashall/Note-Taker",
            deployLink: "https://peaceful-earth-70189.herokuapp.com/",
            description: "Note taker is an application where users are able enter notes, save, and delete notes"
        }, {

            projectName: "Password Generator",
            image: "./assets/password.gif",
            repoLink: "https://github.com/javimarashall/Password-Generator",
            deployLink: "https://javimarashall.github.io/Password-Generator/",
            description: "This application is used to generate a random password using certain criterias. Upon loading of the application, the user starts it by pressing the 'generate password' button. Once the application is started, the user is prompted with a pop up windows asking the user how many characters to use. Next, the user is prompted with several questions asking if the user would like to use upper case letters, lower case letters, numbers or special characters. Depending on what the user selects as the criteria, that's what the application will use to generate the password.",
        },
       
    ];
    //call on event listener 
    $(".btn-block").on("click", (event) => {

        var data = null;
        switch ($(event.target).text()) {
            case "Up For Beer Review":
                data = projectData[0];
                break;
            case "Trail Scout":
                data = projectData[1];
                break;
            case "Note Taker":
                data = projectData[2];
                break;
            case "Password Generator":
                data = projectData[3];
                break;
            default: 
                image = "./assets/me-again.gif"
        }

        var template = `
        <img src="${data.image}" style="width: 725px; height: 450px" class="card-img" alt="...">

        <div class="card-body">
            <h3 class="card-title text-center">${data.projectName}</h3>
            <p class="card-text">${data.description}</p>
            <li class="list-group-item">
            <button type='button' class='btn btn-light'><a href="${data.deployLink}">Deployed URL</a></button>
            <button type='button' class='btn btn-light'><a href="${data.repoLink}">GitHub Repository</a></button>  
            </li>
        </div>
            `;

        $(".template-insertion-zone").html(template);
    });


});
{/* <div>
<h2 class='text-center'>${data.projectName}</div>
<img class='img-fluid img-thumbnail' alt='responsive image' src="${data.image}"/>
<p>
<button type='button' class='btn btn-light'><a href="${data.repoLink}">GitHub Repository</a></button>
    </p>
<p>
<button type='button' class='btn btn-light'><a href="${data.deployLink}">Deployed URL</a></button>
    </p>
<p>${data.description}</p>
</div> */}