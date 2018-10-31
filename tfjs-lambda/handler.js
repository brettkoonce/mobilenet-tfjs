const script = require("./");

module.exports.classify = (event, context, callback) => {
  console.log(event);
  script.classify(event.image, callback);
};
