describe("Buy a keyboard", function () {

    it("Step 01: Navigate to your application", async function () {
      await ui5.navigation.navigateToApplication("/demoapps")
    });
    
    it("Step 02: Accept cookies", async function () {
      const selector = {
        "elementProperties": {
            "viewName": "sap.ui.documentation.sdk.view.App",
            "metadata": "sap.m.Button",
            "text": [{
                "path": "i18n>COOKIE_SETTINGS_DIALOG_FUNCTIONAL_COOKIES_ACCEPT_ALL"
            }]
        }
      }
      await ui5.userInteraction.click(selector);
    });

    it("Step 03: Navigate to shopping cart", async function () {
      const selector = {
        "elementProperties": {
            "viewName": "sap.ui.documentation.sdk.view.DemoApps",
            "metadata": "sap.ui.documentation.TitleLink",
            "bindingContextPath": "/demoAppsByCategory/0/rows/0/0"
        }
    };
    await ui5.userInteraction.click(selector);
    });

    it("Step 04: Navigate to keyboards section", async function () {
      const selector = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Home",
            "metadata": "sap.m.StandardListItem",
            "bindingContextPath": "/ProductCategories*'KB')"
        }
    };
    await util.browser.switchToNewWindow("Shopping Cart");
    await ui5.userInteraction.click(selector);
    });

    it("Step 05: Select Keyboard", async function () {
      
    const selector = {"elementProperties": {
      "viewName": "sap.ui.demo.cart.view.Category",
      "metadata": "sap.m.Text",
      "bindingContextPath": "/Products*'HT-1120')",
      "text": "Cordless Bluetooth Keyboard, english international"
    }
    };
      await ui5.userInteraction.click(selector);
      
    });

      
    it("Step 06: Add it to cart", async function () {
      
      sProductName = await $("//span[@id='__header0-titleText-inner']").getText();
      await util.console.info("Collecting product name: "+sProductName);
      
        const selector = {
          "elementProperties": {
              "viewName": "sap.ui.demo.cart.view.Product",
              "metadata": "sap.m.Button",
              "text": [{
                  "path": "i18n>addToCartShort"
              }]
          }
      };
      await ui5.userInteraction.click(selector);
      });
      
    it("Step 07: Check pop up information", async function () {
      sPopUpText = await $("//*[@id='sap-ui-static']/div").getText();
      await util.console.info("PopUp: "+sPopUpText);
      await util.console.info("PopUp contains selected product: "+sPopUpText.includes(sProductName));
      common.assertion.expectEqual(true, sPopUpText.includes(sProductName));
      });
      
    it("Step 08: Show shopping cart", async function () {
      const selector = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Product",
            "metadata": "sap.ui.core.Icon",
            "src": "sap-icon://cart"
        }
    };
      await ui5.userInteraction.click(selector);
      });

    it("Step 09: Proceed with purchase: ", async function () {
      //check if proper product was added
      sShopCartProduct = await $("//*[@id='container-cart---cartView--entryList']//*[contains(text(),'"+sProductName+"')]").getText();
      await util.console.info("Product in shop card matches with selected product: "+sShopCartProduct.includes(sProductName));
      common.assertion.expectEqual(true, sShopCartProduct.includes(sProductName));
      //proceed click
      const selector = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Cart",
            "metadata": "sap.m.Button",
            "id": "*proceedButton"
          }
        };    
        await ui5.userInteraction.click(selector);
      });

    it("Step 10: Second step of checkout", async function () {
      const selector = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Button",
            "id": "*contentsStep-nextButton"
        }
    };
          await ui5.userInteraction.click(selector);
      });

    it("Step 11: Third step of checkout", async function () {
      const selector = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Button",
            "id": "*payViaCOD-button"
        }
    };
        await ui5.userInteraction.click(selector);
       const selector2 = {
          "elementProperties": {
              "viewName": "sap.ui.demo.cart.view.Checkout",
              "metadata": "sap.m.Button",
              "id": "*paymentTypeStep-nextButton"
          }
      };
      await ui5.userInteraction.click(selector2);
      });

      it("Step 12: Filling details for cash on delivery", async function () {
        //name
        const selector = {
          "elementProperties": {
              "viewName": "sap.ui.demo.cart.view.Checkout",
              "metadata": "sap.m.Input",
              "id": "*cashOnDeliveryName"
          }
      };
      await ui5.userInteraction.clearAndFill(selector, "M");
      //last name
      const selector2 = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Input",
            "id": "*cashOnDeliveryLastName"
        }
      };
      await ui5.userInteraction.clearAndFill(selector2, "R");
      //phone number
      const selector3 = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Input",
            "id": "*cashOnDeliveryPhoneNumber"
        }
      };
      await ui5.userInteraction.clearAndFill(selector3, "pppppppppppppppppppppppp");
      //email
      const selector4 = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Input",
            "id": "*cashOnDeliveryEmail"
        }
      };
      await ui5.userInteraction.clearAndFill(selector4, "mmmmmmmmmmmm");
      //error check
      const selector5 = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.ui.core.Icon",
            "id": "*showPopoverButton-img"
        }
      };
      await ui5.userInteraction.click(selector5);
      
      sErrorFirstName = await $("//div[@class='sapMSLIDiv']/*[contains(text(),'First')]").getText();
      sErrorLastName = await $("//div[@class='sapMSLIDiv']/*[contains(text(),'Last')]").getText();
      sErrorPhone = await $("//div[@class='sapMSLIDiv']/*[contains(text(),'Phone Number')]").getText();
      sErrorEmail = await $("//div[@class='sapMSLIDiv']/*[contains(text(),'E-mail')]").getText(); 
      
    
      common.assertion.expectEqual(sErrorFirstName, "First Name");
      common.assertion.expectEqual(sErrorLastName, "Last Name");
      common.assertion.expectEqual(sErrorPhone, "Phone Number");
      common.assertion.expectEqual(sErrorEmail, "E-mail Address");

      await ui5.userInteraction.clearAndFill(selector, "Michal");
      await ui5.userInteraction.clearAndFill(selector2, "Rychter");
      await ui5.userInteraction.clearAndFill(selector3, "123456789");
      await ui5.userInteraction.clearAndFill(selector4, "mail@gmail.com");
      //close error window
      const selector6 = {
        "elementProperties": {
            "metadata": "sap.ui.core.Icon",
            "src": "sap-icon://decline"
        }
      };
      await ui5.userInteraction.click(selector6);
      //next
      const selector7 = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Button",
            "id": "*cashOnDeliveryStep-nextButton"
        }
      };
      await ui5.userInteraction.click(selector7);
      });
  
      it("Step 13: Filling invoice address", async function () {
      //adress
        const selector = {
          "elementProperties": {
              "viewName": "sap.ui.demo.cart.view.Checkout",
              "metadata": "sap.m.Input",
              "id": "*invoiceAddressAddress"
          }
      };
      await ui5.userInteraction.clearAndFill(selector, "add");
      //city
        const selector2 = {
          "elementProperties": {
              "viewName": "sap.ui.demo.cart.view.Checkout",
              "metadata": "sap.m.Input",
              "id": "*invoiceAddressCity"
          }
      };
      await ui5.userInteraction.clearAndFill(selector2, "ad");
      //zip
      const selector3 = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Input",
            "id": "*invoiceAddressZip"
        }
    };
    await ui5.userInteraction.clearAndFill(selector3, "00");
    //country
    const selector4 = {
      "elementProperties": {
          "viewName": "sap.ui.demo.cart.view.Checkout",
          "metadata": "sap.m.Input",
          "id": "*invoiceAddressCountry"
      }
    };
    await ui5.userInteraction.clearAndFill(selector4, "a");
    //error check
    const selector5 = {
      "elementProperties": {
          "viewName": "sap.ui.demo.cart.view.Checkout",
          "metadata": "sap.ui.core.Icon",
          "id": "*showPopoverButton-img"
      }
    };
    await ui5.userInteraction.click(selector5);

      sErrorAddress = await $("//div[@class='sapMSLIDiv']/*[contains(text(),'Address')]").getText();
      sErrorCity = await $("//div[@class='sapMSLIDiv']/*[contains(text(),'City')]").getText();
      sErrorZipCode = await $("//div[@class='sapMSLIDiv']/*[contains(text(),'Zip Code')]").getText();
      sErrorCountry = await $("//div[@class='sapMSLIDiv']/*[contains(text(),'Country')]").getText(); 
      
    
      common.assertion.expectEqual(sErrorAddress, "Address");
      common.assertion.expectEqual(sErrorCity, "City");
      common.assertion.expectEqual(sErrorZipCode, "Zip Code");
      common.assertion.expectEqual(sErrorCountry, "Country");

      await ui5.userInteraction.clearAndFill(selector, "Address");
      await ui5.userInteraction.clearAndFill(selector2, "City");
      await ui5.userInteraction.clearAndFill(selector3, "000000");
      await ui5.userInteraction.clearAndFill(selector4, "Country");

      //close error window
      const selector6 = {
        "elementProperties": {
            "metadata": "sap.ui.core.Icon",
            "src": "sap-icon://decline"
        }
      };
      await ui5.userInteraction.click(selector6);
      //next
      const selector7 = {
        "elementProperties": {
            "viewName": "sap.ui.demo.cart.view.Checkout",
            "metadata": "sap.m.Button",
            "id": "*invoiceStep-nextButton"
        }
      };
      await ui5.userInteraction.click(selector7);
      });

      it("Step 14: Choosing delivery type", async function () {
        const selector = {
          "elementProperties": {
              "viewName": "sap.ui.demo.cart.view.Checkout",
              "metadata": "sap.m.Button",
              "id": "*expressDelivery-button"
          }
      };
        await ui5.userInteraction.click(selector);
        const selector2 = {
          "elementProperties": {
              "viewName": "sap.ui.demo.cart.view.Checkout",
              "metadata": "sap.m.Button",
              "id": "*deliveryTypeStep-nextButton"
          }
      };
        await ui5.userInteraction.click(selector2);

      });

      it("Step 15: Submiting order", async function () {
        const selector = {
          "elementProperties": {
              "viewName": "sap.ui.demo.cart.view.Checkout",
              "metadata": "sap.m.Button",
              "id": "*submitOrder"
          }
      };
        await ui5.userInteraction.click(selector);
        const selector2 = {
          "elementProperties": {
              "metadata": "sap.m.Button",
              "text": "Yes"
          }
      };
        await ui5.userInteraction.click(selector2);
        await nonUi5.element.waitForAll("//*[contains(text(),'order number:')]");
        sOrderNumber = await $("//*[contains(text(),'order number:')]").getText()
        purchaseOrderID = sOrderNumber.replace(/\D/g, "");
        await util.console.info("Order number: "+purchaseOrderID);

        const userData = {
          "purchaseOrder": purchaseOrderID
      };
      browser.config.params.export.purchaseOrder = userData;

      // use the references file
      const references = browser.config.params.import.data["references"];
      references.purchaseOrderNumber = purchaseOrderID;
      });

      //it("Step 16: Logging out", async function() {
      //  await ui5.session.logout(); //for what???
      //});
  });
  