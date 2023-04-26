import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaStar } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useCreateReviewMutation } from "../../../../features/api/ApiSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../../../shared/Loading";
import auth from "../../../../firebase.init";



const colors = {
	orange: "#FFBA5A",
	grey: "#a9a9a9",
};

const AddReview = () => {
	const [addReveiw, { isLoading, isError, isSuccess }] =
		useCreateReviewMutation();
	const { register, handleSubmit, reset } = useForm();
	const [loading,] = useState(false);
	const [rating, setRating] = useState(0);
	const [hoverValue, setHoverValue] = useState(undefined);
	const [comment, setComment] = useState("");
	const stars = Array(5).fill(0);
	const [user] = useAuthState(auth);
	// console.log("user - ", user);

	// RENDER BY CONDITION
	if (isLoading || loading) {
		return <Loading />;
	}
	if (!isLoading && isError) {
		toast.error("Review can't added!😢");
	}
	if (!isError && !isLoading && isSuccess) {
		toast.success("Review added");
	}

	const handleComment = e => {
		setComment(e.target.value);
	};

	const handleClick = value => {
		setRating(value);
	};
	const handleMouseOver = newHoverValue => {
		setHoverValue(newHoverValue);
	};

	const handleMouseLeave = () => {
		setHoverValue(undefined);
	};
    

	const onSubmit = async data => {
		const uploadReview = {
			review: data.review,
			name: user?.displayName,
			email: user?.email,
			rating: rating,
			date: new Date().toDateString(),
		};
        console.log(uploadReview);

		if (!isLoading || isSuccess) {
			addReveiw(uploadReview);
			reset();
		}
	};

	return (
		<div className='w-full p-10 lg:w-1/2 mx-auto'>
			
			<h1 className='text-2xl text-center text-primary mb-2'>
				Write Your Opinion About <span className="font-bold text-red-500">Quick-Bites</span>
			</h1>
			<form onSubmit={handleSubmit(onSubmit)} className='card-body pb-0'>
				<div className='avatar mx-auto flex-col items-center gap-3'>
					
					<h2 className='text-2xl font-bold text-center mb-2'>{user?.displayName}</h2>
				</div>

				<div className='flex flex-row justify-center'>
					{stars.map((_, index) => {
						return (
							<FaStar
								key={index}
								size={24}
								onClick={() => handleClick(index + 1)}
								onMouseOver={() => handleMouseOver(index + 1)}
								onMouseLeave={handleMouseLeave}
								color={
									(hoverValue || rating) > index ? colors.orange : colors.grey
								}
								style={{
									marginRight: 10,
									cursor: "pointer",
								}}
							/>
						);
					})}
				</div>

				<textarea
					{...register("review", { required: false, maxLength: 500 })}
					className='textarea textarea-primary h-40 my-3 w-full outline-none border-2 border-gray-600 rounded-md p-2'
					value={comment}
					onChange={handleComment}
					placeholder='Please Your Feedback only take 120 characters'></textarea>

				<input
					type='submit'
					className='btn btn-primary  px-2 py-1 w-full rounded-lg font-bold bg-[#FFBA5A] hover:bg-orange-400 duration-200 cursor-pointer'
					value='Add Review'
					disabled={!rating}
				/>
			</form>
		</div>
	);
};

export default AddReview;
