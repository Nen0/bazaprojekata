angular.module('programi').controller('ProgramiController', function($rootScope, $scope, $http, $timeout) {
    $scope.$on('$viewContentLoaded', function() {
        App.initAjax(); // initialize core components

        // set default layout mode
        $rootScope.settings.layout.pageContentWhite = true;
        $rootScope.settings.layout.pageBodySolid = false;
        $rootScope.settings.layout.pageSidebarClosed = false;
    });
    $scope.mainGridOptions = {
            //language:'hr-HR',
            mobile: true,

            dataSource: {
                transport: {
                    read: {
                        url: "api/programi/",
                        type: "get",
                        dataType: "json"
                    },
                    /*create: {
                        url: "api/projekti/",
                        type: "post",
                        dataType: "json",
                        complete: function(data) {
                            $("#programiGrid").data("kendoGrid").dataSource.read();
                        }
                    },
                    update: {
                        url: "api/projekti/",
                        type: "put",
                        dataType: "json",
                        complete: function(data) {
                            $("#userGrid").data("kendoGrid").dataSource.read();
                        }
                    },
                    destroy: {
                        url: "api/delete/",
                        type: "delete",
                        dataType: "json"
                    }*/
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
                template: $("#editProgram").html(),
                window: {
                    title: "Programi",
                    animation: true
                }
            },
            columns: [{
                field: "id",
                title: "ID",
                width: "80px",
                filterable: false,
                hidden: true
            }, {
                field: "name",
                title: "Naziv programa",
                width: "190px"
            }, {
                title: "Vrsta",
                field: "vrsta",
                headerAttributes: {
                    style: "text-align: center; white-space: normal"
                },
                attributes: {
                    style: "text-align:center;"
                },
            }, {
                title: "Nositelj",
                field: "nositelj"
            }, {
                field: "mjesto",
                title: "Mjesto",
                width: "120px",
                headerAttributes: {
                    style: "text-align: center; white-space: normal"
                },
                filterable: true
            },
            // }, {
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
                field: "opis",
                title: "opis",
                hidden: true
            }, {
                command: [{
                    width: "20px",
                    name: "edit",
                    text: ""
                },/* {
                    width: "20px",
                    name: "destroy",
                    text: ""
                }*/],
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
                url: "api/getvrstecombo/",
                type: "get",
                dataType: "json"
            }
        }
    });


});