import Modal from "react-overlays/Modal";
import { useState } from "react";
import Data from "../Data"

const Project = () => {
	const [showPledge,setShowPledge]=useState(false)
	const [showModal, setShowModal] = useState(false);	
	const renderBackdrop = (props) => <div className="backdrop" {...props} />;
	const handleClose = () => setShowModal(false);
	const SetShowPledge=()=>{
		setShowPledge(prev=>!prev)
		console.log(showPledge)
	}
	const mappedArray= Data.map(obj=>(
		<section onClick={() => setShowModal(true)} key={obj.id} className="bamboo-div border-[1px] border-slate-300 rounded-lg p-4 my-4">
			<div onClick={SetShowPledge}  className="flex justify-between">
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
		<h3  className=" font-bold text-lg py-4">About this project</h3>
		<p className="">The Mastercraft of Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to more comfortable viewing height. Placing your monitor at eye level has the potential to improve your moisture and make you comfortable at work, helping you stay focus on the works at hand.</p>
		<p className="mt-4">Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads,pens and USB sticks to be stored under the stand</p>
		{mappedArray}
		<section className="mahogany border-[1px] border-slate-300 rounded-lg p-4 section-4">
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
		<Modal
        className="modal"
        show={showModal}
        onHide={handleClose}
        renderBackdrop={renderBackdrop}
      >
        <section  className="p-4 w-3/5 mx-auto border-[2px] rounded-md ">
			<span className=" cursor-pointer text-2xl font-bold" onClick={handleClose}>
					x
				</span>
			<h3 className=" font-bold text-lg">Back This Project</h3>
			<p className="pb-4 text-[14px] text-slate-500">want to support us in bringing MasterCraft Bamboo Monitor Riser out in the World?</p>
			<section className="modal-div my-2 text-[12px] md:text-[14px] border-2 p-4 rounded-lg ">
				<div className=" flex space-x-4 pb-4">
					<div className="">
						<input type="checkbox" name="" id="" />
					</div>
					<div className="">
						<h4 className=" font-bold">Pledge with no reward</h4>
						<p className="">Choose to support us without a reward if you simply believe in our project. As a Backer, you would be signed up to receive products updates via email</p>
					</div>
				</div>
			</section>
			<section className="modal-div my-2 text-[12px] md:text-[14px] border-2 p-4 rounded-lg">
				<div className=" flex space-x-4 pb-4">
					<div className="">
						<input type="checkbox" name="" id="" />
					</div>
					<div className="">
						<h4 className=" font-bold">Bamboo Stand</h4>
						<p className="">You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign and you would be added to the special Backer member list</p>
					</div>
				</div>
			</section>
			<section className="modal-div text-[12px] md:text-[14px] border-2 p-4 rounded-lg">
				<div className=" flex space-x-4 pb-4">
					<div className="">
						<input type="checkbox" name="" id="" />
					</div>
					<div className="">
						<h4 className=" font-bold">Mahogany special Edition</h4>
						<p className="">You get two special Edition Mahogany Stands, a Backer T-shirt and a special Thank You. You'll be added to our Backer member List. Shipping is included.</p>
					</div>
				</div>
			</section>
          
        </section>
      </Modal>
	</section>
  )
}

export default Project