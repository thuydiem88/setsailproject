const item = localStorage.getItem("item");

const itemObject = JSON.parse(item);

let price = itemObject.price;

let pricePro = price.split("-")[0].substr(1);

let list_products = [];
let list_cart_product = [];

//làm phẳng array list_cart_product
list_cart_product = list_cart_product.flat();
// function saveItemToCart(key, value) {
//   localStorage.setItem(key, JSON.stringify(value));
// }
// function updateAmountIncart(amountProductIncart) {
//   $(".btn-cart .amount").text(amountProductIncart);
// }
// updateAmountIncart(list_cart_product.length);

const renderItem = (item) => {
  // $(".pro-cat").text(item.cat);
  $(".pro-title").text(item.title);
  $(".pro-price").text(item.price);

  // $(".pro-img").attr("src", item.images[0]);
  // $(".pro-img2").attr("src", item.images[1]);
  // $(".pro-img3").attr("src", item.images[2]);
  // $(".pro-img4").attr("src", item.images[3]);

}


const renderImgProduct = (item) => {
  $(".owl-dot:nth-child(1)").html(`<img src="${item.images[0]}">`);
  $(".owl-dot:nth-child(2)").html(`<img src="${item.images[1]}">`);
  $(".owl-dot:nth-child(3)").html(`<img src="${item.images[2]}">`);
  $(".owl-dot:nth-child(4)").html(`<img src="${item.images[3]}">`);


}
renderItem(itemObject);





$("#pro").click(function () {
    window.location.href = "/categories.html";
  })