function _200(res, status, message) {
  res.status(200).send(message);
}

function _201(res) {}

module.exports = {
  _200,
};
