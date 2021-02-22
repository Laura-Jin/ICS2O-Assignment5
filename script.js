document.getElementById('area').addEventListener('click', areaButton)
document.getElementById('circumference').addEventListener('click', circumferenceButton)

let diameter = 0
let area = 0
let circumference = 0
let pi = Math.PI

function areaButton () {
  diameter = document.getElementById('number').value
  diameter = parseFloat(diameter)
  pi = parseFloat(pi)

  area = pi * (diameter / 2) ** 2
  document.getElementById('answer-area').innerHTML = area
}

function circumferenceButton () {
  diameter = document.getElementById('number').value
  diameter = parseFloat(diameter)
  pi = parseFloat(pi)

  circumference = pi * diameter
  document.getElementById('answer-circumference').innerHTML = circumference
}
