const mongooseDB_Model = require('../models/dbModel');

const showAllEntries = async (req,res) => {
  const entries = await mongooseDB_Model.find();
  res.status(200).send(entries);
};

const createNewDB_Entry = async (req,res) => {
  const model = new mongooseDB_Model(req.body);
  const save = await model.save();
  res.send(save);
};

const deleteEntry = async (req,res) => {
  const id = req.params.id;
  const removed = await mongooseDB_Model.findByIdAndDelete(id);
  res.status(201).send(removed);
};

module.exports = {
  showAllEntries,
  createNewDB_Entry,
  deleteEntry
};