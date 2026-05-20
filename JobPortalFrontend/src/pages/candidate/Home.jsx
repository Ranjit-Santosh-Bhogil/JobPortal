import { Link } from 'react-router-dom'
import PageHeader from '@/components/common/PageHeader'
import StatCard from '@/components/common/StatCard'
import { ROUTES } from '@/config/routes'
import '@/styles/dashboard.css'

export default function Home() {
  return (
    <>
      <PageHeader
        title="Welcome back"
        subtitle="Track applications and discover new opportunities"
        actions={
          <Link
            to={ROUTES.CANDIDATE.JOBS}
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
          >
            Browse jobs
          </Link>
        }
      />

      <div className="dashboard-grid">
        <StatCard label="Applied" value="—" />
        <StatCard label="Saved" value="—" />
        <StatCard label="Interviews" value="—" />
        <StatCard label="Offers" value="—" />
      </div>
    </>
  )
}
