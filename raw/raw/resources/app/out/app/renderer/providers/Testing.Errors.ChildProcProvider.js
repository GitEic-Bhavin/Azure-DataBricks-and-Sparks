"use strict";
/*!---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *----------------------------------------------------------*/
const fs = require("fs");
module.exports = {
    "Testing.Errors.ChildProc.throwPrimitive": (args) => {
        return Promise.reject(false);
    },
    "Testing.Errors.ChildProc.throwString": (args) => {
        return Promise.reject("This exception is a string.");
    },
    "Testing.Errors.ChildProc.throwObject": (args) => {
        return Promise.reject({ n: "Object", m: "This exception is an object." });
    },
    "Testing.Errors.ChildProc.throwError": (args) => {
        return Promise.reject(new Error("This exception is an Error."));
    },
    "Testing.Errors.ChildProc.throwSystemError": (args) => {
        return new Promise((resolve, reject) => {
            fs.readFile("false-file.txt", (error, data) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(data);
                }
            });
        });
    }
};
