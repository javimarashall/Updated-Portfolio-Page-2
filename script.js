$(document).ready(() => {

    const projectData = [
        {
            projectName: "Trail Scout",
            image: "./assets/images/trail-scout.png",
            repoLink: "https://github.com/markkhoo/Trail-Scout/tree/data",
            deployLink: "https://markkhoo.github.io/Trail-Scout/",
            description: ""
        },
        {
            projectName: "Weather Dashboard",
            image: "./assets/images/weather-dashboard.png",
            repoLink: "",
            deployLink: "https://javimarashall.github.io/Weather-Dashboard/",
            description: ""
        }, {

            projectName: "Password Generator",
            image: "./assets/.png",
            repoLink: "https://github.com/javimarashall/Password-Generator",
            deployLink: "https://javimarashall.github.io/Password-Generator/",
            description: "This application is used to generate a random password using certain criterias. Upon loading of the application, the user starts it by pressing the "generate password" button. Once the application is started, the user is prompted with a pop up windows asking the user how many characters to use. Next, the user is prompted with several questions asking if the user would like to use upper case letters, lower case letters, numbers or special characters. Depending on what the user selects as the criteria, that's what the application will use to generate the password.",
        }
    ];
//call on event listener 
    $(".btn-block").on("click", (event) => {

        var data = null;
        switch ($(event.target).text()) {
            case "Trail Scout":
                data = projectData[0];
                break;
            case "Weather Dashboard":
                data = projectData[1];
                break;
            case "Password Generator":
                data = projectData[2];
                break;
            default:
                break;
        }

        var template = `
            <div>
                <h2 class='text-center'>${data.projectName}</div>
                <img class='img-fluid img-thumbnail' alt='responsive image' src="${data.image}"/>
                <p>
                <button type='button' class='btn btn-light'><a href="${data.repoLink}">GitHub Repository</a></button>
                    </p>
                <p>
                <button type='button' class='btn btn-light'><a href="${data.deployLink}">Deployed URL</a></button>
                    </p>
                <p>${data.description}</p>
            </div>
            `;

        $(".template-insertion-zone").html(template);
    });


});