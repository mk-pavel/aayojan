import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const featuresData = [
    {
        "id": 1,
        "name": "Masum Kawsar",
       // "job": "Frontend & UI/UX Designer",
        "image": "https://i.ibb.co.com/j6mKMnV/mk.jpg",
        "animation": "fade-down"
    },
    {
        "id": 2,
        "name": "Mayishat Altab Mridu",
        //"job": "Web Developer",
        "image": "https://i.ibb.co.com/2Mv4x4W/mayi.jpg",
        "animation": "fade-in"
    },
    {
        "id": 3,
        "name": "Tanjila Islam Lamisha",
        //"job": "Graphic Developer",
        "image": "https://i.ibb.co.com/302zjrd/kuttar-baccha.jpg",
        "animation": "fade-up"
    }
];

const Team = () => {
    useEffect(() => {
        AOS.init({
            offset: 300,
            duration: 1000
        });
    }, []);

    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 my-24">
            <div data-aos="fade-down" className="text-center">
                <h2 className="text-4xl font-semibold font-poppins">Our Creative <span className="text-[#FF5A60]">Team</span></h2>
                <p className="text-lg font-poppins mb-10">We can provide as you need</p>
            </div>
            <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    featuresData.map((data) => <div data-aos={data.animation} key={data.id} className="border rounded-xl shadow-lg flex items-center justify-center p-5 gap-5 font-poppins">
                        <img src={data.image} className="inline-block mb-2 w-20" alt="features-icon" />
                        <div>
                            <h4 className="text-lg font-semibold font-poppins">{data.name}</h4>
                            <p>{data.job}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Team;
