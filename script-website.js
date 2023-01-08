Array.from(document.getElementsByTagName('button')).forEach( element => {
    element.addEventListener('click', event => {
        console.log(element);
        if (element.nextElementSibling.classList.value){
            element.nextElementSibling.classList = "";
        } else {
            element.nextElementSibling.classList = "rolled";
        }  
    });
});