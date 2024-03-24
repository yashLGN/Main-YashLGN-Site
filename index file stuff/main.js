const img = document.querySelector('.img');
const container = document.querySelector('.container');
const imgContainer = document.querySelector('.imgcontainer');
const topDiv = document.querySelector('.top');
const bottomDiv = document.querySelector('.bottom');
const leftDiv = document.querySelector('.left');
const rightDiv = document.querySelector('.right');

img.addEventListener('mouseover', () => {
    container.style.gridTemplateRows = '1fr 250px 1fr';
    container.style.gridTemplateColumns = '1fr 250px 1fr';
    imgContainer.style.height = '250px';
    imgContainer.style.width = '250px';
    topDiv.style.backgroundColor = '#4c7c8e';
    bottomDiv.style.backgroundColor = '#4c7c8e';
    leftDiv.style.backgroundColor = '#b9414b';
    rightDiv.style.backgroundColor = '#b9414b';
});

img.addEventListener('mouseout', () => {
    container.style.gridTemplateRows = '1fr 150px 1fr';
    container.style.gridTemplateColumns = '1fr 150px 1fr';
    imgContainer.style.height = '150px';
    imgContainer.style.width = '150px';
    topDiv.style.backgroundColor = 'white';
    bottomDiv.style.backgroundColor = 'white';
    leftDiv.style.backgroundColor = 'white';
    rightDiv.style.backgroundColor = 'white';
});
