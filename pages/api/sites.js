import db from '@/lib/firebase-admin'
// eslint-disable-next-line import/no-anonymous-default-export
export default async (_, res) => {
  const snapshot = await db.collection('sites').get()
  const sities = []

  snapshot.forEach(doc => {
    sities.push({
      id: doc.id,
      ...doc.data()
    })
  })

  res.status(200).json(sities)
}
