import Loading from '../../../shared/Loading';
import { useQuery } from "react-query";
import MakeAdmin from "./MakeAdmin";



const AllUser = () => {
    
    
       const {
         data: users,
         isLoading,
         refetch,
       } = useQuery("users", () =>
         fetch("http://localhost:5000/user", {
           method: "GET",
           headers: {
             authorization: `Bearer ${localStorage.getItem("accessToken")}`,
           },
         }).then((res) => res.json())
       );
       if (isLoading) {
         return <Loading></Loading>;
       }
 
   
     
   
    
    return (
      <div className="overflow-x-auto h-screen pt-8">
        <table className="table-auto w-full">
          <thead className="bg-orange-400">
            <tr>
              <th className="px-4 py-2">Index</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>

            {users?.map((user,index) => (
              <MakeAdmin key={user._id} user={user} index={index} refetch={refetch}></MakeAdmin>
            ))
          }

          </tbody>
        </table>
      </div>
    );
};

export default AllUser;