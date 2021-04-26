const Model = require('./model');

const create = async (req, res, next) => {
  const { body = {} } = req;
  const document = new Model(body);

  try {
    const doc = await document.save();
    res.json(doc);
  } catch (err) {
    next(new Error(err));
  }
};

const all = async (req, res, next) => {
  try {
    const docs = await Model.find({}).exec();
    res.json(docs);
  } catch (err) {
    next(new Error(err));
  }
};

const read = (req, res, next) => {
  const { params = {} } = req;
  const { id } = params;
  res.json({ id });
};

const update = (req, res, next) => {
  const { body = {}, params = {} } = req;
  const { id } = params;
  res.json({
    id,
    body,
  });
};

const destroy = (req, res, next) => {
  const { params = {} } = req;
  const { id } = params;
  res.json({
    id,
  });
};

module.exports = { create, all, read, update, destroy };
