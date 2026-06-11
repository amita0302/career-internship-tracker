import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  internships: [
    {
      id: 1,
      company: 'Google',
      jobTitle: 'ML Engineer Intern',
      location: 'Bangalore',
      appliedDate: '2026-05-01',
      status: 'Interview',
      notes: 'Round 2 scheduled',
    },
    {
      id: 2,
      company: 'HCL Technologies',
      jobTitle: 'Full Stack Intern',
      location: 'Noida',
      appliedDate: '2026-05-10',
      status: 'Applied',
      notes: 'Waiting for response',
    },
    {
      id: 3,
      company: 'Infosys',
      jobTitle: 'Data Science Intern',
      location: 'Hyderabad',
      appliedDate: '2026-04-20',
      status: 'Offer',
      notes: 'Offer letter received',
    },
    {
      id: 4,
      company: 'Wipro',
      jobTitle: 'Backend Intern',
      location: 'Pune',
      appliedDate: '2026-04-15',
      status: 'Rejected',
      notes: 'Not selected',
    },
    {
      id: 5,
      company: 'Amazon',
      jobTitle: 'SDE Intern',
      location: 'Remote',
      appliedDate: '2026-05-20',
      status: 'Screening',
      notes: 'Online test pending',
    },
  ],
}

const internshipsSlice = createSlice({
  name: 'internships',
  initialState,
  reducers: {
    addInternship(state, action) {
      state.internships.push(action.payload)
    },
    updateInternship(state, action) {
      const index = state.internships.findIndex(
        (i) => i.id === action.payload.id
      )
      if (index !== -1) {
        state.internships[index] = action.payload
      }
    },
    deleteInternship(state, action) {
      state.internships = state.internships.filter(
        (i) => i.id !== action.payload
      )
    },
  },
})

export const { addInternship, updateInternship, deleteInternship } =
  internshipsSlice.actions
export default internshipsSlice.reducer