import "./About.css"
import image1 from "../../images/members/portrait-young-handsome-businessman-wearing-suit-standing-with-crossed-arms-with-isolated-studio-white-background.jpg"
import image2 from "../../images/members/successful-asian-lady-boss-red-blazer-holding-clipboard-with-documens-pen-working-looking-happy-white-background.jpg"

const About = () => {
    return (
        <div className="about-tyia py-5" data-aos="zoom-in" id="About" >
            <h1 className="block text-center text-4xl " >About Tiya</h1>
            <div className="flex items-center justify-between mt-10 md:flex-row flex-col gap-5">
                <div className="flex items-start gap-5 flex-col md:w-2/4">
                    <h2 className="text-xl">Tiya Club History</h2>
                    <p className="text-lg text-gray-500">Since 1984, Tiya is ranked #8 in the top 10 golf courses in the world. Tiya is Bootstrap 5 HTML CSS template for golf clubs. Anyone can modify and use this layout for commercial purposes.</p>
                    <p className="text-lg text-gray-500">Tiya Golf Club is 100% free CSS template provided by TemplateMo website. Please tell your friends about our website. Thank you for visiting.</p>
                </div>
                <div className="md:flex-row flex-col flex items-center justify-between gap-4">
                    <div className="card flex flex-col gap-1 items-center rounded-md cursor-pointer hover:translate-y-2 transition">
                        <img src={image1} alt="image-worker" className="rounded-lg" width={400} />
                        <div className="flex flex-row items-center justify-between gap-20 p-4">
                            <h2>Michael</h2>
                            <p className="text-gray-300">Founder</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 items-center rounded-md cursor-pointer hover:translate-y-2 transition">
                        <img src={image2} alt="image-worker" className="rounded-lg" width={400} />
                        <div className="flex flex-row items-center justify-between gap-20 p-4">
                            <h2>Sandy</h2>
                            <p className="text-gray-300">Co-Founder</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
