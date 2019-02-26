function takeANumber(line, newPerson) {
  var n = line.length + 1
  line.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${n} in line.`
  }

  function nowServing(katzDeliLine) {
    if (katzDeliLine.length === 0) {
      return "There is nobody waiting to be served!"
    }
    else {
      console.log(`Currently serving ${katzDeliLine[0]}`)
      katzDeliLine.shift();
    }
    }
