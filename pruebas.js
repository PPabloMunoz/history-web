const objects = [
  {
    id: 1,
    name: 'Atapuerca',
    year: '',
    definition:
      'Yacimiento declarado Patrimonio de la Humanidad situado en la provincia de Burgos. Se descubrieron los restos el Homo antecessor. Multitud de restos datables en 430.000 BP. '
  },
  {
    id: 2,
    name: 'Pueblos Prerromanos',
    year: 'Siglos IX aC al VI aC',
    definition: 'pueblos indigenas'
  },
  {
    id: 3,
    name: 'Tartessos',
    year: 'VIII al VI aC',
    definition: 'Primeros hispánicos que se realacionaron'
  },
  {
    id: 4,
    name: 'Tartessos',
    year: 'VIII al VI aC',
    definition: 'Primeros hispánicos que se realacionaron'
  },
  {
    id: 5,
    name: 'Tartessos',
    year: 'VIII al VI aC',
    definition: 'Primeros hispánicos que se realacionaron'
  }
]

function aleatory(data) {
  const random = []
  let temp = data

  for (let i = 0; i < 3; i++) {
    let rand = Math.floor(Math.random() * temp.length)
    let rValue = temp[rand]

    while (random.includes(rValue)) {
      rand = Math.floor(Math.random() * temp.length)
      rValue = temp[rand]
    }
    random.push(rValue)

    temp = temp.filter((e) => e !== rValue)
  }

  // console.log(temp, 'temp')
  // console.log(random, 'random')

  return random
}

console.log(aleatory(objects))
