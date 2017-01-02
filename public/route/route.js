(function() {
    'use strict';

    angular.module("myApp", ['ngRoute', 'ngStorage'])
        .config([
            '$routeProvider',
            function($routeProvider){
                $routeProvider
                    .when("/", {
                        templateUrl: "partial/login.html",
                        controller: "loginCtrl"
                    })
                .when("/cardView", {
                        resolve: {
                            "check": function($location) {
                                if (window.localStorage['status'] == "false") {
                                    $location.path("/");
                                }
                            }
                        },
                        templateUrl: "partial/cardView.html",
                        css: 'css/cardView.css',
                        controller: "cardViewCtrl"
                    })
                    .when("/customerManagement", {
                        resolve: {
                            "check": function($location) {
                                if (window.localStorage['status'] == "false") {
                                    $location.path("/");
                                }
                            }
                        },
                        templateUrl: "partial/cardView.html",
                        css: 'css/cardView.css',
                        controller: "cardViewCtrl"
                    })
                    .when("/listView", {
                        resolve: {
                            "check": function($location) {
                                if (window.localStorage['status'] == "false") {
                                    $location.path("/");
                                }
                            }
                        },
                        templateUrl: "partial/listView.html",
                        css: 'css/cardView.css',
                        controller: "cardViewCtrl"
                    })
                    .when("/addCustomer", {
                        resolve: {
                            "check": function($location) {
                                if (window.localStorage['status'] == "false") {
                                    $location.path("/");
                                }
                            }
                        },
                        templateUrl: "partial/addCustomer.html",
                        controller: "addCustCtrl"
                    })
                    .when("/addedCustomer", {
                        resolve: {
                            "check": function($location) {
                                if (window.localStorage['status'] == "false") {
                                    $location.path("/");
                                }
                            }
                        },
                        templateUrl: "partial/cardView.html",
                        css: 'css/cardView.css',
                        controller: "cardViewCtrl"
                    })

                .when("/editCustomer", {
                        resolve: {
                            "check": function($location) {
                                if (window.localStorage['status'] == "false") {
                                    $location.path("/");
                                }
                            }
                        },
                        templateUrl: "partial/editCustomer.html",
                        controller: "editCustCtrl"

                    })
                    .when("/notyet", {
                        resolve: {
                            "check": function($location) {
                                if (window.localStorage['status'] == "false") {
                                    $location.path("/");
                                }
                            }
                        },
                        templateUrl: "partial/login.html",
                        controller: "loginCtrl"

                    })
                    .when("/Customers/Orders/", {
                        resolve: {
                            "check": function($location) {
                                if (window.localStorage['status'] == "false") {
                                    $location.path("/");
                                }
                            }
                        },
                        templateUrl: "partial/order.html",
                        controller: "orderCtrl"
                    })
                    .when("/Customers/customers/", {
                        resolve: {
                            "check": function($location) {
                                if (window.localStorage['status'] == "false") {
                                    $location.path("/");
                                }
                            }
                        },
                        templateUrl: "partial/about.html"
                    })
                    .when("/Customers/aboutPage/", {
                        resolve: {
                            "check": function($location) {
                                if (window.localStorage['status'] == "false") {
                                    $location.path("/");
                                }
                            }
                        },
                        templateUrl: "partial/about.html"
                    })
                    .when("/Customer Management/", {
                        resolve: {
                            "check": function($location) {
                                if (window.localStorage['status'] == "false") {
                                    $location.path("/");
                                }
                            }
                        },
                        templateUrl: "partial/about.html"
                    })
                    .when("/Login/", {
                        resolve: {
                            "check": function($location) {
                                if (window.localStorage['status'] == "false") {
                                    $location.path("/");
                                }
                            }
                        },
                        templateUrl: "partial/about.html"
                    })
                    .when("/Customers/customers/", {
                        resolve: {
                            "check": function($location) {
                                if (window.localStorage['status'] == "false") {
                                    $location.path("/");
                                }
                            }
                        },
                        templateUrl: "partial/cardView.html",
                        controller: "cardViewCtrl"
                    })
                    .when("/Logout", {

                        templateUrl: "partial/login.html",
                        controller: "loginCtrl"
                    })
                    .when("/about/amala", {
                        resolve: {
                            "check": function($location) {
                                if (window.localStorage['status'] == "false") {
                                    $location.path("/");
                                }
                            }
                        },
                        templateUrl: "partial/amala.html"

                    })
                    .when("/about/sweksha", {
                        resolve: {
                            "check": function($location) {
                                if (window.localStorage['status'] == "false") {
                                    $location.path("/");
                                }
                            }
                        },
                        templateUrl: "partial/sweksha.html",

                    })
                    .when("/about/avinash", {
                        resolve: {
                            "check": function($location) {
                                if (window.localStorage['status'] == "false") {
                                    $location.path("/");
                                }
                            }
                        },
                        templateUrl: "partial/avinash.html",

                    })
                    .when("/about/rahul", {
                        resolve: {
                            "check": function($location) {
                                if (window.localStorage['status'] == "false") {
                                    $location.path("/");
                                }
                            }
                        },
                        templateUrl: "partial/rahul.html",

                    })
                    .when("/about/suraj", {
                        resolve: {
                            "check": function($location) {
                                if (window.localStorage['status'] == "false") {
                                    $location.path("/");
                                }
                            }
                        },
                        templateUrl: "partial/suraj.html",

                    })
                    .when("/myOrders/:fname/:lname/:city/:state", {
                        resolve: {
                            "check": function($location) {
                                if (window.localStorage['status'] == "false") {
                                    $location.path("/");
                                }
                            }
                        },
                        templateUrl: "partial/details.html",
                        controller: "detailsCtrl"
                    })
                    .when("/editCustomer/orders/:fname/:lname/:city/:state", {
                        resolve: {
                            "check": function($location) {
                                if (window.localStorage['status'] == "false") {
                                    $location.path("/");
                                }
                            }
                        },
                        templateUrl: "partial/details.html",
                        controller: "detailsCtrl"
                    })
                    .when("/back/", {
                        resolve: {
                            "check": function($location) {
                                if (window.localStorage['status'] == "false") {
                                    $location.path("/");
                                }
                            }
                        },
                        templateUrl: "partial/about.html",

                    })



            }
        ]);
})();