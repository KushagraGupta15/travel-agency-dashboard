import { Header } from "components"

const Trips = () => {
  return (
    <main className="all-users wrapper">
      <Header
        title="Manage User"
        description="View and edit AI-generated travel plans"
        ctsText="Create New Trip"
        ctaUrl="/trips/create"
      />
    </main>
  )
}

export default Trips
