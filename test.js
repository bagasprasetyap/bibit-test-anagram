// ANAGRAM DATA
const array = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']

let result = {};
array.forEach((el) => {
  // SPLIT WORDS INTO EACH ALPHABET THEN SORTED AND THEN JOIN AGAIN INTO WORDS
  let words = el.split('').sort().join('');

  // GROUPING EACH WORDS INTO SAME ANAGRAM
  if (result[words]) {
    result[words].push(el);
  } else {
    result[words] = [el];
  }
})

console.log(Object.values(result));

