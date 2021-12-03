import DashboardShell from '@/components/DashboardShell'
import EmptyState from '@/components/EmptyState'
import SiteTable from '@/components/SiteTable'
import SiteTableSkeleton from '@/components/SiteTableSkeleton'
import { useAuth } from '@/lib/auth'
import fetcher from '@/utils/fetcher'
import useSWR from 'swr'

const Dashboard = () => {
  const auth = useAuth()
  const { data } = useSWR('/api/sites', fetcher)

  if (!auth.user) return 'Loading....'
  if (!data) {
    return (
      <DashboardShell>
        <SiteTableSkeleton />
      </DashboardShell>
    )
  }
  return (
    <DashboardShell>
      {data ? <SiteTable sites={data.sites} /> : <EmptyState />}
    </DashboardShell>
  )
}

export default Dashboard
