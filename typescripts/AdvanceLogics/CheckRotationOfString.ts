function isStringRotation(original: string, rotated: string, caseSensitive = true): boolean {

  if (original.length !== rotated.length) {
    return false;
  }

  // Empty strings are rotations of each other (0-character rotation)
  if (original.length === 0) {
    return true;
  }

 // const base = caseSensitive ? original : original.toLowerCase();
 // const target = caseSensitive ? rotated : rotated.toLowerCase();
//
  //return (base + base).includes(target);

  
  let base: string;
  if (caseSensitive) {
    base = original;
  } else {
    base = original.toLowerCase();
  }

  let target: string;
  if (caseSensitive) {
    target = rotated;
  } else {
    target = rotated.toLowerCase();
  }

  return (base + base).includes(target);
  /* ex AbdulMinhaj + AbdulMinhaj => AbdulMinhajAbdulMinhaj
  now we are checking MinhajAbdul is included in AbdulMinhajAbdulMinhaj => Abdul MinhajAbdul Minhaj
  
  */
}

// Examples
console.log(isStringRotation("TypeScript", "ScriptType"));        // true
console.log(isStringRotation("TypeScript", "TypeScript"));        // true (0-step rotation)
console.log(isStringRotation("TypeScript", "scripttype", false)); // true
console.log(isStringRotation("TypeScript", "scripttype"));        // false (default is case-sensitive)
console.log(isStringRotation("abc", "acb"));                      // false (same chars, wrong order)
console.log(isStringRotation("abc", "abcd"));                     // false (different lengths)