  import Navigation from "@/components/Navigation"
  import RateCard from "@/components/RateCard"
  import Footer from "@/components/Footer"

  export default function SolutionPage() {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-16">
          <RateCard />      
        </div>
        <Footer />
      </div>
    )
  }
