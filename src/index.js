const $ = require("jquery");
import { sayHello } from "./say-hello";

const hello = () => console.log("hello world from webpack!");

hello();

$("body")
    .html("<h1>Hello From jQuery</h1>")
    .css("background-color", "gray");

console.log(sayHello());
