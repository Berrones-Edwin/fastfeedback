import Head from 'next'
import EmptyState from '@/components/EmptyState'
import { useAuth } from '@/lib/auth'
import useSWR from 'swr'
import fetcher from '@/utils/fetcher'
import DashboardShell from '@/components/DashboardShell'
import SiteTableSkeleton from '@/components/SiteTableSkeleton'
import SiteTable from '@/components/SiteTable'

const Dashboard = () => {
  const auth = useAuth()
  const { data } = useSWR('/api/sites', fetcher)
  console.log(data);

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
      {data ? <SiteTable sites={data} /> : <EmptyState />}
    </DashboardShell>
  )
}

export default Dashboard
