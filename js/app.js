'use strict';

$.get( './data/page-1.json', function( data ) {
  // console.log(data[0].title);
  // console.log(data[0].image_url);
  data.forEach(function(image) {
    new Image(image); 
  });
});


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
   imageTemplate.find('h2').text('hello world');
}

renderImages();
