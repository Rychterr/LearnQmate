require('dotenv').config();
var generalData = require("../testData/generalData.json");
var elementsData = require("../testData/elementsData.json");
//var standardZPO = require("../data/masterData/standardZPO.json");

//var listReport = require("../modules/listReport.js");
var objectPageDoc = require("../modules/objectPageDoc.js");
var objectPageCartHome = require("../modules/objectPageCartHome.js");
var objectPageCartCategory = require('../modules/objectPageCartCategory.js');
var objectPageCartProduct = require('../modules/objectPageCartProduct.js');

describe("Learn qmate 2", function() {

    it("Step 01: Navgate to app", async function() {
        await ui5.navigation.navigateToApplication(generalData.appName);
    });

    it("Step 02: Accept cookies", async function () {
        await objectPageDoc.clickButton(
            elementsData.button.acceptCookies.metadata,
            elementsData.button.acceptCookies.id
        );
    });

    it("Step 03: Navigate to shopping cart", async function () {
        await objectPageDoc.navigateAndSwitchTab(
            elementsData.section.shoppingCart.metadata,
            elementsData.section.shoppingCart.id,
            elementsData.section.shoppingCart.windowName
        )
      });

    it("Step 04: Change category to desktop computers", async function () {
        await objectPageCartHome.selectCategory(
            elementsData.categories.desktopComputers.bindingContextPath
        )
    });

    it("Step 05: Open filter", async function() {
        await objectPageCartCategory.clickButton(
            elementsData.button.filter.metadata,
            elementsData.button.filter.id
        )
    });
    
    it("Step 06: Set availability filter", async function() {
       await objectPageCartCategory.chooseFilterOption(elementsData.filterTitles.availability.title)
       await objectPageCartCategory.checkCheckbox(elementsData.availailityFilters.available)
       
       await objectPageCartCategory.clickButton(
        elementsData.button.filterBack.metadata,
        elementsData.button.filterBack.id
        )
    });

    it("Step 07: Set price filter", async function() {
        await objectPageCartCategory.chooseFilterOption(elementsData.filterTitles.price.title)
        await objectPageCartCategory.priceSlider(25);

        await objectPageCartCategory.clickButton(
            elementsData.button.filterOk.metadata,
            elementsData.button.filterOk.id
            )
    });

    it("Step 08: Add first product to cart", async function() {
        await objectPageCartCategory.chooseFirstProduct()
        await objectPageCartProduct.clickButton(
            elementsData.button.addToCart.metadata,
            elementsData.button.addToCart.id
        )
    });

    it("Step 09: Return to categories", async function() {
        await objectPageCartCategory.clickButton(
            elementsData.button.categoryBack.metadata,
            elementsData.button.categoryBack.id
        )
    });

    it("Step 10: Search for product", async function() {
        await objectPageCartHome.ClearFillThenSearch(
            elementsData.searchBars.homeId,
            "Flat Watch HD32"  
        )
        await objectPageCartHome.chooseFirstProduct()
    });

    it("Step 11: Collect data about product", async function() {
        await objectPageCartProduct.collectData()
    });

    it("Step 0: ", async function() {
       // await util.browser.sleep(10000);
    });

});