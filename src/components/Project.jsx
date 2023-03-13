import Data from "../Data"

const Project = () => {
	const mappedArray= Data.map(obj=>(
		<section key={obj.id} className="border-[1px] border-slate-300 rounded-lg p-4 my-4">
			<div className="flex justify-between">
				<h3 className=" font-bold">{obj.first}</h3>
				<h4 className=" text-[14px] pledge font-semibold">{obj.second}</h4>
			</div>
			<p className=" text-[14px]">{obj.third}</p>
			<div className="flex justify-between py-4">
				<h3 className="font-bold text-2xl flex items-center">{obj.fourth}<span className="ml-[2px] text-slate-400 font-normal text-sm">{obj.fifth}</span></h3>
				<button className="green text-white text-[14px] font-semibold bg-red-500 rounded-full py-2 px-6">{obj.sixth}</button>
			</div>
		</section>
	))
  return (
	<section className=" flex relative bg-slate-100 flex-col w-[90%] md:w-1/2 px-4 py-8 rounded-md mt-4">
		<h3 className=" font-bold text-lg py-4">About this project</h3>
		<p className="">The Mastercraft of Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to more comfortable viewing height. Placing your monitor at eye level has the potential to improve your moisture and make you comfortable at work, helping you stay focus on the works at hand.</p>
		<p className="mt-4">Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads,pens and USB sticks to be stored under the stand</p>
		{mappedArray}
		<section className="mahogany border-[1px] border-slate-300 rounded-lg p-4 my-4">
			<div className="flex justify-between">
				<h3 className=" font-bold">Mahogany Special Edition</h3>
				<h4 className=" text-[14px] pledge font-semibold">Pledge $200 or more</h4>
			</div>
			<p className=" text-[14px]">You get two special Edition Mahogany stands,a Backer T-shirt and a personal thank you. You'll be added to our Backer member list. Shipping is included. </p>
			<div className="flex justify-between py-4">
				<h3 className="font-bold text-2xl flex items-center">0<span className="ml-[2px] text-slate-400 font-normal text-sm">left</span></h3>
				<button disabled className="ash text-white text-[14px] font-semibold bg-red-500 rounded-full py-2 px-6">Out of stock</button>
			</div>
		</section>
	</section>
  )
}

export default Project