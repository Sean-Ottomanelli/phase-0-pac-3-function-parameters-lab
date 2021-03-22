function introduction(name) {
    return `Hi, my name is ${name}.`
} 

function introductionWithLanguage(value1, value2) {
    console.log(`The two values are ${value1} and ${value2}.`);
    return `Hi, my name is ${value1} and I am learning to program in ${value2}.`
  }

  function introductionWithLanguageOptional(value1, value2 = "JavaScript") {
    console.log(`The two values are ${value1} and ${value2}.`);
    return `Hi, my name is ${value1} and I am learning to program in ${value2}.`
  }