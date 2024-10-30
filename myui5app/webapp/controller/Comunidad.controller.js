sap.ui.define([
    "sap/ui/core/mvc/Controller"
],

    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */


    function (Controller) {
        'use strict';

        return Controller.extend("myui5app.controller.Comunidad", {
            onInit: function () {
            },

            onHomeComunidad: function () {
                let router = sap.ui.core.UIComponent.getRouterFor(this);

                this.getOwnerComponent().getTargets().display("TargetMainView")

            }

        });

    });