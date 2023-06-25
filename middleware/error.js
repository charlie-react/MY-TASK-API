const { customAPIError } = require("../Error/custom");
console.log(typeof customAPIError)

const errorHandlerMiddleware = (err, req, res, next) => {
//   console.log(err);
  if (err instanceof customAPIError) {
    return res.status(err.statusCode).send({ msg: err.message });
  }
  return res.status(500).send({ msg: "Sometin is wron,try later" });
};

module.exports = errorHandlerMiddleware;
