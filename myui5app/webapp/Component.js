/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "myui5app/model/models"
    ],
    function (UIComponent, Device, models) {
        "use strict";

        return UIComponent.extend("myui5app.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");

                // Agregamos nuestro modelo para el formRegistro
                this.setModel(models.datosUsuario(), "datosUsuario");

                this.setModel(models.pictureModel(), "pictureModel");
            }
        });
    }
);