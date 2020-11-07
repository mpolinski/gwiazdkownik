import _ from 'lodash'
import { getUsers } from '@/services/users'

export const loginByEmailAndPassword = async (credentials) => {
  try {
    const users = await getUsers()
    return _.find(users, item => item.email === credentials.email && item.password === credentials.password)
  } catch (error){
    console.log(error);
    return null
  }
}
