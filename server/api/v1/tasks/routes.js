const router = require('express').Router();

const { create, all, read, update, destroy } = require('./controller');

/*
 * /api/tasks/     POST    - CREATE
 * /api/tasks/     GET     - READ ALL
 * /api/tasks/:id  GET     - READ ONE
 * /api/tasks/:id  PUT     - UPDATE
 * /api/tasks/:id  DELETE  - DELETE
 */

router.route('/').post(create).get(all);

router.route('/:id').get(read).put(update).delete(destroy);

module.exports = router;
