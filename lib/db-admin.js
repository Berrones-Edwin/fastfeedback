import { db } from '@/lib/firebase-admin'
import { compareDesc, parseISO } from 'date-fns'

export async function getAllFeedBack(siteID) {
  try {
    const snapshot = await db
      .collection('feedback')
      .where('siteID', '==', siteID)
      .get()

    const feedback = []

    snapshot.forEach(doc => {
      feedback.push({
        id: doc.id,
        ...doc.data()
      })
    })

    feedback.sort((a, b) => {
      compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
    })

    return { feedback }
  } catch (error) {
    return { error }
  }
}
export async function getAllSites() {
  const snapshot = await db.collection('sites').get()
  const sites = []

  snapshot.forEach(doc => {
    sites.push({
      id: doc.id,
      ...doc.data()
    })
  })
  return { sites }
}
export async function getUserFeeback(uid) {
  const snapshot = await db
    .collection('feedback')
    .where('authorID', '==', uid)
    .get()
  const feedback = []

  snapshot.forEach(doc => {
    feedback.push({
      id: doc.id,
      ...doc.data()
    })
  })
  return { feedback }
}

export async function getUserSites(uid) {
  const snapshot = await db
    .collection('sites')
    .where('authorID', '==', uid)
    .get()
  const sites = []

  snapshot.forEach(doc => {
    sites.push({
      id: doc.id,
      ...doc.data()
    })
  })
  return { sites }
}
