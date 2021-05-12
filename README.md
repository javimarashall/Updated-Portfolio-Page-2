# Updated-Portfolio-Page-2

## Summary
This software contains an application of my work as a full stack web developer student. This application contains the latest projects I worked on, Up For Beer Review and Trail Scout. The application also contains 2 of my homework assignments, Note Taker and password generator. 

At the loading of the site, the page displays a card on the left side of the window with a brief description of who I am and a photograph of myself. The site display a card with a list of both my projects followed by a list of my homework assignments. The application also displays a contact me with links to my email, github, and linkedin. Also, if there is anybody interested in contacting me for work, I have a link to a downloadable resume. 

If the user of the application is interested in checking out my projects or homework assignments, they can click on the button that is on the left side and all of the information for the project or homework will show on the left side of the screen. When the assignment is rendered, it displays the title of the project, a description of the project, a deployed url, and github repository link to the project. 

![site](./assets/portfolio-page-2.gif)

## Code Snippet
I included this code snippet of javascript template literals because it makes it so much easier to be able to render html content into the index.html page for several things to be displayed. 

```javascript
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
```
### Technologies Used:
* HTML - Used for making the website
* CSS - Used to style the site
* Javascript - Used to append elements to the DOM
* Bootstrap - Used to make the css framework
* Git - Used for pushing up to github
* GitHub - Used to store the repository for the application

## Repository Link
https://github.com/javimarashall/Updated-Portfolio-Page-2

## Deploy Link
https://javimarashall.github.io/Updated-Portfolio-Page-2/


## Personal Links
[Github](https://github.com/javimarashall)<br>
[Linkedin](https://www.linkedin.com/in/javier-mondragon-7b471719b/)