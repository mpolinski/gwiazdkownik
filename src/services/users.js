export const getUsers = async function() {
  const usersRef = window.db.collection('users')
  const usersStapshot = await usersRef.get()
  return usersStapshot.docs.map(
    function (doc) {
      return { email: doc.id, ...doc.data()}
    }
  )
}

export const getUser = async function(email) {
  const usersRef = window.db.collection('users')
  const userDoc = await usersRef.doc(email).get()
  return userDoc.exists ? userDoc.data() : null
}
