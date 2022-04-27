const AMOUNT_ITEMS_DEFAULT_WILL_SHOW = 12;
const PRODUCTS = [
    {
        id: 1,
        name: "Modern hat",
        price: "$41",
        rate: 4,      
        imagePath: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/shop-1-img-1-650x650.jpg",
    },
    {
        id: 2,
        name: "Skis",
        price: "$760",
        rate: 5,      
        imagePath: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/shop-1-img-2-650x650.jpg",
    },
    {
        id: 3,
        name: "Camera",
        price: "$420",
        rate: 5,      
        imagePath: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/shop-1-img-3-650x650.jpg",
    },
    {
        id: 4,
        name: "Backpack",
        price: "$190",
        rate: 4,      
        imagePath: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/shop-1-img-4-650x650.jpg",
    },
    {
        id: 5,
        name: "Towel",
        price: "$30",
        rate: 3,      
        imagePath: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/shop-1-img-5-650x650.jpg",
    },
    {
        id: 6,
        name: "Compass",
        price: "$240",
        rate: 5,      
        imagePath: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/shop-1-img-6-650x650.jpg",
    },
    {
        id: 7,
        name: "Thermos",
        price: "$100",
        rate: 4,      
        imagePath: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/shop-1-img-7-650x650.jpg",
    },
    {
        id: 8,
        name: "Sunglasses",
        price: "$120",
        rate: 4,      
        imagePath: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/shop-1-img-8-650x650.jpg",
    },
    {
        id: 9,
        name: "Summer Hat",
        price: "$96",
        rate: 3,      
        imagePath: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/shop-1-img-9-650x650.jpg",
    },
    {
        id: 10,
        name: "Star",
        price: "$109",
        rate: 5,      
        imagePath: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/shop-1-img-10-650x650.jpg",
    },
    {
        id: 11,
        name: "Flip-flops",
        price: "$39",
        rate: 4,      
        imagePath: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/shop-1-img-11-650x650.jpg",
    },
    {
        id: 12,
        name: "Rope",
        price: "$70",
        rate: 5,      
        imagePath: "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/shop-1-img-12-650x650.jpg",
    },
]

//render all product

function templateAppend(id, imagePath, name, price, rate){
    return `
    <div class="col l-4">
    <div class="product-item" data-id=${id}>
    <div class="product-item__image">
            <a class='product-detail-page' href='/productdetail.html'>
            <img src="${imagePath}" alt="" class="product-item__img">
            <btn class="product-item__addcart">Add to cart</btn>
            </a>
        </div>
        <h2 class="product-item__name">${name}</h2>
        <div class="product-item__action">
            <h3 class="product-item__action-price">${price}</h3>
            <div class="product-item__action-rate">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
            </div>
        </div>
      
</div>
    `
}

const render = PRODUCTS
  .map(item => {
    $(".product-list .row").append(
      templateAppend(item.id, item.imagePath, item.name, item.price, item.rate)
    );
  });

  //processing range slider with 2 hands
$(function () {
    $("#slider-range").slider({
      range: true,
      min: 20,
      max: 760,
      values: [20, 760],
      slide: function (event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
      " - $" + $("#slider-range").slider("values", 1));
  });


  
  //pagination
  // BUTTON SHOW: AMOUNT ITEMS WHILL SHOW
function renderItemDefault(amountItem) {
    $(`.product-detail:gt(${amountItem})`).hide();
  
  }
  //renderItemDefault(AMOUNT_ITEMS_DEFAULT_WILL_SHOW);
  
  function getValueItemWillShow() {
    return $("#show-item__select").val() ? $("#show-item__select").val() : AMOUNT_ITEMS_DEFAULT_WILL_SHOW;
  }
  $("#show-item__select").on("change", function () {
    const valueItemWillShow = getValueItemWillShow();
    var amountItemsWillShow = +valueItemWillShow - 1;
    // var amtItems = amountItemsWillShow;
    console.log(`product-detail:gt(${amountItemsWillShow})`);
    $(".product-detail").show();
    $(`.product-detail:gt(${amountItemsWillShow})`).hide();
  
  
  });
  
  // let amountItemsWillShow = getValueItemWillShow() != AMOUNT_ITEMS_DEFAULT_WILL_SHOW ? getValueItemWillShow() : AMOUNT_ITEMS_DEFAULT_WILL_SHOW;
  $('#product-pagination').pagination({
    dataSource: PRODUCTS,
    pageSize: AMOUNT_ITEMS_DEFAULT_WILL_SHOW,
    showPrevious: true,
    showNext: true,
  
  
  })
  
  $(document).on("change", function (e) {
    e.preventDefault;
  
    $('#product-pagination').pagination({
      dataSource: PRODUCTS,
      pageSize: getValueItemWillShow(),
      showPrevious: true,
      showNext: true,
  
    })
  
  });

  const goToProductPage = (selector) => {
    $(document).on("click", selector, function (e) {
  
      e.preventDefault();
      const id = $(this).closest(".product-item").data("id");
  
      const item = PRODUCTS.find(val => val.id === id);
  
      //save to localStorage
      localStorage.setItem("item", JSON.stringify(item));
  
      window.location.href = "/productdetail.html";
    });
  }
  
  goToProductPage(".product-detail-page");
  goToProductPage(".btn");

  ssssss