"use strict"
var fs = require('fs')
var CSON = require('cson')
var _ = require('lodash');

var templates = {};
// FaqAutoResponse
var tmplOfFaqAutoReplyAnswer = CSON.parse(fs.readFileSync('./config/tmplOfFaqAutoReplyAnswer.cson'));
_.assign(templates,tmplOfFaqAutoReplyAnswer);
var tmplOfFaqAutoResponseAnswer = CSON.parse(fs.readFileSync('./config/tmplOfFaqAutoResponseAnswer.cson'));
_.assign(templates,tmplOfFaqAutoResponseAnswer);
var tmplOfFaqAutoResponseDispatch = CSON.parse(fs.readFileSync('./config/tmplOfFaqAutoResponseDispatch.cson'));
_.assign(templates,tmplOfFaqAutoResponseDispatch);
// PersonDirectory
var tmpOfPersonDirectoryAnswer = CSON.parse(fs.readFileSync('./config/tmpOfPersonDirectoryAnswer.cson'));
_.assign(templates,tmpOfPersonDirectoryAnswer);
var tmpOfPersonDirectoryDispatch = CSON.parse(fs.readFileSync('./config/tmpOfPersonDirectoryDispatch.cson'));
_.assign(templates,tmpOfPersonDirectoryDispatch);
var tmpOfPersonDirectoryReDispatch = CSON.parse(fs.readFileSync('./config/tmpOfPersonDirectoryReDispatch.cson'));
_.assign(templates,tmpOfPersonDirectoryReDispatch);
var tmpOfPersonDirectoryRequest = CSON.parse(fs.readFileSync('./config/tmpOfPersonDirectoryRequest.cson'));
_.assign(templates,tmpOfPersonDirectoryRequest);
var tmpOfPersonDirectoryRequestErr = CSON.parse(fs.readFileSync('./config/tmpOfPersonDirectoryRequestErr.cson'));
_.assign(templates,tmpOfPersonDirectoryRequestErr);
var tmpOfPersonDirectoryResponseFromStaff = CSON.parse(fs.readFileSync('./config/tmpOfPersonDirectoryResponseFromStaff.cson'));
_.assign(templates,tmpOfPersonDirectoryResponseFromStaff);
var tmpOfPersonDirectoryResponseSessionTimeOut = CSON.parse(fs.readFileSync('./config/tmpOfPersonDirectoryResponseSessionTimeOut.cson'));
_.assign(templates,tmpOfPersonDirectoryResponseSessionTimeOut);

module.exports.templates = templates;

// debug -------------------------------------------
// -------------------------------------------------
//console.log(templates.tmplOfFaqAutoResponseAnswer);


var commandMap = {};

var mapCommandCode = CSON.parse(fs.readFileSync('./config/mapCommandCode.cson'));
_.assign(commandMap,mapCommandCode);
module.exports.commandMap = commandMap

