import { getAllFeedBack } from '@/lib/db-admin'
import db from '@/lib/firebase-admin'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const siteId = req.query.siteID
 
  const { feedback, error } = await getAllFeedBack(siteId)

  if (error) {
    res.status(500).json({ error })
  }

  res.status(200).json({ feedback })
}
