export const shufflePokemonsList = array => {
  let m = array.length,
    t,
    i;

  // Поки є елементи для перемішування
  while (m) {
    // Взяти елемент, що залишився
    i = Math.floor(Math.random() * m--);

    // І поміняти його місцями з поточним елементом
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
};
