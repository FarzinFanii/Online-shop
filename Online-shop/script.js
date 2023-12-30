const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search-input");
const categoryFilter = document.getElementById("category-filter");
let userIcon = document.getElementById("user");

//all product details
const products = [
  {
    id: 1,
    image: "./img/tamara-bellis-zDyJOj8ZXG0-unsplash.jpg",
    title: "Jeans",
    description1:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdamquis soluta molestiae quod magnam vel",
    description2:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit quomagnam vel.",
    price: "500T",
    category: "shirts",
  },
  {
    id: 2,
    image: "./img/parker-burchfield-tvG4WvjgsEY-unsplash.jpg",
    title: "T-Shirt",
    description1:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdamquis soluta molestiae quod magnam vel",
    description2:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit quomagnam vel.",
    price: "300T",
    category: "shirts",
  },
  {
    id: 3,
    image: "./img/neil-soni-6wdRuK7bVTE-unsplash.jpg",
    title: "phone",
    description1:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdamquis soluta molestiae quod magnam vel",
    description2:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit quomagnam vel.",
    price: "20m",
    category: "technology",
  },
  {
    id: 4,
    image: "./img/joshua-woroniecki-lzh3hPtJz9c-unsplash (1).jpg",
    title: "laptop",
    description1:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdamquis soluta molestiae quod magnam vel",
    description2:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit quomagnam vel.",
    price: "60m",
    category: "technology",
  },
  {
    id: 5,
    image: "./img/glen-carrie-4EQAZWrzCJc-unsplash (1).jpg",
    title: "pen",
    description1:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdamquis soluta molestiae quod magnam vel",
    description2:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit quomagnam vel.",
    price: "20T",
    category: "stationery",
  },
  {
    id: 6,
    image: "./img/sun-lingyan-_H0fjILH5Vw-unsplash.jpg",
    title: "backpack",
    description1:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdamquis soluta molestiae quod magnam vel",
    description2:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit quomagnam vel.",
    price: "320T",
    category: "stationery",
  },
];

// userIcon click
const clickUserIcon = document.getElementById("contextMenu");

function contextHandler() {
  if (clickUserIcon.style.display === "none") {
    clickUserIcon.style.display = "block";
  } else {
    clickUserIcon.style.display = "none";
  }
}

userIcon.addEventListener("click", contextHandler);

// search input  and category
function filterProducts() {
  const searchProduct = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value.toLowerCase();

  if (selectedCategory == "all category") {
    if (searchProduct.length != 0) {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchProduct)
      );
      showProducts(filtered);
      return;
    }
    showProducts(products);
    return;
  }

  const filteredProducts = products.filter((product) => {
    console.log(product.title.includes(searchProduct));
    return (
      product.category == selectedCategory.toLowerCase() &&
      product.title.includes(searchProduct)
    );
  });

  showProducts(filteredProducts);
}

// show products in first
showProducts(products);

// eventlistener for input and category
searchInput.addEventListener("input", filterProducts);
categoryFilter.addEventListener("change", filterProducts);

// Function to show products
function showProducts(productsToShow) {
  productList.innerHTML = "";

  productsToShow.forEach((product) => {
    productList.innerHTML += `
        <div class="col-md-4">
            <div class="card bg-light">
                
                <div class="card-body pb-5 special-color-2 d-flex align-items-start justify-content-center flex-column px-0 h-100 gap-4">
                    <div class="d-flex align-items-center justify-content-center px-0 w-100">
                        <div class="w-25 d-flex justify-content-center align-items-center  six-box-height ">
                            <img src="${product.image}"  alt="${product.title}" style="max-width: 190px; max-height: 120px" class ="img-class">
                        </div>  
                    </div>      
                    <div class="px-3 pt-3">
                    <p class="card-title font-weight-bold font-italic"">${product.title}</p>
                        <p class="card-text">${product.description1}</p>
                        <p class="card-text">${product.description2}</p>
                    
                    </div>
                    <div class="d-flex align-items-center justify-content-start px-2 w-100 pt-3">
                        <div class="w-25 d-flex justify-content-center align-items-center  six-box-height ">
                            <span>$${product.price}</span>
                        </div>
                        
                        <button class="btn btn-primary ms-auto btn-sm text-white border border-light px-4 button-number" type="submit")">Add to Cart</button>
                </div>
                    </div>
                    
                    
            </div>
        </div>    
        `;
  });

  // button counter
  let counterValue = 0;

  let clickButtonNumber = document.querySelectorAll(".button-number");
  let change = document.querySelector("#cart-items");

  clickButtonNumber.forEach(function myfunc(item) {
    item.addEventListener("click", function () {
      console.log("click");
      counterValue++;
      myfunction1();
    });
  });

  function myfunction1() {
    change.textContent = counterValue;
  }
}
