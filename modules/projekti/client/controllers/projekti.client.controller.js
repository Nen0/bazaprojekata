angular.module('projekti').controller('ProjektiController', [
    'Authentication',
    '_',
    '$http',
    '$rootScope',
    '$scope',
    '$stateParams',
    '$location',
    '$modal',

    function(Authentication,
        _,
        $http,
        $rootScope,
        $scope,
        $stateParams,
        $location,
        $modal) {


        $scope.mainGridOptions = {
            //language:'hr-HR',
            mobile: true,

            dataSource: {
                transport: {
                    read: {
                        url: "api/projekti/",
                        type: "get",
                        dataType: "json"
                    },
                    // create: {
                    //     url: "api/projekti/",
                    //     type: "post",
                    //     dataType: "json",
                    //     complete: function(data) {
                    //         $("#projektiGrid").data("kendoGrid").dataSource.read();
                    //     }
                    // },
                    // update: {
                    //     url: "api/pravni_subjekti/",
                    //     type: "put",
                    //     dataType: "json",
                    //     complete: function(data) {
                    //         $("#userGrid").data("kendoGrid").dataSource.read();
                    //     }
                    // },
                    // destroy: {
                    //     url: "api/delete/",
                    //     type: "delete",
                    //     dataType: "json"
                    // }
                },
                schema: {
                    data: "data",
                    model: {
                        id: "id",
                        fields: {
                            id: {
                                type: "number"
                            },
                            name: {
                                type: "string"
                            },
                            vrsta: {
                                type: "string"
                            },
                        }
                    }
                }
            },
            sortable: true,
            //pageable: true,

            //dataBound: function() {
            //  this.expandRow(this.tbody.find("tr.k-master-row").first());
            //},

            //toolbar: ["create"],

            filterable: {
                mode: "row",
                extra: false,
                showOperators: false
            },
            editable: {
                mode: "popup",
                confirmation: "Je ste li sigurni da želite izbrisati odabrani unos?",
                template: $("#editProject").html(),
                window: {
                    title: "Projekti - pregled", //treba biti uređivanje
                    animation: true
                }
            },
            columns: [{
                field: "id",
                title: "ID",
                width: "80px",
                filterable: false,
                hidden: true
            },
            {
                field: "name",
                title: "Naziv projekta",
                width: "190px",
                filterable: true
            },
             {
                field: "pokretac",
                title: "Pokretač",
                width: "190px",
                filterable: true
            },
            {
                field: "mjesto",
                title: "Mjesto",
                width: "120px",
                headerAttributes: {
                    style: "text-align: center; white-space: normal"
                },
                filterable: true
            },
            // {
            //     field: "web",
            //     title: "Web stranica",
            //     width: "120px",
            //     headerAttributes: {
            //         style: "text-align: center; white-space: normal"
            //     },
            //     filterable: false
            // }, {
            //     field: "telefon",
            //     title: "Telefon",
            //     width: "120px",
            //     headerAttributes: {
            //         style: "text-align: center; white-space: normal"
            //     },
            //     filterable: false
            // },
            {
                field: "keywords",
                title: "Ključne riječi",
                width: "120px",
                headerAttributes: {
                    style: "text-align: center; white-space: normal"
                },
                filterable: true
            }, {
                command: [{
                    width: "20px",
                    name: "edit",
                    text: ""
                // }, {
                //     width: "20px",
                //     name: "destroy",
                //     text: ""
                }],
                title: "&nbsp;",
                width: "55px"
            }],
            edit: function(e) {
                $(".k-edit-form-container").parent().data("kendoWindow").center();


                $(".k-edit-form-container").width("750");



            }
        };
        dataSourceVrsta = new kendo.data.DataSource({
        transport: {
            read: {
                url: "api/combo/",
                type: "get",
                data: { vrsta_id: 110 },
                dataType: "json"
            }
        }
    });
    }
]);