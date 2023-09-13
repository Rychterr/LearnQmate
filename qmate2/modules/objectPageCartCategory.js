var objectPageCartCategory = function() {
    
    const viewName = "sap.ui.demo.cart.view.Category";

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

    this.chooseFilterOption = async function(title){
        const selector = {
            "elementProperties": {
                "viewName": viewName,
                "metadata": "sap.m.StandardListItem",
                "title": `${title}`
            }
        };
        await ui5.userInteraction.click(selector);
    }

    this.checkCheckbox = async function(title){
        const selector = {
            "elementProperties": {
                "viewName": viewName,
                "metadata": "sap.m.CheckBox"
            },
            "ancestorProperties": {
                "viewName": viewName,
                "metadata": "sap.m.StandardListItem",
                "title": title
            }
        };
        await ui5.userInteraction.click(selector);
    }

    this.priceSlider = async function(percentage){
        const maxPriceSlider = await $('//*[@id="container-cart---category--rangeSlider-handle2"]')
        moveX=-300 + percentage*3;
        await maxPriceSlider.dragAndDrop({ x: moveX, y: 0 });
    }

    this.chooseProduct = async function(bindingContextPath){
        const selector = {
            "elementProperties": {
                "viewName": viewName,
                "metadata": "sap.m.ObjectListItem",
                "bindingContextPath": bindingContextPath
            }
        };
        await ui5.userInteraction.click(selector);
    }

    this.chooseFirstProduct = async function(){
        const selector = {
            "elementProperties": {
                "viewName": viewName,
                "metadata": "sap.m.ObjectListItem"
            }
        };
        await ui5.userInteraction.click(selector);
    }
};

module.exports = new objectPageCartCategory();