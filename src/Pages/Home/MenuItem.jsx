const MenuItem = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div className="lg:flex justify-between  lg:space-x-2">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
            <div>
                <h3 className="uppercase  font-normal text-xl ">{name}----------</h3>  
                <p  className="  font-normal text-base  "   >{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default MenuItem;