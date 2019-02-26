function takeANumber(line, newPerson) {
  var n = line.length + 1
  line.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${n} in line.`
  }
