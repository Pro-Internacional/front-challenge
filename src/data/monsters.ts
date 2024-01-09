
export enum MonsterType {
  ASUSTADOR,
  AYUDANTE
}

export enum MonsterBread {
  VOLADOR,
  REPTIL,
  CAMINANTE,
  SALTADOR
}

export enum MonsterPower {
  GRITAR,
  RASPAR,
  CORTAR,
  TELEPATIA
}

export default [
  {
    name: 'Sully',
    birth_date: '01 Jan 1970 00:00:00 GMT',
    height: 210,
    type: MonsterType.ASUSTADOR,
    bread: MonsterBread.CAMINANTE,
    powers: [
      MonsterPower.CORTAR,
      MonsterPower.GRITAR
    ]
  },
  {
    name: 'Randal',
    birth_date: '16 Jan 1980 00:00:00 GMT',
    height: 110,
    type: MonsterType.ASUSTADOR,
    bread: MonsterBread.REPTIL,
    powers: [
      MonsterPower.RASPAR,
      MonsterPower.TELEPATIA
    ]
  },
  {
    name: 'Mike',
    birth_date: '01 Jan 1976 00:00:00 GMT',
    height: 50,
    type: MonsterType.AYUDANTE,
    bread: MonsterBread.CAMINANTE,
    powers: [
      MonsterPower.GRITAR
    ]
  },
  {
    name: 'Mini',
    birth_date: '01 Jan 2010 00:00:00 GMT',
    height: 300,
    type: MonsterType.AYUDANTE,
    bread: MonsterBread.VOLADOR,
    powers: [
      MonsterPower.GRITAR,
      MonsterPower.TELEPATIA
    ]
  },
]