const modelGetRefId = require("../models/modelGetRefId");

module.exports.getRef_id = async (req, res) => {
  const refd = { ref_id: req.query.ref_id, phone: req.query.phone };

  // console.log(refd);

  const data = await modelGetRefId.getData(refd);
  res.send(data);
};
