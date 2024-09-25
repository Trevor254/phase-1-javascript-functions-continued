function saturdayFun(activity = "roller-skate"){
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity2 = "go to the office"){
    return `This Monday, I will ${activity2}.`
}

let wrapAdjective = function(style="*") {
  return function(adj="special") {
    return `You are ${style}${adj}${style}!`
  }
}


wrapAdjective()