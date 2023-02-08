import {IUser} from "@/interfaces/IUser";
import DateDiff from "date-diff";
import {FunctionComponent} from 'react'
import Image from "next/image";

interface IProps {
    user: IUser
}

const UserCard: FunctionComponent<IProps> = ({user}) => {

    return (
        <div className="max-w-md py-4 px-8 m-4 bg-white shadow-lg rounded-lg my-20">
            <div className="flex justify-start md:justify-start text-red-700 text-xl">{user?.category}</div>

            <div className="flex justify-center md:justify-end -mt-16">
                <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
                     src={user?.photo}/>
            </div>

            <div>
                <h2 className="text-gray-800 text-3xl font-semibold">{user?.firstname + " " + user?.lastname +
                    " (" + new DateDiff(new Date(), new Date(user?.birthdate)).years().toFixed() + " ans)"}</h2>
            </div>
            <div
                className="flex justify-start text-sm md:justify-start text-black">{user?.city + ", " + user?.country}</div>

            <div className="flex justify-start md:justify-start mt-4 text-black">
                <Image
                    src={"/email.svg"}
                    height={20}
                    width={20}
                    alt={""}
                    className={"mr-1"}
                />
                {user?.email}
            </div>
            <div className="flex justify-start md:justify-start text-black">
                <Image
                    src={"/phone.svg"}
                    height={20}
                    width={20}
                    alt={""}
                    className={"mr-1"}
                />
                {user?.phone}
            </div>
            <div className="flex justify-start md:justify-start text-black">
                <Image
                    src={"/cake.svg"}
                    height={20}
                    width={20}
                    alt={""}
                    className={"mr-1"}
                />
                {"Anniversaire : " + new Date(user?.birthdate).toDateString()}
            </div>
        </div>
    )
};

export default UserCard;