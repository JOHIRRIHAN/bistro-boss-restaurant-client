/* eslint-disable react/prop-types */

const MenuItemCard = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div className="flex space-x-2">
            <img style={{borderRadius: '0px 200px 200px 200px'}} className="w-[120px]" src={image} alt="" />
            <div>
                <h3 className="uppercase font-semibold">{name}  ----------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-[#D99904] text-lg">${price}</p>
        </div>
    );
};

export default MenuItemCard;