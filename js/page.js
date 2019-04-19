var current_page = 1;
var records_per_page = 3;


function prevPage()
{
  if (current_page > 1) {
    current_page--;
    changePage(current_page);
  }
}

function nextPage()
{
  if (current_page < numPages()) {
    current_page++;
    changePage(current_page);
  }
}
    
function changePage(page)
{
  var btn_next = document.getElementById('btn_next');
  var btn_prev = document.getElementById('btn_prev');
  var listing_table = $('#listingTable');
  var page_span = document.getElementById('page');
  listing_table.html('');

  if (page < 1) page = 1;
  if (page > numPages()) page = numPages();

  listing_table.innerHTML = '';
 
  for (var i = (page -1) * records_per_page; i < (page * records_per_page); i++) {
    listing_table.append(Image.all[i].renderImages());
    console.log(i);
  }
  page_span.innerHTML = page;
  $('img').parent().show();


  if (page === 1) {
    btn_prev.style.visibility = 'hidden';
  } else {
    btn_prev.style.visibility = 'visible';
  }

  if (page === numPages()) {
    btn_next.style.visibility = 'hidden';
  } else {
    btn_next.style.visibility = 'visible';
  }
}

function numPages()
{
  return Math.ceil(Image.all.length / records_per_page);
};

//I used a JSFiddle get logic for pageination http://jsfiddle.net/Lzp0dw83/