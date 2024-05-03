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


    // Test const
    

    // Test document
    $(document).on('click', '#getBtn', getBtn)

    // Test Function
    function getBtn() {
        const getInput = $('#getInput').val();
        console.log("getBtn", getInput);

        const testData = {
            test: 'test'
        }

        // F T
        // fetch("https://server-test-ugbd.onrender.com/input", {
        //     method: "GET",
        //     body: JSON.stringify({
        //       "test" : "test",
        //     }),
        //   })
        //   .then((response) => response.json())
        //   .then((result) => console.log(result));

        // FETCH TEST POST
        // fetch('https://server-test-ugbd.onrender.com/input', {method: 'POST', headers: {'Content-Type': 'application/json',}, body: JSON.stringify(testData),})
        // .then(response => {if (!response.ok) throw new Error('Network response was not ok');return response.json();})
        // .then(data => {
        //     console.log('서버 응답:', data);
        // })
        // .catch(error => {
        //     console.error('에러 발생:', error);
        // });

        // FETCH TEST GET
        fetch('https://server-test-ugbd.onrender.com/input?test=test', {
            method: 'GET', 
            headers: {
                'userId': 'testUserId',
            },
        })
        .then(response => {if (!response.ok) throw new Error('Network response was not ok');return response.json();})
        .then(data => {
            console.log('서버 응답:', data);
        })
        .catch(error => {
            console.error('에러 발생:', error);
        });


        // AJAX TEST
        // $.ajax({
        //     url: 'https://server-test-ugbd.onrender.com/input',
        //     method: 'get',
        //     data: {
        //         getInput: getInput
        //     },
        //     dataType: 'json',
        //     success: function (data, status, xhr) {
        //         console.log('ajax - success');
        //         console.log("data : : " + JSON.stringify(data));
        //     },
        //     error: function (data, status, err) {
        //         console.log('ajax - error');
        //     },
        //     complete: function () {
        //         console.log('ajax - complete');
        //     }
        // });

    }

});