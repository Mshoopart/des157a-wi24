(function (){
    "use strict";
    console.log("reading js")

    //setting up images as an array for overlay stacking
    const myImages = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        'image4.jpg'];

    let currentImage = 0;

    /*if (currentImage = 0) {
        document.getElementById('title').innerHTML = `Level 6`;
    } else if (currentImage = 1) {
        document.getElementById('title').innerHTML = `Level 12`;
    } else if (currentImage = 2) {
        document.getElementById('title').innerHTML = `Level 16`;
    } else {
        document.getElementById('title').innerHTML = `Level 21`;
    };*/

    const container = document.getElementById('content');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('previous');
    
   nextBtn.addEventListener('click', function (event) {
        event.preventDefault();

        currentImage++;
        if(currentImage > (myImages.length-1)) {currentImage = 0;}

        swapImage();
   });

   prevBtn.addEventListener('click', function (event) {
        event.preventDefault();

        currentImage--;
        if(currentImage < 0) {currentImage = myImages.length-1}

        swapImage();
   });

    function swapImage() {
        const newImage = document.createElement('img');
        newImage.src = `images/${myImages[currentImage]}`;
        newImage.className = "fadeinimg";
        container.appendChild(newImage);

       if(container.children.length > 2) {
            container.removeChild(container.children[0]);
       };
    };  
}());

    //document.getElementById('next').addEventListener('click', nextPhoto);

    //document.getElementById('previous').addEventListener('click', previousPhoto);

    /*function nextPhoto(){
        currentImage++;

        if(currentImage > myImages.length-1) {
            currentImage = 0;
        }

        slide.src = `images/${myImages[currentImage]}`;
    }

    function previousPhoto(){
        currentImage--;

        if(currentImage < 0) {
            currentImage = myImages.length-1;
        }

        slide.src = `images/${myImages[currentImage]}`;
    }*/