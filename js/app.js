'use strict';

$.get( './data/page-1.json', function( data ) {
  data.forEach(function(image) {
    new Image(image);
  });
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

function renderImages() {  
   let imageTemplate =  $('#photo-template').clone();
   imageTemplate.find('img').attr('src', "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg");
   imageTemplate.find('h2').text('hello world');
   imageTemplate.find('p').text('hello world');
   imageTemplate.appendTo('body');
}

renderImages();
