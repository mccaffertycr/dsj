const Journal = require('../models/journal');

module.exports = {
  registerJournal: (req, res) => {
    console.log(req.body);
    Journal
      .findOne(req.body)
        .then(dbResult => {
        if (dbResult) console.log('A journal is already registered for this user.');
        else {
          Journal
            .create(req.body)
            .then(dbJournal => {
              res.send('Successfully registered new journal.');
            })
            .catch(err => res.status(422).json(err));
        }
      })
      .catch(err => res.status(422).json(err));
  },
  findJournal: (req, res) => {
    Journal 
      .findOne({ googleId: req.params.id })
      .then(dbJournal => {
        res.json(dbJournal.entries);
      })
      .catch(err => res.status(422).json(err));
  },
  createJournalEntry: (req, res) => {
    Journal
      .findOneAndUpdate({ googleId: req.params.id }, {$push: { entries: req.body }})
      .then(dbJournal => {
        res.send('Successfully entered new journal entry.')
      })
      .catch(err => res.status(422).json(err));
  },
}