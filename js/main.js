import { fetchData } from "./modules/DataMiner.js";

(() => {
    console.log('loaded');
    function retrieveProjectInfo() {
        var elementID = event.target.id;
        var element = event.target.parentElement;
        fetchData(`./includes/index.php?id=${elementID}`).then(data => addText(data, element)).catch(err => console.log(err));
    }

    function addText(data, element){
        let currentUserText = element.children;
        currentUserText[2].textContent = data[0].text;
    }

    function renderThumbnails(thing) {
        let userSection = document.querySelector('.fav_things'),
            userTemplate = document.querySelector('#things-template').content;

        for (let user in thing) {
            let currentUser = userTemplate.cloneNode(true),
                currentUserText = currentUser.querySelector('.thing').children;

            currentUserText[1].src = `images/${thing[user].image}`;
            currentUserText[1].id = thing[user].id;
            currentUserText[0].textContent = thing[user].name;
            userSection.appendChild(currentUser);
        }
        userSection.addEventListener("click", retrieveProjectInfo);
    }
        
    fetchData("./includes/index.php").then(data => renderThumbnails(data)).catch(err => console.log(err));
})();