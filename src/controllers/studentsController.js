import {createStudent, getAllOwnStudents} from '../services/students';

export const createStudentController = async (
  names,
  lastNames,
  code,
  date,
  institute,
  country,
  city,
  user,
) => {
  try {
    const payload = {
      datos: {
        nombres: names,
        apellidos: lastNames,
        codigo: code,
        nacimiento: date,
        institucion: institute,
        pais: country,
        ciudad: city,
        instructor: user,
      },
    };
    // We catch the student to add it to the state
    const response = await createStudent(payload);
    return response.data;
  } catch (error) {
    throw new Error('Ha ocurrido un error creando al estudiante');
  }
};

export const getAllOwnStudentsController = async userEmail => {
  const payload = {
    instructor: userEmail,
  };
  const response = await getAllOwnStudents(payload);
  return response.data;
};
