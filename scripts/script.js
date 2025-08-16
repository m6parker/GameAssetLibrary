
function displayImages() {
    const imagesContainer = document.getElementById('sprites');

    // Sprite section
    spriteFiles.forEach(imageFile => {

        //create the image elements
        const imageContainer = document.createElement('div');
        const imgElement = document.createElement('img');
        const downloadLink = document.createElement('a');

        //add attributes
        downloadLink.href = `img/sprites/${imageFile}`;
        downloadLink.setAttribute('download', imageFile);
        imgElement.src = `img/sprites/${imageFile}`;
        imgElement.alt = imageFile;
        imgElement.className = 'file-item';

        //attach them to the page
        imageContainer.appendChild(imgElement);
        imageContainer.appendChild(downloadLink);
        imagesContainer.appendChild(imageContainer);
        downloadLink.innerHTML += 'download';

        // select files
        imgElement.addEventListener('click', () => {
            zoomIn(imgElement, imageFile, 'sprites');
        });
    });

    // Tileset Section
    tilesetFiles.forEach(imageFile => {

        //create the image elements
        const imageContainer = document.createElement('div');
        const imgElement = document.createElement('img');
        const downloadLink = document.createElement('a');

        //add attributes
        downloadLink.href = `img/tilesets/${imageFile}`;
        downloadLink.setAttribute('download', imageFile);
        imgElement.src = `img/tilesets/${imageFile}`;
        imgElement.alt = imageFile;
        imgElement.className = 'file-item';

        //attach them to the page
        imageContainer.appendChild(imgElement);
        imageContainer.appendChild(downloadLink);
        imagesContainer.appendChild(imageContainer);
        downloadLink.innerHTML += 'download';

        // select files
        imgElement.addEventListener('click', () => {
            zoomIn(imgElement, imageFile, 'tilesets');
        });
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


// show
displayImages();
