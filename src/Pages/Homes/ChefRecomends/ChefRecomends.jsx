import { useEffect, useState } from "react";
import SectionTitlr from "../../../Components/SectionTitle/SectionTitlr";
import ChefRecommendsCards from "./ChefRecommendsCards";

const ChefRecomends = () => {
    const [chef, setChef] = useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data =>{
            const popularItems = data.filter((item) => item.category === "chef");
            setChef(popularItems);
        })
    },[setChef])
    return (
        <section className="max-w-screen-lg mx-auto pb-20">
            <SectionTitlr
            heading='CHEF RECOMMENDS'
            subHeading='Should Try'
            ></SectionTitlr>


            <div className="grid md:grid-cols-3 gap-10">
                {
                    chef?.map((item) => <ChefRecommendsCards key={item._id} item={item}></ChefRecommendsCards>)
                }
            </div>

        </section>
    );
};

export default ChefRecomends;