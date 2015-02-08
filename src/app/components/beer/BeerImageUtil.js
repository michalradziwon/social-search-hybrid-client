
/**
 * returns an image for a given beer object. for most of beers the url is included in the beer object.
 * if the URL is not included, we are returning hardcoded image.... for details see the code below.
 * <p>
 *   This is probably the full list of beers without defined image URL:
 *
 *   STELLA ARTOIS CIDRE PEAR
 *   STELLA ARTOIS
 *   Stella Artois
 *   STELLA ARTOIS 4%
 *
 *   BECK'S PREMIER LIGHT
 *   BECK'S VIER
 *
 *   BUDWEISER
 *   BUDWEISER BREW NO.66
 *
 *
 *   BODDINGTON'S DRAUGHT
 *
 *   BASS PREMIUM PALE ALE
 *   GOLD LABEL
 *
 *   </p>
 */
module.exports.getBeerImage = function(beerObj){
  if(beerObj.imageUrl && beerObj.imageUrl.length > 0){
    return beerObj.imageUrl;
  }else{
    if(beerObj.name && beerObj.name.toUpperCase().indexOf("STELLA") != -1){
      return "http://tapintoyourbeer.com/documents/img_brand_stella7.png"; // thats image for "id":"423","name":"Stella Artois"
    }
    if(beerObj.name && beerObj.name.toUpperCase().indexOf("BECK") != -1){
      return "http://tapintoyourbeer.com/documents/img_brand_becks3.png"; // thats image for "id":"27","name":"Beck's"
    }
    if(beerObj.name && beerObj.name.toUpperCase().indexOf("BUDWEISER") != -1){
      return "http://tapintoyourbeer.com/documents/Budweiser%20UK.png"; // thats image for "id":"21","name":"Budweiser"
    }

    // UGLY ONE (we are serving image of a different taste of that beer)
    if(beerObj.name && beerObj.name.toUpperCase().indexOf("BODDINGTON") != -1){
      return "http://tapintoyourbeer.com/documents/Boddingtons.png"; // thats image for "id":"69","name":"Boddingtons Pub Ale"
    }

    if(beerObj.name && beerObj.name.toUpperCase().indexOf("BASS PREMIUM") != -1){
      return "http://tapintoyourbeer.com/documents/BASS%20PALE%20ALE.png"; // thats image for "id":"211","name":"Bass Pale Ale"
    }

    // UGLY !!! there is no similar beer in the entire repository -- we return a link from external page
    if(beerObj.name && beerObj.name.toUpperCase().indexOf("GOLD LABEL") != -1){
      return "http://www.kbsinstitute.org/images/pullo/1629.jpg";
    }



    /*

     */
  }

};
