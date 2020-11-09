import _ from 'lodash'
const PRESENTS_COLLECTION_NAME = 'presents-2020'

export const getList = async function() {
  const presentsRef = window.db.collection(PRESENTS_COLLECTION_NAME)
  const presentsStapshot = await presentsRef.get()
  return presentsStapshot.docs.map( doc => doc.data())
}

export const getTaker = async function(giver) {
  const presentsRef = window.db.collection(PRESENTS_COLLECTION_NAME)
  const presentsStapshot = await presentsRef.get()
  const presents = presentsStapshot.docs.map( doc => doc.data())
  const present = _.find(presents, item => item.from === giver)
  return _.get(present, 'to')
}

export const addPresent = async function(giver, taker) {
  const presentsRef = window.db.collection(PRESENTS_COLLECTION_NAME)
  presentsRef.add({from: giver, to: taker})
}
