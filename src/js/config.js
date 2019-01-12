require.config({

    paths: {
        "ajax": "./libs/ajax",
        "moment": "./libs/moment",
        "getParms": "./commit/getParms",
        "bscroll": "./libs/bscroll"
    },
    shim: {
        "ajax": {
            exports: "ajax"
        },
        "moment": {
            exports: "moment"
        }
    }
})