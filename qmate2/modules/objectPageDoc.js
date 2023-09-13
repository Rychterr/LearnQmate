var objectPageDoc = function() {
    
    const viewName = "sap.ui.documentation.sdk.view.App";

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

    this.navigateAndSwitchTab = async function(metadata,id,windowName){
        const selector = {
            "elementProperties": {
                "viewName": viewName,
                "metadata": `${metadata}`,
                "id": `${id}`
            }
        };
        await ui5.userInteraction.click(selector);
        await util.browser.switchToNewWindow(windowName);
    }
};

module.exports = new objectPageDoc();