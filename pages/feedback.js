import DashboardShell from '@/components/DashboardShell'
import FeedBackEmptyState from '@/components/FeedBackEmptyState'
import FeedBackTable from '@/components/FeedBackTable'
import FeedBackTableHeader from '@/components/FeedBackTableHeader'
import SiteTableSkeleton from '@/components/SiteTableSkeleton'
import { useAuth } from '@/lib/auth'
import fetcher from '@/utils/fetcher'
import useSWR from 'swr'

const Feedback = () => {
  const { user } = useAuth()
  const { data } = useSWR(user ? ['/api/feedback', user.token] : null, fetcher)

  // console.log(data)

  if (!data) {
    return (
      <DashboardShell>
      <FeedBackTableHeader />
        <SiteTableSkeleton />
      </DashboardShell>
    )
  }
  return (
    <DashboardShell>
      <FeedBackTableHeader />
      {data?.feedback?.length ? <FeedBackTable allFeedback={data.feedback} /> : <FeedBackEmptyState />}
    </DashboardShell>
  )

   
}

export default Feedback
