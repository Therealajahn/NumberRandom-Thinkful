
//get dog photos on submit
function getDogPhotos(){
    $('form').on('submit',()=>{
    event.preventDefault();
    let imageNumber = $('#number').val();
    if(imageNumber > 1){    
        fetch(`https://dog.ceo/api/breeds/image/random/${imageNumber}`)
            .then(response =>response.json())
            .then(responseJSON => renderDogPhotos(responseJSON.message))
            .catch(error => console.log(error));
        }else{
         $('form').append('<h1>Enter a number</h1>')
        }
        
    })
    
}
//put images in a img tag with a for each
function renderDogPhotos(dogPhotos) {
    $('img').remove();
    let num = 0;
    
    dogPhotos.forEach((dog)=>{
        num += 1;
        $('form').append(`<img src=${dog} alt=dog${num}>`)
    })
}


$(getDogPhotos());