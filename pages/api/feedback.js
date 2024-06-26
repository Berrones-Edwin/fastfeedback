import { getAllFeedbackForSites } from '@/lib/db-admin'
import { auth } from '@/lib/firebase-admin'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  try {
    const { uid } = await auth.verifyIdToken(req.headers.token)
    const { feedback } = await getAllFeedbackForSites(uid)
    console.log(feedback)
    
    res.status(200).json({ feedback })
  } catch (error) {
    res.status(500).json({ error })
  }
}
