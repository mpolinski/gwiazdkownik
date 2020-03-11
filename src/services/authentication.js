import _ from 'lodash'

const authorizedUsers = [
  {
    email: 'test@test.pl',
    name: 'Testowy',
    password: '111',
  },
  {
    email: 'mariusz.polinski@gmail.com',
    name: 'Marian',
    password: '1234',
  },
  {
    email: 'iwona@poczta.pl',
    name: 'Iwonka',
    password: '1111',
  },
  {
    email: 'sylwia@poczta.pl',
    name: 'Sylwia',
    password: '2222',
  },
  {
    email: 'krzysiek@poczta.pl',
    name: 'Krzysiek',
    password: '3333',
  },
  {
    email: 'magda@poczta.pl',
    name: 'Magda',
    password: '4444',
  },
  {
    email: 'edek@poczta.pl',
    name: 'Edek',
    password: '5555',
  },
  {
    email: 'basia@poczta.pl',
    name: 'Basia',
    password: '6666',
  },
]

export const loginByEmailAndPassword = credentials => {
  return _.find(authorizedUsers, item => item.email === credentials.email && item.password === credentials.password)
}
