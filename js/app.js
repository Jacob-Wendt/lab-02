'use strict';

$.get( './data/page-1.json', function( data ) {
  data.forEach(function(image) {
    new Image(image);
  });
}).done(function(){
  Image.all.forEach(function(imagesOnPage){
    imagesOnPage.renderImages();
   
  });
  filerByKeyword();
});

//renderImages
Image.all = [];

function Image (image_obj) {
  this.image_url = image_obj.image_url;
  this.title = image_obj.title;
  this.description = image_obj.description;
  this.keyword = image_obj.keyword;
  this.horns = image_obj.horns;
  Image.all.push(this);

}
console.log(Image.all);


Image.prototype.renderImages = function() {
  let imageTemplate =  $('#photo-template').clone();
  imageTemplate.find('h2').text(this.title);
  imageTemplate.find('img').attr('src', this.image_url);
  imageTemplate.find('p').text(this.description);
  imageTemplate.appendTo('main');

};

function filerByKeyword() {
  let keywordsArray = [];
  for (let i = 0; i < Image.all.length; i++) {
    let newKeyword = Image.all[i].keyword;
    keywordsArray.indexOf(newKeyword) === -1 ? keywordsArray.push(newKeyword) : console.log('there is a duplicate');
  }
//   keywordsArray.forEach(function(keyword) {
//     let new $('option')
//   })
  console.log("new" + keywordsArray.length);
}



