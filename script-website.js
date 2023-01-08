Array.from(document.getElementsByTagName('button')).forEach( element => {
    element.addEventListener('click', event => {
        console.log(element);
        if (element.nextElementSibling.classList.value){
            element.nextElementSibling.classList = "";
            let styles = window.getComputedStyle(element.querySelector('h2'), ':after');
            styles.setProperty('animation', 'arrowRotate');
        } else {
            element.nextElementSibling.classList = "rolled";
        }  
    });
});