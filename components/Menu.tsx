import {useRecoilValue} from "recoil";
import {authUser} from "@/recoil/user";
import * as process from "process";

const Menu = () => {
    const user = useRecoilValue(authUser)

    console.log('users : ', user)

    return (
        <>
            <nav className="bg-white shadow-lg">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between">
                        <div className="flex space-x-7">
                            <div>
                                <a href="/"
                                   className="flex items-center py-4 px-2">
                                    <span
                                        className={'font-semibold text-gray-500 text-lg'}>{process.env.NEXT_PUBLIC_APP_NAME}</span>
                                </a>
                            </div>
                            <div className="hidden md:flex flex-end items-center space-x-1">
                                <a href="/users"
                                   className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Liste
                                </a>
                                {user && user.isAdmin && <a href="/users/add"
                                                            className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Ajouter</a>}
                            </div>
                        </div>
                        <div className="hidden md:flex items-center space-x-3 ">
                            <a href={"/users/" + user?.id}
                               className="py-2 px-2 font-medium text-gray-500">
                                <img src={user && user.photo} width={"35px"} height={"35px"} className={'rounded-2xl'}/>
                            </a>

                            <a href="/auth/logout"
                               className="py-2 px-2 font-medium text-white bg-primary-600 rounded hover:bg-primary-400 transition duration-300">Déconnexion
                            </a>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button className="outline-none mobile-menu-button">
                                <svg className=" w-6 h-6 text-gray-500 hover:text-blue-500 "
                                     fill="none"
                                     strokeLinecap="round"
                                     strokeLinejoin="round"
                                     strokeWidth="2"
                                     viewBox="0 0 24 24"
                                     stroke="currentColor"
                                >
                                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="hidden mobile-menu">
                    <ul className="">
                        <li className="active">
                            <a href="/"
                               className="block text-sm px-2 py-4 text-white bg-primary-600 font-semibold">Home
                            </a>
                        </li>
                        <li>
                            <a href="/users"
                               className="block text-sm px-2 py-4 hover:bg-primary-600 transition duration-300">List
                            </a>
                        </li>
                        <li>
                            <a href="#about"
                               className="block text-sm px-2 py-4 hover:bg-primary-600 transition duration-300">About
                            </a>
                        </li>
                        <li>
                            <a href="#contact"
                               className="block text-sm px-2 py-4 hover:bg-primary-600 transition duration-300">Contact
                                Us
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Menu