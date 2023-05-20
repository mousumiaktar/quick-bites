
import { useAddFoodMutation } from '../../../../features/api/ApiSlice';
import Loading from '../../../shared/Loading';

const AddFood = () => {
    const [postFood, { isLoading, isSuccess, isError }] =
        useAddFoodMutation();

    
        if (isLoading) {
            return <Loading />
        }
        if (isSuccess) {
            alert("post success");
            // console.log("data post success");
        }
        if (isError) {
            return <p>error</p>;
        }
    


    const handlePost = (event) => {
        event.preventDefault();
        const postData = {
            fname: event.target.name.value,
            price: event.target.price.value,
            ftype: event.target.type.value,
            fimg: event.target.img.value,
        };
        console.log(postData);
        postFood(postData);
    };

    return (
        <div className="h-screen pt-8">
            <h2 className="text-2xl font-bold mt-5 text-center"><u>ADD FOOD</u></h2>
            <div className="shadow-xl py-6 px-4">
                <form onSubmit={handlePost}>
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                        Food Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        required
                        className=" border 2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                        Food types
                    </label>
                    <input
                        type="text"
                        name="type"
                        required
                        className=" border 2 roundedw-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                        Food Price
                    </label>
                    <input
                        type="number"
                        name="price"
                        required
                        className=" border 2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                        Food image Link
                    </label>
                    <input
                        type="text"
                        name="img"
                        required
                        className=" border 2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <br />
                    <button
                        type="submit"
                        className="bg-orange-500 w-full mt-6 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddFood;