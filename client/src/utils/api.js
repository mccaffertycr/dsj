import axios from 'axios';

export default {
  registerJournal: (id, email) => axios.post('/api', { googleId: id, email: email }),
  getJournalEntries: id => axios.get(`/api/${id}`),
  submitJournalEntry: (id, entry) => axios.put(`/api/${id}`, entry)
}