sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("myui5app.controller.MainView", {
            onInit: function () {
                this.loadPost();
            },

            onLogin: function (oEvent) {
                // create dialog lazily
                if (!this.oMPDialog) {
                    this.oMPDialog = this.loadFragment({
                        name: "myui5app.view.fragment.MPDialog"
                    });
                }
                this.oMPDialog.then(function (oDialog) {
                    this.oDialog = oDialog;
                    this.oDialog.open();
                    // this._oMessageManager.registerObject(this.oView.byId("formContainer"), true);

                    // MessageToast.show('Press "Save" to trigger validation.');
                    // this.createMessagePopover();
                }.bind(this));
            },

            closeDialog: function () {
                this.oDialog.close();
            },

            loadPost: async function (Event) {
                // const rawResponse = await fetch('https://www.freetogame.com/api/games?platform=pc');
               const rawResponse = await fetch('https://picsum.photos/v2/list');
                const content = await rawResponse.json();
                console.log("content", content);
                // breakpoint;
                let oLista = [];

                content.forEach((element, index) => {
                    if (index < 5) {
                        let obj = { ...element };
                        oLista.push(obj);
                    }
                })
                
                console.log("olista", oLista);
                this.getView().getModel("pictureModel").setData(oLista);
            }

        });
    });
