import Logo from "../../images/logo.png"

const Footer = () => {
    return (
        <div className="bg-black text-white py-2">
            <div className="grid  lg:grid-cols-4  md:grid-cols-2 sm:grid-cols-1 px-6 py-6">
                <div className="mt-6">
                    <div className="flex items-center">
                        <img className="h-[70px]" src={Logo} alt="" />
                        <h1 className="text-3xl font-bold">Quick Bites</h1>
                    </div>
                </div>
                <div className="mt-6">
                    <h2 className="font-bold text-2xl mb-2">Company:</h2>
                    <p>About us</p>
                    <p>Team</p>
                    <p>Careers</p>
                    <p>Campaigns</p>
                    <p>Join as a Foodstar</p>
                    <p>Join as a Foodstar</p>
                </div>
                <div className="mt-6">
                    <h2 className="font-bold text-2xl mb-2">Legal:</h2>
                    <p>About us</p>
                    <p>Team</p>
                    <p>Careers</p>
                    <p>Campaigns</p>
                    <p>Join as a Foodstar</p>
                    <p>Join as a Foodstar</p>
                </div>
                <div className="mt-6">
                    <h2 className="font-bold text-2xl mb-2">Contact:</h2>
                    <p>ridimarahmanmou5804@gail.com</p>
                    <p>+880 1784-056496</p>
                </div>
            </div>
            <div className="grid justify-center">
                <img src="https://khanidani.com/assets/images/sslcomm.png" alt="" />
            </div>
        </div>
    );
};

export default Footer;