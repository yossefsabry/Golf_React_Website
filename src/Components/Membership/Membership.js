import "./Membership.css"
import { BsExclamationCircleFill } from "react-icons/bs"
import { BsFillCheckCircleFill } from "react-icons/bs"
import { Btn2 } from "../Btn/Btn"

const Membership = () => {
    return (
        <div className="text-center membership overflow-hidden relative" id="MemberShip" data-aos="zoom-in">
            <h1 className="font-bold text-3xl py-5 pb-24">Membership at Tiya</h1>
            <div className="flex items-center justify-between lg:flex-row flex-col gap-3 4/4">
                <div className="flex flex-col items-start flex-1 flex-grow w-4/4 lg:w-2/4">
                    <h1 className="  py-2 text-lg">Membership Fees</h1>
                    <table>
                        <thead>
                            <tr >
                                <th>Yearly Access</th>
                                <th>T1 $420</th>
                                <th>T2 $640</th>
                                <th> T3 $860</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Golf Insurance</td>
                                <td><BsFillCheckCircleFill className="text-xl text-green-400 m-auto" /></td>
                                <td><BsFillCheckCircleFill className="text-xl text-green-400 m-auto" /></td>
                                <td><BsFillCheckCircleFill className="text-xl text-green-400 m-auto" /></td>
                            </tr>
                            <tr className="bg-gray-100">
                                <td>Club Facilities	</td>
                                <td><BsFillCheckCircleFill className="text-xl text-green-400 m-auto" /></td>
                                <td><BsFillCheckCircleFill className="text-xl text-green-400 m-auto" /></td>
                                <td><BsFillCheckCircleFill className="text-xl text-green-400 m-auto" /></td>
                            </tr>
                            <tr>
                                <td>Country Club</td>
                                <td><BsExclamationCircleFill className="text-xl text-red-400 m-auto" /></td>
                                <td><BsFillCheckCircleFill className="text-xl text-green-400 m-auto" /></td>
                                <td><BsFillCheckCircleFill className="text-xl text-green-400 m-auto" /></td>
                            </tr>
                            <tr className="bg-gray-100">
                                <td>Weekend Seasonal</td>
                                <td><BsExclamationCircleFill className="text-xl text-red-400 m-auto" /></td>
                                <td><BsFillCheckCircleFill className="text-xl text-green-400 m-auto" /></td>
                                <td><BsFillCheckCircleFill className="text-xl text-green-400 m-auto" /></td>
                            </tr>
                            <tr>
                                <td>Premium Courses</td>
                                <td><BsExclamationCircleFill className="text-xl text-red-400 m-auto" /></td>
                                <td><BsExclamationCircleFill className="text-xl text-red-400 m-auto" /></td>
                                <td><BsFillCheckCircleFill className="text-xl text-green-400 m-auto" /></td>
                            </tr>
                            <tr className="bg-gray-100">
                                <td>Pro's Networking</td>
                                <td><BsExclamationCircleFill className="text-xl text-red-400 m-auto" /></td>
                                <td><BsExclamationCircleFill className="text-xl text-red-400 m-auto" /></td>
                                <td><BsFillCheckCircleFill className="text-xl text-green-400 m-auto" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="lg:w-2/4 w-full">
                    <h2 className="py-2 text-lg text-left w-full">Please join us!</h2>
                    <div className="flex flex-col gap-5 w-full bg-content-member py-20 px-8 rounded-3xl">
                        <h2 className="text-xl font-bold text-white">Become a member</h2>
                        <input type="text" placeholder="Full Name" className="border py-3 px-5 rounded-3xl outline-none hover:border-teal-300 focus:border-r-teal-300" />
                        <input type="email" placeholder="Email Address" className="border py-3 px-5 rounded-3xl outline-none hover:border-teal-300 focus:border-r-teal-300" />
                        <textarea placeholder="Massage.." className="border py-3 px-5 rounded-3xl outline-none hover:border-teal-300 focus:border-teal-300" />
                        <Btn2 name="submit" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Membership
