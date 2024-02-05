(function(){
    "use strict";
    console.log("reading js");

    const madlib = document.querySelector("#madlib");
    document.getElementById("madlib").className = "hidden";
    const myForm = document.querySelector("#myform");

    myForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.querySelector("#name").value;
        const pluralnoun = document.querySelector("#pluralnoun").value;
        const verb1 = document.querySelector("#verb1").value;
        const object = document.querySelector("#object").value;
        const verb2 = document.querySelector("#verb2").value;
        const adj1 = document.querySelector("#adj1").value;
        const goofyname = document.querySelector("#goofyname").value;
        const verb3 = document.querySelector("#verb3").value;
        const verb4 = document.querySelector("#verb4").value;
        const adj2 = document.querySelector("#adj2").value;

        let myText;

        if(name == ""){
            myText = "Please enter a name."
            document.querySelector("#name").focus();
        } else if(pluralnoun == ""){
            myText = "Please enter a plural noun."
            document.querySelector("#pluralnoun").focus();
        } else if(verb1 == ""){
            myText = "Please enter a verb."
            document.querySelector("#verb1").focus();
        } else if(object == ""){
            myText = "Please enter an object."
            document.querySelector("#object").focus();
        } else if(verb2 == ""){
            myText = "Please enter a verb."
            document.querySelector("#verb2").focus();
        } else if(adj1 == ""){
            myText = "Please enter an adjective."
            document.querySelector("#adj1").focus();
        } else if(goofyname == ""){
            myText = "Please enter a goofy name."
            document.querySelector("#goofyname").focus();
        } else if(verb3 == ""){
            myText = "Please enter a verb."
            document.querySelector("#verb3").focus();
        } else if(verb4 == ""){
            myText = "Please enter a verb."
            document.querySelector("#verb4").focus();
        } else if(adj2 == ""){
            myText = "Please enter an adjective."
            document.querySelector("#adj2").focus();
        } else {
            myText = `${name} woke up to the ship’s ${pluralnoun} firing like crazy. These weren’t the landing sirens – the team was light years from their destination. Strange. Deciding to ${verb1}, ${name} grabbed their ${object} and ventured from their room into the ship’s halls. It was a total mess. ${name}’s teammates were ${verb2}, standing over them the ${adj1} aliens known as ${goofyname}s. In order to take back the ship, the only thing left to do was fight. ${name} and the ${goofyname}s entered a stand-off and it wasn’t until ${name} ${verb3} that the ${goofyname}s were defeated. Thankfully, ${name} was able to ${verb4} the ship and get the team back on track. Luckily, no one was seriously ${adj2}.`;

            document.querySelector("#name").value = "";
            document.querySelector("#pluralnoun").value = "";
            document.querySelector("#verb1").value = "";
            document.querySelector("#object").value = "";
            document.querySelector("#verb2").value = "";
            document.querySelector("#adj1").value = "";
            document.querySelector("#goofyname").value = "";
            document.querySelector("#verb3").value = "";
            document.querySelector("#verb4").value = "";
            document.querySelector("#adj2").value = "";
        }
        
        madlib.innerHTML = myText;

        event.preventDefault();
        document.getElementById("myform").className = "hidden";
        document.getElementById("title").className = "hidden";
        document.getElementById("madlib").className = "showing";
    });
})();