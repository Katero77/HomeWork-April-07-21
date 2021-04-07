"use strict";

/**
 * @param {string} str
 * @returns string
 */

function capitalize(str){
  return str.split(" ")
      .map((item) => item[0].toUpperCase() + item.slice(1))
     .join(" ");
}

const sentences = [
  "long time no see",
  "just for the record",
  "oh, that. That explains it",
  "things happen"
];

sentences.forEach((item) => console.log(capitalize(item)));