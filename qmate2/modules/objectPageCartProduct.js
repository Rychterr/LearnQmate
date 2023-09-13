var elementsData = require("../testData/elementsData.json");
var objectPageCartProduct = function() {
    
    const viewName = "sap.ui.demo.cart.view.Product";

    this.clickButton = async function(metadata,id){
        const selector = {
            "elementProperties": {
                "viewName": viewName,
                "metadata": `${metadata}`,
                "id": `${id}`
            }
        };
        await ui5.userInteraction.click(selector);   
    }

    this.collectData = async function(){

        await nonUi5.element.waitForAll("//*[@id='__header0-titleText-inner']");
        
        textName = await $("//*[@id='__header0-titleText-inner']").getText();
        textSupplier = await $("//*[@id='__attribute3-text']").getText();
        textDescription = await $("//*[@id='__attribute4-text']").getText();
        textWeight = await $("//*[@id='__attribute5-text']").getText();
        textMeasures = await $("//*[@id='__attribute6-text']").getText();

        browser.config.params.export.items = {
            "Name": textName,
            "Supplier": textSupplier,
            "Description": textDescription,
            "Weight": textWeight,
            "Measures": textMeasures
        };

    }
};

module.exports = new objectPageCartProduct();