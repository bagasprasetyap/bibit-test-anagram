// ANAGRAM DATA
const array = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']

const groupAnagram = (data) => {
  let result = {};
  data.forEach((el) => {
    // SPLIT WORDS INTO EACH ALPHABET THEN SORTED AND THEN JOIN AGAIN INTO WORDS
    let words = el.split('').sort().join('');

    // GROUPING EACH WORDS INTO SAME ANAGRAM
    if (result[words]) {
      result[words].push(el);
    } else {
      result[words] = [el];
    }
  })

  return Object.values(result)
}

console.log(groupAnagram(array));

