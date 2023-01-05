Array.from(document.getElementsByTagName('button')).forEach( element => {
    element.addEventListener('click', event => {
        console.log(`Clicked on: ${event.target}!`);
    });
});