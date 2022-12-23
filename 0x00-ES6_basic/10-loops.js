export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  const newArray = [...array];
  for (const element of array) {
    newArray[i] = appendString + element;
    i += 1;
  }

  return newArray;
}
