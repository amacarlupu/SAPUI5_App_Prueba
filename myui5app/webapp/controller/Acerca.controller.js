sap.ui.define([
    "sap/ui/core/mvc/Controller"
],

    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */


    function (Controller) {
        'use strict';

        return Controller.extend("myui5app.controller.Acerca", {
            onInit: function () {
            },

            onHomeComunidad: function () {
                
                this.getOwnerComponent().getTargets().display("TargetMainView")
            }

        });

    });