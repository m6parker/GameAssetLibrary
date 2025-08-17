const spriteImgContainer = document.getElementById('sprites');
const tilesetImgContainer = document.getElementById('tilesets');
const spritesheetsImgContainer = document.getElementById('spritesheets');
const uiImageContainer = document.getElementById('ui');

function displayImages() {

    // Sprite section
    spriteFiles.forEach(imageFile => {
        createElements('sprites', imageFile);
    });

    // Tileset Section
    tilesetFiles.forEach(imageFile => {
        createElements('tilesets', imageFile);
    });

    // spritesheet Section
    spritesheetsFiles.forEach(imageFile => {
        createElements('spritesheets', imageFile);
    });

    // ui section
    uiFiles.forEach(imageFile => {
        createElements('ui', imageFile);
    });
}

function createElements(category, imageFile){
    //create the image elements
    const imageContainer = document.createElement('div');
    const imgElement = document.createElement('img');
    const imageName = document.createElement('div');
    const downloadLink = document.createElement('a');

    //add attributes
    downloadLink.href = `img/${category}/${imageFile}`;
    downloadLink.setAttribute('download', imageFile);
    downloadLink.classList.add('download-lonk');
    downloadLink.innerHTML += 'download';
    imgElement.src = `img/${category}/${imageFile}`;
    imgElement.alt = imageFile;
    imgElement.className = 'file-item';
    imageName.textContent = imageFile;

    //attach them to the page
    imageContainer.appendChild(imageName);
    imageContainer.appendChild(imgElement);
    imageContainer.appendChild(downloadLink);
    switch(category){
        case 'sprites': spriteImgContainer.appendChild(imageContainer); break;
        case 'spritesheets': spritesheetsImgContainer.appendChild(imageContainer); break;
        case 'tilesets': tilesetImgContainer.appendChild(imageContainer); break;
        case 'ui': uiImageContainer.appendChild(imageContainer); break;
        default: spriteImgContainer.appendChild(imageContainer); break;
    }

    // select files
    imgElement.addEventListener('click', () => {
        zoomIn(imgElement, imageFile, category);
    });
}

// switch between tabs for each category type
function openTab(event, tabName) {
    // hide all elements with tab-content
    var tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }

    // remove all selected buttons
    var tabButtons = document.getElementsByClassName("tab-button");
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].className = tabButtons[i].className.replace(" selected", "");
    }

    // show current tab, add selected to button that opened the tab
    document.getElementById(tabName).style.display = "grid";
    event.currentTarget.className += " selected";
}

// shows a larger version of the image
function zoomIn(fileElement, fileName, category){
    fileElement.classList.toggle('selected');
    document.querySelector('.backdrop').classList.remove('hidden');
    document.querySelector('.zoomed-img').setAttribute('src', `img/${category}/${fileName}`);

}

// removes larger image
document.querySelector('.preview-text').addEventListener('click', ()=> {
    document.querySelector('.backdrop').classList.add('hidden');
});

const toggleSwitch = document.querySelector('.toggle-switch');
let toggleText = document.querySelector('.toggle-text');
const zoomContainer = document.querySelector('.zoom-container');
toggleSwitch.addEventListener('change', ()=> {
    toggleText.textContent = toggleSwitch.checked ? 'light' : 'dark';
    zoomContainer.classList.toggle('dark-mode');
});


// show
displayImages();
