import Mastercraft from "./Mastercraft"
import Backers from "./Backers"
import Project from "./Project"


const MainSection = () => {
  return (
	<section className="relative bottom-10 flex flex-col items-center ">
		<Mastercraft />
		<Backers />
		<Project />
	</section>
  )
} 

export default MainSection