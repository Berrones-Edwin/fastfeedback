// eslint-disable-next-line import/no-anonymous-default-export
export default async (...args) => {
  const res = await fetch(...args)
  return res.json()
}
