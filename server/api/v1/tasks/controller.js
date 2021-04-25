const create = (req, res, next) => {
  const { body = {} } = req;
  res.json(body);
};

const all = (req, res, next) => {
  res.json([
    { _id: 1, title: 'Buy macbook pro m1' },
    { _id: 2, title: 'Learn mongodb' },
    { _id: 3, title: 'Practice PHP' },
  ]);
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
