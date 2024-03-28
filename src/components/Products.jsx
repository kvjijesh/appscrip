import axios from "axios";
import { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import Card from "./Card";
const Products = () => {
    const [products, setProducts] = useState([])
    const [hidefilter, setHidefilter] = useState(true);
    const [dropdownToggles, setDropdownToggles] = useState({
        idealFor: false,
        occasion: false,
        work: false,
        fabric: false,
        segment: false,
        suitableFor: false,
        rawMaterials: false,
        pattern: false
    });
    const handleHide = () => {
        setHidefilter(!hidefilter)
    }
    const handleToggle = (dropdownName) => {
        setDropdownToggles(prevState => ({
            ...prevState,
            [dropdownName]: !prevState[dropdownName]
        }));
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axios.get('https:/fakestoreapi.com/products')
                setProducts(data.data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [])
    return (
        <>
            <div className="w-full">
                <hr className="p-2 max-w-[90%] mx-auto" />
                <div className="max-w-[90%] mx-auto flex justify-between">

                    <div className="hidden md:flex">
                        <h3 className="md:text-[18px] font-bold ">3425 ITEMS</h3>
                        {hidefilter ? (
                            <>
                                <FaAngleRight className="mt-1 md:ml-10 text-[#888792]" />
                                <p onClick={handleHide} className="text-[#888792] cursor-pointer">SHOW FILTER</p>
                            </>
                        ) : (
                            <>
                                <FaAngleLeft className="mt-1 md:ml-10 text-[#888792]" />
                                <p onClick={handleHide} className="text-[#888792] cursor-pointer">HIDE FILTER</p>
                            </>
                        )}

                    </div>
                    <div className="md:hidden">FILTER</div>
                    <div>
                        <div className="w-48 flex">
                            <select
                                id="dropdown"
                                className="appearance-none w-full  border-gray-400 hover:border-gray-500  py-2 rounded  leading-tight focus:outline-none focus:shadow-outline"
                            >
                                <option >RECOMENDED</option>
                                <option >NEWST FIRST</option>
                                <option >POPULAR</option>
                                <option >PRICE:HIGH TO LOW</option>
                                <option >PRICE:LOW TO HIGH</option>
                            </select>
                            <FaAngleDown className="mt-1.5 text-[23px] text-[#888792] " />
                        </div>
                    </div>
                </div>
            </div>
            <hr className="w-[90%] mx-auto py-2" />
            <div className="w-full">
                <div className="max-w-[90%] mx-auto flex">
                    {hidefilter ? (
                        <div className="w-[100%] md:grid md:grid-cols-4 gap-1 px-2 grid grid-cols-2">
                            {products.map((product) => (
                                <div className="flex justify-center mb-4 md:ml-2" key={product.id}>
                                    <Card data={product} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <>
                            <div className="w-[25%]  h-fit flex flex-col">
                                <div className="flex py-3">
                                    <div>
                                        <input className="h-4 w-4 mt-1" type="checkbox" name="" id="" />
                                    </div>
                                    <div className="px-2">
                                        <p className="text-[18px] font-bold">CUSTAMIZABLE</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="flex flex-col py-3">
                                    <div className="">
                                        <div className="flex flex-col">
                                            <div className="flex justify-between">
                                                <div>
                                                    <p className="text-[18px] font-bold">IDEAL FOR</p>
                                                </div>
                                                <div>
                                                    <FaAngleDown onClick={() => handleToggle('idealFor')} />
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-[18px] font-normal">All</p>
                                            </div>
                                            <div>
                                                {dropdownToggles.idealFor && < ul id="idealFor" className=" py-2 space-y-2">
                                                    <li className="flex">
                                                        <input type="checkbox" name="" id="" />
                                                        <a href="#" className="flex items-center w-full p-2">Men</a>
                                                    </li>
                                                    <li className="flex">
                                                        <input type="checkbox" name="" id="" />
                                                        <a href="#" className="flex items-center w-full p-2">Women</a>
                                                    </li>
                                                    <li className="flex">
                                                        <input type="checkbox" name="" id="" />
                                                        <a href="#" className="flex items-center w-full p-2">Baby & Kids</a>
                                                    </li>
                                                </ul>
                                                }
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <hr />
                                <div className="flex flex-col py-3">
                                    <div className="">
                                        <div className="flex flex-col">
                                            <div className="flex justify-between">
                                                <div>
                                                    <p className="text-[18px] font-bold">OCCASSION</p>
                                                </div>
                                                <div>
                                                    <FaAngleDown onClick={() => handleToggle('occasion')} />
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-[18px] font-normal">All</p>
                                            </div>
                                            <div>
                                                {dropdownToggles.occasion && < ul id="occasion" className=" py-2 space-y-2">
                                                    <li className="flex">
                                                        <input type="checkbox" name="" id="" />
                                                        <a href="#" className="flex items-center w-full p-2">Men</a>
                                                    </li>
                                                    <li className="flex">
                                                        <input type="checkbox" name="" id="" />
                                                        <a href="#" className="flex items-center w-full p-2">Women</a>
                                                    </li>
                                                    <li className="flex">
                                                        <input type="checkbox" name="" id="" />
                                                        <a href="#" className="flex items-center w-full p-2">Baby & Kids</a>
                                                    </li>
                                                </ul>
                                                }
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <hr />
                                <div className="flex flex-col py-3">
                                    <div className="">
                                        <div className="flex flex-col">
                                            <div className="flex justify-between">
                                                <div>
                                                    <p className="text-[18px] font-bold">WORK</p>
                                                </div>
                                                <div>
                                                    <FaAngleDown onClick={() => handleToggle('work')} />

                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-[18px] font-normal">All</p>
                                            </div>
                                            <div>
                                                {dropdownToggles.work && < ul id="dropdown-work" className=" py-2 space-y-2">
                                                    <li className="flex">
                                                        <input type="checkbox" name="" id="" />
                                                        <a href="#" className="flex items-center w-full p-2">Men</a>
                                                    </li>
                                                    <li className="flex">
                                                        <input type="checkbox" name="" id="" />
                                                        <a href="#" className="flex items-center w-full p-2">Women</a>
                                                    </li>
                                                    <li className="flex">
                                                        <input type="checkbox" name="" id="" />
                                                        <a href="#" className="flex items-center w-full p-2">Baby & Kids</a>
                                                    </li>
                                                </ul>
                                                }
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <hr />
                                <div className="flex flex-col py-3">
                                    <div className="">
                                        <div className="flex flex-col">
                                            <div className="flex justify-between">
                                                <div>
                                                    <p className="text-[18px] font-bold">FABRIC</p>
                                                </div>
                                                <div>
                                                    <FaAngleDown onClick={() => handleToggle('fabric')} />
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-[18px] font-normal">All</p>
                                            </div>
                                            <div>
                                                {dropdownToggles.fabric && < ul id="dropdown-example" className=" py-2 space-y-2">
                                                    <li className="flex">
                                                        <input type="checkbox" name="" id="" />
                                                        <a href="#" className="flex items-center w-full p-2">Men</a>
                                                    </li>
                                                    <li className="flex">
                                                        <input type="checkbox" name="" id="" />
                                                        <a href="#" className="flex items-center w-full p-2">Women</a>
                                                    </li>
                                                    <li className="flex">
                                                        <input type="checkbox" name="" id="" />
                                                        <a href="#" className="flex items-center w-full p-2">Baby & Kids</a>
                                                    </li>
                                                </ul>
                                                }
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <hr />
                                <div className="flex flex-col py-3">
                                    <div className="">
                                        <div className="flex flex-col">
                                            <div className="flex justify-between">
                                                <div>
                                                    <p className="text-[18px] font-bold">SEGMENT</p>
                                                </div>
                                                <div>
                                                    <FaAngleDown onClick={() => handleToggle('segment')} />
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-[18px] font-normal">All</p>
                                            </div>
                                            <div>
                                                {dropdownToggles.segment && < ul id="dropdown-example" className=" py-2 space-y-2">
                                                    <li className="flex">
                                                        <input type="checkbox" name="" id="" />
                                                        <a href="#" className="flex items-center w-full p-2">Men</a>
                                                    </li>
                                                    <li className="flex">
                                                        <input type="checkbox" name="" id="" />
                                                        <a href="#" className="flex items-center w-full p-2">Women</a>
                                                    </li>
                                                    <li className="flex">
                                                        <input type="checkbox" name="" id="" />
                                                        <a href="#" className="flex items-center w-full p-2">Baby & Kids</a>
                                                    </li>
                                                </ul>
                                                }
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <hr />
                                <div className="flex flex-col py-3">
                                    <div className="">
                                        <div className="flex flex-col">
                                            <div className="flex justify-between">
                                                <div>
                                                    <p className="text-[18px] font-bold">SUITABLE FOR</p>
                                                </div>
                                                <div>
                                                    <FaAngleDown onClick={() => handleToggle('suitableFor')} />
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-[18px] font-normal">All</p>
                                            </div>
                                            <div>
                                                {dropdownToggles.suitableFor && < ul id="dropdown-example" className=" py-2 space-y-2">
                                                    <li className="flex">
                                                        <input type="checkbox" name="" id="" />
                                                        <a href="#" className="flex items-center w-full p-2">Men</a>
                                                    </li>
                                                    <li className="flex">
                                                        <input type="checkbox" name="" id="" />
                                                        <a href="#" className="flex items-center w-full p-2">Women</a>
                                                    </li>
                                                    <li className="flex">
                                                        <input type="checkbox" name="" id="" />
                                                        <a href="#" className="flex items-center w-full p-2">Baby & Kids</a>
                                                    </li>
                                                </ul>
                                                }
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <hr />
                                <div className="flex flex-col py-3">
                                    <div className="">
                                        <div className="flex flex-col">
                                            <div className="flex justify-between">
                                                <div>
                                                    <p className="text-[18px] font-bold">RAW METERIALS</p>
                                                </div>
                                                <div>
                                                    <FaAngleDown onClick={() => handleToggle('rawMaterials')} />
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-[18px] font-normal">All</p>
                                            </div>
                                            <div>
                                                {dropdownToggles.rawMaterials && < ul id="dropdown-example" className=" py-2 space-y-2">
                                                    <li className="flex">
                                                        <input type="checkbox" name="" id="" />
                                                        <a href="#" className="flex items-center w-full p-2">Men</a>
                                                    </li>
                                                    <li className="flex">
                                                        <input type="checkbox" name="" id="" />
                                                        <a href="#" className="flex items-center w-full p-2">Women</a>
                                                    </li>
                                                    <li className="flex">
                                                        <input type="checkbox" name="" id="" />
                                                        <a href="#" className="flex items-center w-full p-2">Baby & Kids</a>
                                                    </li>
                                                </ul>
                                                }
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <hr />
                                <div className="flex flex-col py-3">
                                    <div className="">
                                        <div className="flex flex-col">
                                            <div className="flex justify-between">
                                                <div>
                                                    <p className="text-[18px] font-bold">PATTERN</p>
                                                </div>
                                                <div>
                                                    <FaAngleDown onClick={() => handleToggle('pattern')} />
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-[18px] font-normal">All</p>
                                            </div>
                                            <div>
                                                {dropdownToggles.pattern && < ul id="dropdown-example" className=" py-2 space-y-2">
                                                    <li className="flex">
                                                        <input type="checkbox" name="" id="" />
                                                        <a href="#" className="flex items-center w-full p-2">Men</a>
                                                    </li>
                                                    <li className="flex">
                                                        <input type="checkbox" name="" id="" />
                                                        <a href="#" className="flex items-center w-full p-2">Women</a>
                                                    </li>
                                                    <li className="flex">
                                                        <input type="checkbox" name="" id="" />
                                                        <a href="#" className="flex items-center w-full p-2">Baby & Kids</a>
                                                    </li>
                                                </ul>
                                                }
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="w-[75%] md:grid md:grid-cols-3 gap-1 px-2 grid grid-cols-2">
                                {products.map((product) => (
                                    <div className="flex justify-center mb-4 md:ml-2" key={product.id}>
                                        <Card data={product} />
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div >
        </>
    )
}

export default Products