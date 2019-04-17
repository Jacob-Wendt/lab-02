'use strict';

$.get( './data/page-1.json', function( data ) {
  data.forEach(function(image) {
    new Image(image);
  });
}).done(function(){
  Image.all.forEach(function(imagesOnPage){
    imagesOnPage.renderImages();
  })
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

// function renderImages() {  
//    let imageTemplate =  $('#photo-template').clone();
//    imageTemplate.find('img').attr('src', "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg");
//    imageTemplate.find('h2').text('hello world');
//    imageTemplate.find('p').text('hello world');
//    imageTemplate.appendTo('body');
// }


