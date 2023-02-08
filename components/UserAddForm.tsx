import {FunctionComponent} from "react";
import {IUser} from "@/interfaces/IUser";
import {addOneUser} from "@/api/users";

interface IProps {
    user?: IUser;
}

const UserAddForm: FunctionComponent<IProps> = ({user}) => {
    const addUser = async (e: any) => {
        console.log('e : ', e)
        e.preventDefault()

        const data = {
            email: e.target.email.value,
            password: e.target.password.value,
            firstname: e.target.firstname.value,
            lastname: e.target.lastname.value,
            country: e.target.country.value,
            city: e.target.city.value,
            category: e.target.category.value,
            gender: e.target.gender.value,
            birthdate: e.target.birthdate.value,
            phone: e.target.phone.value,
            photo: e.target.photo.value,
            isAdmin: e.target.isAdmin.value,
        }

        addOneUser(data)
    }

    return (
        <div className="flex items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="block p-6 rounded-lg shadow-lg bg-white">
                <form onSubmit={addUser} className={"w-96"}>
                    <div className="form-group mb-3">
                        <label htmlFor="lastname" className="form-label inline-block text-gray-700">Nom</label>
                        <input type="text"
                               className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                               id="lastname" placeholder="Nom"/>
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="firstname" className="form-label inline-block text-gray-700">Prenom</label>
                        <input type="text"
                               className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                               id="firstname" placeholder="Prenom"/>
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="gender" id={"gender"}
                               className="form-label inline-block text-gray-700 mr-2">Genre</label>
                        <select id={"gender"}
                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                            <option defaultChecked>Mr</option>
                            <option>Mme</option>
                        </select>
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="email" className="form-label inline-block text-gray-700">Email</label>
                        <input type="email"
                               className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                               id="email" placeholder="Email"/>
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="password" className="form-label inline-block text-gray-700">Mot de Passe</label>
                        <input type="password"
                               className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                               id="password" placeholder="Mot de Passe"/>
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="phone" className="form-label inline-block text-gray-700">Téléphone</label>
                        <input type="phone"
                               className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                               id="phone" placeholder="Téléphone"/>
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="birthdate" className="form-label inline-block text-gray-700">Date
                            d'anniversaire</label>
                        <input type="date"
                               className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                               id="birthdate" placeholder="Date d'anniversaire"/>
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="city" className="form-label inline-block text-gray-700">Ville</label>
                        <input type="text"
                               className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                               id="city" placeholder="Ville"/>
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="country" className="form-label inline-block text-gray-700">Pays</label>
                        <input type="text"
                               className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                               id="country" placeholder="Pays"/>
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="photo" className="form-label inline-block text-gray-700">Lien photo de
                            profile</label>
                        <input type="text"
                               className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                               id="photo" placeholder="Lien photo de profile"/>
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="category" className="form-label inline-block text-gray-700">Category</label>
                        <input type="text"
                               className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                               id="category" placeholder="Category"/>
                    </div>

                    <div className={"flex flex-row justify-center"}>
                        <div className="flex-1 form-group form-check mb-3 mx-auto">
                            <label className="form-check-label inline-block text-gray-800" htmlFor="isAdmin">
                                Admin
                                <input type="checkbox"
                                       className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-500 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                       value={1}
                                       id="isAdmin"/>
                            </label>
                        </div>

                        <button type="submit"
                                className="flex-1 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UserAddForm;
