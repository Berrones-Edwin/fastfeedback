import { getAllFeedBack, getSite } from '@/lib/db-admin'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const siteId = req.query.siteID

  const { feedback, error } = await getAllFeedBack(siteId)

  const { site } = await getSite()

  if (error) {
    res.status(500).json({ error })
  }

  res.status(200).json({ feedback, site })
}
