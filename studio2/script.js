(function (){
    "use strict";
    console.log("reading js")

    const showStuff = document.querySelector('main div');
    const observer = new IntersectionObserver(callBack, {threshold: 0.6});
    observer.observe(showStuff);

    function callBack(entries){
        entries.forEach(function(eachEntry){
            if(eachEntry.isIntersecting){
                eachEntry.target.className = "show";
                observer.unobserve(eachEntry.target);
            }
        });

        console.log(entries[0]);
    };

    const myImages = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        'image4.jpg'];

    let currentImage = 0;

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
        
        swapText();
    };

    function swapText(){
        if (currentImage === 0) {
            document.getElementById('title').innerHTML = "Baby Meg";
            document.getElementById('baby').className = "showing";
            document.getElementById('adolescent').className = "hidden";
            document.getElementById('teen').className = "hidden";
            document.getElementById('present').className = "hidden";

        } else if (currentImage === 1) {
            document.getElementById('title').innerHTML = "Tween Meg";
            document.getElementById('baby').className = "hidden";
            document.getElementById('adolescent').className = "showing";
            document.getElementById('teen').className = "hidden";
            document.getElementById('present').className = "hidden";
        } else if (currentImage === 2) {
            document.getElementById('title').innerHTML = "Freshman Meg";
            document.getElementById('baby').className = "hidden";
            document.getElementById('adolescent').className = "hidden";
            document.getElementById('teen').className = "showing";
            document.getElementById('present').className = "hidden";
        } else {
            document.getElementById('title').innerHTML = "Senior Meg";
            document.getElementById('baby').className = "hidden";
            document.getElementById('adolescent').className = "hidden";
            document.getElementById('teen').className = "hidden";
            document.getElementById('present').className = "showing";
        };
    }
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