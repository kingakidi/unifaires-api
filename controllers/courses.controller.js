exports.index = async function (req, res) {
  return res.status(200).send({
    message: "Working",
  });
};

exports.store = async function (req, res) {
  return res.status(201).send({
    message: "This is store route",
  });
};

exports.update = async function (req, res) {
  return res.status(200).send({
    message: "this is update",
  });
};

exports.destroy = async function (req, res) {
  return res.status(200).send({
    message: "this is delete endpoint",
  });
};

exports.single = async function (req, res) {
  return res.status(200).send({
    message: "this is a single route",
  });
};
