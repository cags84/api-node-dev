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

const read = async (req, res, next) => {
  const { doc = {} } = req;

  res.json(doc);
};

const update = async (req, res, next) => {
  const { doc = {}, body = {} } = req;

  Object.assign(doc, body);

  try {
    const updated = await doc.save();
    res.json(updated);
  } catch (err) {
    next(new Error(err));
  }
};

const destroy = async (req, res, next) => {
  const { doc = {} } = req;

  try {
    const removed = await doc.removed();
    res.json(removed);
  } catch (err) {
    next(new Error(err));
  }
};

const findId = async (req, res, next, id) => {
  try {
    const doc = await Model.findById(id).exec();
    if (!doc) {
      const message = 'Task not found';

      next({
        message,
        statusCode: 404,
        level: 'warn',
      });
    } else {
      req.doc = doc;
      next();
    }
  } catch (err) {
    next(new Error(err));
  }
};

module.exports = { create, all, read, update, destroy, findId };
