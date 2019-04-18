/********** Pagination ***********/



let list = [];
let pageList = [];
let currentPage = 1;  //use this to keep track of where i am in the pagination
let numberPerPage = 6;  //this will be how many images we have up at a time max
let numberOfPages = 1;  //this will be how many pages i have (hopefully generate it on load somehow?)

funtion makeList(){                   
  for (i=0; i < image.all.length; i++){             //this makes the array i will use to paginate
    list.push(image.all[i]);
  };
    numberOfPages = numberofPages();
};

function numberofPages() {
  return math.Ceil(list.length / numberPerPage);                    // this tells me how many pages i have
};

/*make buttones in the html to hold each funtion
first button
first()

next button
nextpage()

preivious button
previouspage()

last button
last()*/

function firstPage() {                            //these will help change pages
  currentPage = 1;
  loadList();
};

fucntion nextPage() {
  currentPage +=1;
  loadList();
};

function previousPage(){
  currentPage -= 1;
  loadList();
}

function lastPage(){                           //**** page number altering here and ^
  currentPage = numberOfPages;
  loadList();
}

function loadList(){
  var begining = ((currentPage -1) * numberPerPage)
  var end =  begin * numberPerPage

  pageList = list.slice(begining, end);              //takes a copy of image in the list array from begining to end
  drawList();
  check();
};

function drawList() {

};

function load() {                  //this will run it all
    makelist();
    loadList();
};
