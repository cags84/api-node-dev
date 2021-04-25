const create = (req, res, next) => {
  res.json({});
};

const all = (req, res, next) => {
  res.json({
    message: 'GET all tasks',
  });
};

const read = (req, res, next) => {
  res.json({});
};

const update = (req, res, next) => {
  res.json({});
};

const destroy = (req, res, next) => {
  res.json({});
};

module.exports = { create, all, read, update, destroy };
