
//get dog photos on submit
function getDogPhotos(){
    $('#button').on('click',()=>{
    let imageNumber = $('#number').val();
   console.log(imageNumber); fetch(`https://dog.ceo/api/breeds/image/random/${imageNumber}`)
        .then(response =>response.json())
        .then(responseJSON => renderDogPhotos(responseJSON.message))
        .catch(error => console.log(error));
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