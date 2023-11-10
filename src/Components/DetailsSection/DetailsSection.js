import "./DetailsSection.css"
import img1 from "../../images/anna-rosar-ew-olGvgCCs-unsplash.jpg"

const DetailsSection = () => {
    return (
        <div className="details-section w-full  flex flex-col items-center justify-center gap-8">
            <h2 className="text-3xl">Tiya Club's Group Tournaments</h2>
            <img src={img1} alt="image golf" className="rounded-full image-details" />
            <div className="p-2 flex flex-col gap-9 text-center">
                <h3 className="text-black text-xl px-3">Golf Club based in Orlando</h3>
                <p className="text-gray-400">Tiya Golf Club is Bootstrap v5.3.0 HTML CSS template for your golf related websites. Anyone can download, edit and use this layout for commercial purposes.
                    Tiya is 100% free CSS template provided by TemplateMo website. Please tell your friends about our website. Thank you for visiting.</p>
                <div className="bg-gray-100 p-5 w-full md:w-fit rounded-3xl m-auto">
                    <h4 className="text-black text-lg py-4">Event Detail</h4>
                    <div className="flex flex-col gap-10 md:flex-row  items-start justify-start">
                        <div className="flex items-start justify-start flex-col gap-1">
                            <h3 className="text-gray-500">Date: </h3>
                            <p className="text-gray-300">18 Mar 2048</p>
                        </div>
                        <div className="flex items-start justify-start flex-col gap-1">
                            <h3 className="text-gray-500">Location: </h3>
                            <p className="text-gray-300">Tiya Golf Club</p>
                        </div>
                        <div className="flex items-start justify-start flex-col gap-1">
                            <h3 className="text-gray-500">Ticket: </h3>
                            <p className="text-gray-300">$150</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsSection
