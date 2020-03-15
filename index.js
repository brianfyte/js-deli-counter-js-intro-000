var katzDeli = [];
function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
  return "Welcome, " + `${name}` + ". You are number " + `${katzDeli.length}` + " in line."
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length !== 0) {
    return "Currently serving " + `${katzDeliLine.shift()}` + ".";
  }
  else {
    return "There is nobody waiting to be served!";
  }
}


function currentLine(line) {
  var katzDeliLine = []
  
  if (line.length === 0){
    return "The line is currently empty."
  } else {
      var i = 0
      while (i < line.length) {
        katzDeliLine.push(" " + [i + 1] + ". " + line[i])
        i++;
      }
      return "The line is currently:" + katzDeliLine;
  }
}
