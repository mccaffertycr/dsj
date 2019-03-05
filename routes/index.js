const router = require('express').Router();
const journalController = require('../controllers/journal.controller');

router
  .route('/api')
  .post(journalController.registerJournal);

router
  .route('/api/:id')
  .get(journalController.findJournal)
  .put(journalController.createJournalEntry);

module.exports = router;