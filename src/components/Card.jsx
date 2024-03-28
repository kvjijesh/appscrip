import { CiHeart } from "react-icons/ci";
const Card = (product) => {

    return (
        <div className="flex flex-col md:w-[300px] md:h-auto w-[168px] h-auto border-2 rounded-lg p-2 ">
            <div className="w-full h-full p-2" >
                <img className="w-ful h-full object-contain " src={product.data.image} alt="productImage" />
            </div>
            <div className="md:p-3 p-1 flex  justify-between md:none">
                <h3 className="text-[18px] font-bold">{product.data.title.split(' ').slice(0, 2).join(' ')}</h3>
                <CiHeart className="text-[25px] md:hidden" />

            </div>
            <div className="flex p-[9px]">
                <p className="text-[12px] font-normal"><span className="underline cursor-pointer">Sign in</span> in or Create an account to see pricing</p>
                <CiHeart className=" hidden md:block text-[25px]" />
            </div>
        </div>
    )
}

export default Card