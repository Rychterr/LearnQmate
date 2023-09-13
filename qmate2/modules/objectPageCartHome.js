var objectPageCartHome = function() {
    
    const viewName = "sap.ui.demo.cart.view.Home";

    this.selectCategory = async function(bindingContextPath){
        const selector = {
            "elementProperties": {
                "viewName": viewName,
                "metadata": "sap.m.StandardListItem",
                "bindingContextPath": `${bindingContextPath}`
            }
        };
        await ui5.userInteraction.click(selector);   
    }

    this.ClearFillThenSearch = async function(id, stringToBeSearched){
        const selector = {
            "elementProperties": {
                "viewName": viewName,
                "metadata": "sap.m.SearchField",
                "id": id
            }
        };
        await ui5.userInteraction.clearAndFill(selector, stringToBeSearched);
        await common.userInteraction.pressEnter();
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

module.exports = new objectPageCartHome();