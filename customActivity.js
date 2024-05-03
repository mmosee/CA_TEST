define(["postmonger"], function (Postmonger) {
    "use strict";

    var connection = new Postmonger.Session();
    var payload = {};

    $(window).ready(onRender);

    connection.on("initActivity", initialize);
    connection.on("requestedTokens", onGetTokens);
    connection.on("requestedEndpoints", onGetEndpoints);

    connection.on("clickedNext", onClickedNext);

    function onRender() {
        connection.trigger("ready");
        connection.trigger("requestTokens");
        connection.trigger("requestEndpoints");
    }

    function initialize(data) {
        if (data) {
            payload = data;
        }

        var message;
        var hasInArguments = Boolean(
            payload["arguments"] &&
            payload["arguments"].execute &&
            payload["arguments"].execute.inArguments &&
            payload["arguments"].execute.inArguments.length > 0
        );

        var inArguments = hasInArguments ? payload["arguments"].execute.inArguments : {};

        $.each(inArguments, function (index, inArgument) {
            $.each(inArgument, function (key, val) {
                if (key === "message") {
                    message = val;
                }
            });
        });
    }

    function onGetTokens(tokens) { }

    function onGetEndpoints(endpoints) { }

    function onClickedNext() {
        save();
    }

    function save() {

        payload.name = name;
        payload["arguments"].execute.inArguments = [{  }];
        payload["metaData"].isConfigured = true;

        connection.trigger("updateActivity", payload);
    }

    function getMessage() {
        return $("#select1").find("option:selected").attr("value").trim();
    }
});