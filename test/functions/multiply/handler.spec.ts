import { multiply } from "src/functions/multiply/handler";

describe("Testing Multiplication Operator", () => {
    let successCallback = function (error: any, response: any) {
        if (error !== null)
            throw new Error("Expected no errors but found " + error);
    };

    let checkMathCallback = function (error: any, response: any) {
        let result = JSON.parse(response.body);
        if (result.output !== 20)
            throw new Error("Expected output of 20 but found " + result.output);
    };

    let statusCodeCallback = function (error: any, response: any) {
        if (response.statusCode !== 200)
            throw new Error("Expected status code of 200 but found " + response.statusCode);
    };

    let badRequestMissingArgCallback = function (error: any, response: any) {
        if (response.statusCode !== 400)
            throw new Error("Expected status code of 400 but found " + response.statusCode);

        let result = JSON.parse(response.body);
        if (result.message !== "[400] Error!  arguments a and b are required!")
            throw new Error("Expected errors but found none");
    };

    let badRequestWrongTypeCallback = function (error: any, response: any) {
        if (response.statusCode !== 400)
            throw new Error("Expected status code of 400 but found " + response.statusCode);

        let result = JSON.parse(response.body);
        if (result.message !== "[400] Error!  arguments a and b must be numbers!")
            throw new Error("Expected non-number arguments to be rejected");
    };

    let badRequestParseErrorCallback = (error: any, response: any) => {
        if (response.statusCode !== 400)
            throw new Error("Expected status code of 400 but found " + response.statusCode);

        let result = JSON.parse(response.body);
        if (result.message !== "[400] Error!  invalid request body!")
            throw new Error("Expected json parse error but found " + result.message);
    };

    describe("#multiply", () => {
        it("should not return an error", () => {
            multiply({ body: "{\"a\": 1, \"b\": 2}" }, null, successCallback);
        });

        it("should multiply the numbers", () => {
            multiply({ body: "{\"a\": 10, \"b\": 2}" }, null, checkMathCallback);
        });

        it("should return a 200 status code", () => {
            multiply({ body: "{\"a\": 1, \"b\": 2}" }, null, statusCodeCallback);
        });

        it("should return an error if a is null", () => {
            multiply({ body: "{\"b\": 2}" }, null, badRequestMissingArgCallback);
        });

        it("should return an error if b is null", () => {
            multiply({ body: "{\"a\": 1}" }, null, badRequestMissingArgCallback);
        });

        it("should return an error if a is not a number", () => {
            multiply({ body: "{\"a\": \"1\", \"b\": 2}" }, null, badRequestWrongTypeCallback);
        });

        it("should return an error if b is not a number", () => {
            multiply({ body: "{\"a\": 1, \"b\": \"abc\"}" }, null, badRequestWrongTypeCallback);
        });

        it("should return an error if body is not valid JSON", () => {
            multiply({ body: "3" }, null, badRequestParseErrorCallback);
        });
    });

});