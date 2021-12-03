import { getAllSites } from '@/lib/db-admin'
// eslint-disable-next-line import/no-anonymous-default-export
export default async (_, res) => {
  const { sites, error } = await getAllSites()
  
  if (error) {
    return res.status(500).json({ error })
  }
  res.status(200).json({ sites })
}
