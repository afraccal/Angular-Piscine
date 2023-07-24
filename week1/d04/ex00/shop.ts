interface validate
{
  id: number;
	title: string;
	price: number;
	description: string;
	image: string;
	category: string;
  rating: any

}
class products
{
  public
    title: string;
	  image: string;
  constructor (title, image)
  {
    this.title = title;
    this.image = image;
  }
}

class category extends products
{
  public
    id: number;
	  price: number;
	  description: string;
	  category: string;
    rating: any
    constructor (title, image, id, price, description, category, rating)
  {
      super(title, image);
      this.id = id;
      this.price = price;
      this.description = description;
      this.category = category;
      this.rating = rating;
  }
  
}

interface validates extends Array<validate>{}

  let data : validates;
  let xhttp = new XMLHttpRequest;
  xhttp.open("GET", "https://fakestoreapi.com/products", true);
  
  let card = document.getElementById("card") as HTMLDivElement;

  let i : number;
  
  xhttp.onreadystatechange = function (){
    if (this.readyState == 4 && this.status == 200)
    {
      data = JSON.parse(this.responseText);
      for(i = 0; i < data.length; ++i)
      {
      let clone = card.cloneNode(true) as HTMLDivElement;
      let test = clone.querySelector("#card_img") as HTMLImageElement;
      test.src = data[i].image;
      clone.querySelector(".cardprice")!.innerHTML = String(data[i].price);
      clone.querySelector(".carddescription")!.innerHTML = data[i].description;
      clone.querySelector(".cardcategory")!.innerHTML = data[i]. category;
      clone.querySelector(".cardtitle")!.innerHTML = data[i].title; 
      document.querySelector(".cardcontainer")!.appendChild(clone);
    }
  card.remove();
  }
}
xhttp.send();

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
function temp_test()
{
  modal!.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closing() {
  modal!.style.display = "none";
}
let count = 0;
function add_to_cart() {
  count++
  document.querySelector(".counter")!.innerHTML = String(count);
  modal!.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal!.style.display = "none";
  }
}

let view = "card";

function change(){
  const card_cont = document.querySelector(".cardcontainer");
  const switcher =  document.querySelector(".switcher");
  let cards = document.querySelectorAll(".inside");
  if(switcher!.innerHTML == "List")
  {
  for (let i = 0; i < cards.length ; i++)
    {
      cards[i].classList.add("riga");
      cards[i].classList.remove("column");
    }
    switcher!.innerHTML = "Cards"
  }
  else if(switcher!.innerHTML == "Cards")
  {
  for (let i = 0; i < cards.length ; i++)
    {
      cards[i].classList.add("column");
      cards[i].classList.remove("riga");
    }
    switcher!.innerHTML = "List"
  }
}