/* Shopping list exercise using Object Oriented Programming */

"use strict";

(function () {

  /* constructor function for Product */
  function Product(productName, productPrice, expirationDate) {
    this.productID = Math.floor(Math.random() * 90000) + 10000;
    this.productName = productName;
    this.productPrice = productPrice.toFixed(2);
    this.expirationDate = expirationDate;
    this.getInfo = function () {
      this.firstLetter = this.productName[0];
      this.lastLetter = this.productName[productName.length - 1];
      this.productCode = this.firstLetter.toUpperCase() + this.lastLetter.toUpperCase() + "" + this.productID + ", " + this.productName + ", " + this.productPrice;
      return this.productCode;
    };
  };

  /* constructor function for ShoppingBag */
  function ShoppingBag() {
    this.date = new Date();
    this.currentYear = this.date.getFullYear();
    this.productList = [];
    this.addProduct = function (product) {
      if (this.currentYear <= product.expirationDate) {
        this.productList.push(product);
      }
    };
    this.getTotalPrice = function () {
      var sum = 0;
      this.productList.forEach(function (num) {
        sum += parseFloat(num.productPrice);
      })
      return sum.toFixed(2);
    };
    this.getAveragePrice = function () {
      var sum = 0;
      this.productList.forEach(function (num) {
        sum += parseFloat(num.productPrice);
      });
      this.averagePrice = sum / this.productList.length;
      return this.averagePrice.toFixed(3);
    };
    this.getMostExpensive = function () {
      var mostExpensivePrice = 0;
      var mostExpensiveProduct;
      this.productList.forEach(function (num) {
        if (parseFloat(num.productPrice) > mostExpensivePrice) {
          mostExpensivePrice = parseFloat(num.productPrice);
          mostExpensiveProduct = num.productName;
        }
      })
      return mostExpensiveProduct + ", " + mostExpensivePrice;
    };
  };

  /* constructor function for PaymentCard */
  function PaymentCard(balance, status, valid) {
    this.balance = balance.toFixed(2);
    this.status = status;
    this.valid = valid;
  };

  /* creating object */
  var product1 = new Product("Banana", 129.3178, 2023);
  var product2 = new Product("Sugar", 13.5689, 2025);
  var product3 = new Product("Milk", 65.8794, 2021);
  var shoppingBag = new ShoppingBag();
  var paymentCard = new PaymentCard(1012.4564, "active", 2022);

  /* adding products to shooping list */
  shoppingBag.addProduct(product1);
  shoppingBag.addProduct(product2);
  shoppingBag.addProduct(product3);

  /* function for printing information */
  function checkoutAndBuy(shoppingBag, paymentCard) {

    /* check if there is inaf ammount on card, if there is not show message */
    if (parseFloat(paymentCard.balance) >= shoppingBag.getTotalPrice()) {

      console.log("Product list");
      console.log("------------------------");
      shoppingBag.productList.forEach(function (num) {
        console.log(num.getInfo());
      });
      console.log("------------------------");
      console.log("Total price of your product list is ", shoppingBag.getTotalPrice());
      console.log("Average price of your product list is ", shoppingBag.getAveragePrice());
      console.log("The most expensive product in your list is ", shoppingBag.getMostExpensive());
      console.log("------------------------");
      console.log("Purchase is successful!!! ");

    } else {
      console.log("Total price of your product list is ", shoppingBag.getTotalPrice());
      console.log("Your amount is ", paymentCard.balance);
      console.log("The amount is missing to complete the purchase!!!");
    }
  }

  checkoutAndBuy(shoppingBag, paymentCard);
})();