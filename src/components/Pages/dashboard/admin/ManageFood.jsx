const ManageFood = () => {
    return (
        <div className="overflow-x-auto">
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Food-Name</th>
                        <th className="px-4 py-2">Price</th>
                        <th className="px-4 py-2">Food-Type</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border px-4 py-2">Cold Chicken Sandwich</td>
                        <td className="border px-4 py-2">110 TK.</td>
                        <td className="border px-4 py-2">Sandwich</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Cold Chicken Sandwich</td>
                        <td className="border px-4 py-2">110 TK.</td>
                        <td className="border px-4 py-2">Sandwich</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ManageFood;