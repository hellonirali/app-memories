const router = require('express').Router();
const { Memory } = require('../db/models');
module.exports = router;


// GET all memories
router.get('/', (req, res, next) => {
  Memory.findAll()
    .then(memories => res.json(memories))
    .catch(next);
});

// GET single memory
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  Memory.findById(id)
    .then(memory => res.json(memory))
    .catch(next);
});

// POST new memory
router.post('/', (req, res, next) => {
  Memory.create(req.body)
    .then(newMemory => res.status(201).json(newMemory))
    .catch(next);
});

// PUT update memory
router.put('/:id', (req, res, next) => {
  let id = req.params.id;

  Memory.update(req.body, {
    where: { id }
  })
  .then(number => {
    Memory.findById(id)
    .then(updatedMemory => {
      res.json({ message: 'Updated successfully', memory: updatedMemory});
    });
  })
  .catch(next);
});
