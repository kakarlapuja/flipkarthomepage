function changemode(){
    let mybody = document.body;
    mybody.classList.toggle('mydark')
    if(document.body.classList.contains("mydark"))
            {
                icon.src="https://static.vecteezy.com/system/resources/previews/000/550/828/original/sun-icon-vector.jpg"; 
            }
             else{
                 icon.src="https://img.freepik.com/free-icon/last-quarte-phase-moon_318-824.jpg";
            }
        }