const TwoCart = () => {

    return (
        <div className="py-12 mt-8">
            <div className="grid px-12 lg:grid-cols-2 md:grid-cols-2 justify-center items-center gap-4">
                <div
                    className="bg-red-500 p-5 text-white rounded-xl py-12"
                    style={{
                        backgroundImage: `url("https://winsfolio.net/html/foodio/assets/img/bbq.jpg")`,
                    }}
                >
                    <h1 className="text-4xl font-bold">Steaks & BBQ</h1>
                    <p>onical classics to obscure tiki drinks</p>
                    <div className="mt-6 ">
                        <h1 className="text-4xl font-bold text-red-500 ">$120</h1>
                    </div>
                </div>
                <div
                    className="bg-red-500 p-5 text-white rounded-xl py-12"
                    style={{
                        backgroundImage: `url("https://winsfolio.net/html/foodio/assets/img/bbq-1.jpg")`,
                    }}
                >
                    <h1 className="text-4xl font-bold">Cocktails</h1>
                    <p>onical classics to obscure tiki drinks</p>
                    <div className="mt-6 ">
                        <h1 className="text-4xl font-bold text-red-500 ">$120</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TwoCart;