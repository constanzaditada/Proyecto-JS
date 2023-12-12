// Función para calcular la nota final
function calcularNotaFinal(notas) {
    // Calcula el promedio de las notas
    const promedio = notas.reduce((sum, nota) => sum + nota, 0) / notas.length;
  
    // Asigna una calificación basada en el promedio en el rango de 1 a 10
    if (promedio >= 9) {
      return 10;
    } else if (promedio >= 8) {
      return 9;
    } else if (promedio >= 7) {
      return 8;
    } else if (promedio >= 6) {
      return 7;
    } else if (promedio >= 5) {
      return 6;
    } else {
      return 5;
    }
  }
  
  // Variable para almacenar las notas de los alumnos con nombres
  const alumnos = [
    { nombre: 'Ezequiel', notas: [8, 9, 7] },
    { nombre: 'Santiago', notas: [7, 8, 6] },
    { nombre: 'Macarena', notas: [9, 8, 9] },
    { nombre: 'Sofia', notas: [5, 4, 6] },
    { nombre: 'Julieta', notas: [6, 7, 7] },
    { nombre: 'Daniel', notas: [8, 9, 8] },
    { nombre: 'Martina', notas: [7, 8, 7] },
    { nombre: 'Alan', notas: [9, 9, 10] },
    { nombre: 'Carmela', notas: [6, 7, 5] },
    { nombre: 'Anna', notas: [8, 8, 9] }
  ];
  
  // Bucle for para repetir sobre cada alumno
  for (let i = 0; i < alumnos.length; i++) {
    const notaFinal = calcularNotaFinal(alumnos[i].notas);
    console.log(`${alumnos[i].nombre}: Nota final = ${notaFinal}`);
  }  