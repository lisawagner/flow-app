import { Link } from "react-router-dom"

const FlowLanding = () => {
  return (
    <>
      <h1>Flow Landing Page</h1>
      <p>Details and description of the project</p>
      <p>Hero with GetStarted button redireting user to flow</p>
      <button>
        <Link to="/flow">
          <span>GetStarted</span> 
        </Link>
      </button>
    </>
  )
}

export default FlowLanding