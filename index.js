// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Examples of usage:
  console.log(saturdayFun());

  function mondayWork(task = "go to the office") {
    return `This Monday, I will ${task}.`;
  }
  
  // Examples of usage:
  console.log(mondayWork());

  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  const simplePromptFunction = wrapAdjective("~");
console.log(simplePromptFunction("a star"));