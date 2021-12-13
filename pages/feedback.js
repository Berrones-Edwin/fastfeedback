import DashboardShell from '@/components/DashboardShell'
import EmptyState from '@/components/EmptyState'
import FeedBackTable from '@/components/FeedBackTable'
import FeedBackTableHeader from '@/components/FeedBackTableHeader'
import SiteTableSkeleton from '@/components/SiteTableSkeleton'
import { useAuth } from '@/lib/auth'
import fetcher from '@/utils/fetcher'
import useSWR from 'swr'

const Feedback = () => {
  const { user } = useAuth()
  const { data } = useSWR(user ? ['/api/feedback', user.token] : null, fetcher)

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
      {data ? <FeedBackTable allFeedback={data.feedback} /> : <EmptyState />}
    </DashboardShell>
  )
}

export default Feedback
