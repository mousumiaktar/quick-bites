const MakeAdmin = ({user,index}) => {
       const { email, role, _id } = user;
       const makeAd = () => {
         fetch(`https://quickbites.onrender.com/user/admin/${email}`, {
           method: "PUT",
           headers: {
             
             authorization: `Bearer ${localStorage.getItem("accessToken")}`,
           },
         })
           .then((res) => {
             if (res.status === 403) {
               alert("faild.you not admin");
             }

             return res.json();
           })
           .then((data) => {
             if (data.modifiedCount > 0) {
               refetch();
               alert(`you are Admidded`);
             }
           });
       };






  return (
    <tr>
      <th className="border  px-4 py-2">{index + 1}</th>

      <td className="border px-4 py-2">{user?.email} </td>

      <td className="border  px-4 py-2">
        <td>
          
            {role !== "admin" && (
              <button
                onClick={makeAd}
                className="bg-red-500 px-2 rounded text-white"
              >
                Make Admin{" "}
              </button>
            )}
          

          <button className="bg-red-500 mx-2 px-4 rounded text-white">
            Delete
          </button>
        </td>
      </td>
    </tr>
  );
}

export default MakeAdmin;