/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Step 1: Convert both strings to lowercase to ignore case sensitivity
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // Step 2: Split each string into an array of characters, sort them alphabetically, and join them back into a string
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');

  // Step 3: Check if the sorted strings are the same
  return sortedStr1 === sortedStr2;
}

isAnagram("done", "node")

module.exports = isAnagram;
