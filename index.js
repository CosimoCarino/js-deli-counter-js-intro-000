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
      var firstPerson =katzDeliLine[0]
      katzDeliLine.shift();
      return`Currently serving ${firstPerson}.`
    }
    }
