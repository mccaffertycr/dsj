import axios from 'axios';

export default {
  registerJournal: id => axios.post('/api', id),
  submitJournalEntry: (id, entry) => axios.put(`/api/${id}`, entry)
}