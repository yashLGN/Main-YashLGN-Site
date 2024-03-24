const titleDiv = document.querySelector('.title');
const mainStuff = document.querySelector('.mainstuff');
const buttonColor = document.querySelector('.theme');
const outerColorleft = document.querySelectorAll('.left');
const outerColorright = document.querySelectorAll('.right');

function mainDiv() {
    const currentColor = titleDiv.style.backgroundColor;

    if (currentColor === 'rgb(76, 124, 142)' || currentColor === '#4c7c8e' || currentColor === '') 
    {
        titleDiv.style.backgroundColor = '#b9414b';
        titleDiv.style.transition = 'background-color 1s';
        mainStuff.style.backgroundColor = 'black';
        mainStuff.style.transition = 'background-color 1s';
        buttonColor.style.backgroundColor = '#b9414b';
        buttonColor.style.color = 'white';
        buttonColor.style.borderColor = 'white';
        outerColorleft.forEach(element => {
            element.style.backgroundColor = 'black';});
        outerColorleft.forEach(element => {
            element.style.color = 'white';});
            outerColorright.forEach(element => {
                element.style.backgroundColor = 'black';});
            outerColorright.forEach(element => {
                element.style.color = 'white';});
    }
    else {
        titleDiv.style.backgroundColor = '#4c7c8e';
        mainStuff.style.backgroundColor = 'white';
        buttonColor.style.backgroundColor = '#4c7c8e';
        buttonColor.style.color = 'black';
        buttonColor.style.borderColor = 'black';
        outerColorleft.forEach(element => {
            element.style.backgroundColor = 'white';});
        outerColorleft.forEach(element => {
                element.style.color = 'black';});
        outerColorright.forEach(element => {
                element.style.backgroundColor = 'white';});
        outerColorright.forEach(element => {
                element.style.color = 'black';});
    }
}