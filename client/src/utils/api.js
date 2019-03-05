import axios from 'axios';

export default {
  registerJournal: id => axios.post('/api', { googleId: id }),
  getJournalEntries: id => axios.get(`/api/${id}`),
  submitJournalEntry: (id, entry) => axios.put(`/api/${id}`, entry)
}