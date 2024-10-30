sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox, MessageToast) {
        "use strict";

        return Controller.extend("myui5app.controller.MainView", {
            onInit: function () {
                this.loadPost();
            },

            onRegistrar: function (oEvent) {
                // create dialog lazily
                if (!this.oMPDialog) {
                    this.oMPDialog = this.loadFragment({
                        name: "myui5app.view.fragment.MPDialog"
                    });
                }
                this.oMPDialog.then(function (oDialog) {
                    this.oDialog = oDialog;
                    this.oDialog.open();
                }.bind(this));
            },

            onBtnRegistrarse: function () {
                let oJson = this.getView().getModel("datosUsuario").getData();
                let correo = this.getView().getModel("datosUsuario").getProperty("/correo");
                let correo_validation = this.getView().byId("email_validation").getValue();
                let direccion = this.getView().getModel("datosUsuario").getProperty("/direccion");
                let celular = this.getView().getModel("datosUsuario").getProperty("/celular");
                let prefijo = this.getView().getModel("datosUsuario").getProperty("/prefijo");
                let pais = this.getView().getModel("datosUsuario").getProperty("/selectKeyPais");

                let resp = this.onValidarFormulario(correo, correo_validation, celular, prefijo, pais);
                console.log(resp);

                if (resp) {
                    MessageBox.success("Se ha creado correctamente el registro: " + JSON.stringify(oJson));
                } else {
                    MessageBox.alert("Complete todos los datos!!!")
                }

            },

            onValidarFormulario: function (email1, email2, celular, prefijo, pais) {
                let valid = true;

                if (email1.length === 0 || email2.length === 0 || celular.length === 0 || prefijo.length === 0) {
                    valid = false;
                }

                if (pais === "0") {
                    valid = false;
                }

                if (email1 !== email2) {
                    valid = false;
                }

                return valid;
            },

            onChangeSelect: function (oEvent) {
                // debugger;
                let key;
                //Formas de obtener el key
                oEvent.getSource().getProperty("selectedKey"); //Recomedable usar
                this.getView().byId("pais").getSelectedItem().mProperties.key;
                this.getView().byId("pais").getSelectedItem().getProperty("key"); //Recomendable usar

                key = this.getView().getModel("datosUsuario").getProperty("/selectKeyPais");

                // if (key === "2") {
                //     MessageToast.show("No se puede seleccionar esta opcion");
                //     this.getView().getModel("datosUsuario").setProperty("/selectKeyPais", "0");
                //     return;
                // }
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

                this.getView().getModel("pictureModel").setData(oLista);


                let jsonResp = this.getView().getModel("pictureModel").getData();
                console.log("olista", JSON.stringify(jsonResp));
            },

            onRouteComunidad: function (oEvent) {
                // let oRouter = sap.ui.core.UIComponent.getRouterFor(this);

                // oRouter.navTo("Comunidad", {});

                // this.getOwnerComponent().getRouter().navTo("Comunidad");
                // console.log(this.getOwnerComponent().getTargets().display("Comunidad"));
                // this.getRouter().getTargets().display("Comunidad");

                this.getOwnerComponent().getTargets().display("Comunidad");
            },

            onRouteAcerca: function() {
                this.getOwnerComponent().getTargets().display("Acerca");
            }

        });
    });
