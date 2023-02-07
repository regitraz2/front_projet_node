import {IUser} from "@/interfaces/IUser";

const UserCard = (element:any) => {
    const {user} = element;
    return (
        <div className="flex items-center justify-center p-6 bg-white rounded-lg m-4">
            <img className="w-32 h-32 mr-6 bg-cover bg-center rounded-full"
                 src={`${user.photo}`}/>
            <div className="flex-1">
                <h2 className="text-lg font-medium">{user.firstname}</h2>
                <p className="text-gray-700">Email: {user.email}</p>
                <p className="text-gray-700">Adresse: {user.city}</p>
            </div>
            <div className="flex items-center">
                <span className="px-3 py-2 bg-indigo-500 text-white text-xs font-medium rounded-full">{user.category}</span>
            </div>
        </div>
    )
};

export default UserCard;