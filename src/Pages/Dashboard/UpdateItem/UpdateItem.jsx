import { useLoaderData } from "react-router-dom";

const UpdateItem = () => {
    const item = useLoaderData();
    console.log(item)
    return (
        <div>
            updateItem
        </div>
    );
};

export default UpdateItem;