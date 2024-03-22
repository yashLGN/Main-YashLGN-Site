const img = document.querySelector('.img');
const container = document.querySelector('.container');
const imgContainer = document.querySelector('.imgcontainer');

img.addEventListener('mouseover', () => {
    container.style.gridTemplateRows = '1fr 250px 1fr';
    container.style.gridTemplateColumns = '1fr 250px 1fr';
    imgContainer.style.height = '250px';
    imgContainer.style.width = '250px';
});

img.addEventListener('mouseout', () => {
    container.style.gridTemplateRows = '1fr 150px 1fr';
    container.style.gridTemplateColumns = '1fr 150px 1fr';
    imgContainer.style.height = '150px';
    imgContainer.style.width = '150px';
});
