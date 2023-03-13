

const Backers = () => {
  return (
	<section className="flex relative mt-4 bg-slate-100 flex-col  w-[90%] md:w-1/2 px-4 py-8 rounded-md">
		<section className="flex flex-col items-center md:items-start md:flex-row justify-between mb-8">
			<div className=" flex-1 py-2 border-b-[1px] md:border-b-0 md:border-r-[1px] border-r-slate-300 px-2">
				<h2 className="text-[32px] font-bold">$89,914</h2>
				<p className="">of $100,000 backed</p>
			</div>
			<div className=" flex-1 py-2 border-b-[1px] md:border-b-0 md:border-r-[1px] border-r-slate-300 px-2">
				<h2 className="text-[32px] font-bold">5007</h2>
				<p className="">total backers</p>
			</div>
			<div className=" flex-1 py-2  px-2">
				<h2 className="text-[32px] font-bold">56</h2>
				<p className="">days left</p>
			</div>
		</section>
		<input type="range" name="" id="" />
	</section>
  )
}

export default Backers