import {useEffect, useState} from "react";
import {IUser} from "@/interfaces/IUser";
import * as process from "process";
import axios from "axios";
import UserCard from "@/components/UserCard";
import BaseLayout from "@/components/BaseLayout";

const UserList = () => {

    const [users, setUsers] = useState([]);
    const [newUsers, setNewUsers] = useState([]);
    const [searchBy, setSearchBy] = useState("firstname");
    const [searchCategory, setSearchCategory] = useState("");
    let newFilterUsers = [];

    const setSearchUser = (searchBy) => {
        console.log(searchBy)
        setSearchBy(searchBy)

    };

    const setSearchCategoryUsers = async (category: string) => {
        if (category != "Toutes les catégories") {

            if (category != "Toutes les catégories") {

                newFilterUsers = newUsers.filter((user: IUser) => {
                    return user.category === category
                })
                setUsers(newFilterUsers)
            }


        } else {
            await getUsers()
        }
    }

    const setSearchNameUsers = async (searchTerm: string) => {
        const Newusers = newUsers.filter((user) => {
            console.log(searchBy)
            return user[`${searchBy}`].toLowerCase().includes(searchTerm.toLowerCase());
        });
        setUsers(Newusers)
    };


    const getUsers = async () => {
        const instance = axios.create({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer test`
            }
        });


        await instance.get(
            process.env.NEXT_PUBLIC_API_URL + '/users',
        )
            .then((res) => {
                setNewUsers(
                    res.data
                )
                setUsers(res.data);
                return res.data
            })
            .catch((err) => {
                console.log(err)
            });
    }

    useEffect(() => {
        getUsers();
    }, []);

    const [name, setName] = useState("");
    return (
        <BaseLayout title={"Users"}>
            <div className="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <h1 className="text-3xl font-medium">Liste des collaborateurs</h1>
                <div className="flex items-center px-4 py-3 bg-white border-b border-gray-200">
                    <input
                        className="flex-1 px-4 py-2 mr-4 rounded-lg border border-gray-400"
                        type="text"
                        placeholder="Rechercher par nom..."
                        onChange={e => setSearchNameUsers(e.target.value)}
                    />
                    <select
                        className="px-4 py-2 mr-4 rounded-lg border border-gray-400"
                        onChange={e => setSearchUser(e.target.value)}
                    >

                        <option>firstname</option>
                        <option>city</option>


                    </select>
                    <select
                        className="px-4 py-2 rounded-lg border border-gray-400"
                        onChange={e => setSearchCategoryUsers(e.target.value)}
                    >
                        <option>Toutes les catégories</option>
                        <option>Marketing</option>
                        <option>Technique</option>
                        <option>Client</option>
                    </select>
                </div>
                <div className="flex flex-col items-center">


                    <div className="flex flex-wrap justify-center">
                        {users.map((user) => (
                            <UserCard key={user.id} user={user}/>
                        ))}
                    </div>
                </div>
            </div>
        </BaseLayout>
    )
};


export default UserList