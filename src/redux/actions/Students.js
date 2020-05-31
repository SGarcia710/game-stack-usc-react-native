export const Types = {
  SetSelectedStudent: 'students.setSelectedStudent',
  FetchAllOwnStudents: 'students.fetchAllOwnStudents',
  SetAllOwnStudents: 'students.setAllOwnStudents',
  RequestFailure: 'students.requestFailure',
  CreateStudent: 'students.createStudent',
  AddCreatedStudent: 'students.addCreatedStudent',
};

export const Actions = {
  setSelectedStudent: selectedStudent => ({
    type: Types.SetSelectedStudent,
    selectedStudent,
  }),
  fetchAllOwnStudents: userEmail => ({
    type: Types.FetchAllOwnStudents,
    userEmail,
  }),
  createStudent: (
    names,
    lastNames,
    code,
    date,
    institute,
    country,
    city,
    user,
  ) => ({
    type: Types.CreateStudent,
    names,
    lastNames,
    code,
    date,
    institute,
    country,
    city,
    user,
  }),
  addCreatedStudent: createdStudent => ({
    type: Types.AddCreatedStudent,
    createdStudent,
  }),
  setAllOwnStudents: studentsList => ({
    type: Types.SetAllOwnStudents,
    studentsList,
  }),
  requestFailure: error => ({type: Types.RequestFailure, error}),
};
