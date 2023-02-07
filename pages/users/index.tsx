import {useState} from "react";


const UserList = () => {

    let users = [
        {
            id: 1,
            name: "John Doe",
            email: "john.doe@example.com",
            address: "123 Main Street, Anytown USA 12345",
            imageId: "johndoe123",
            role: "Admin"
        },
        {
            id: 2,
            name: "Jane Doe",
            email: "jane.doe@example.com",
            address: "456 Elm Street, Anytown USA 12345",
            imageId: "janedoe456",
            role: "Moderator"
        },
        {
            id: 2,
            name: "Jane Doe",
            email: "jane.doe@example.com",
            address: "456 Elm Street, Anytown USA 12345",
            imageId: "janedoe456",
            role: "Moderator"
        },
        {
            id: 2,
            name: "Jane Doe",
            email: "jane.doe@example.com",
            address: "456 Elm Street, Anytown USA 12345",
            imageId: "janedoe456",
            role: "Marketting"
        },
        // Etc.
    ];
    const [searchName, setSearchName] = useState("");
    const [searchCategory, setSearchCategory] = useState("");
    const setSearchCategoryUsers = (category: string) => {
        users = users.filter(user => user.role === category);
        console.log(users)

    };

    const [name, setName] = useState("");
    return (
        <div className="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <h1 className="text-3xl font-medium">Liste des collaborateurs</h1>
            <div className="flex items-center px-4 py-3 bg-white border-b border-gray-200">
                <input
                    className="flex-1 px-4 py-2 mr-4 rounded-lg border border-gray-400"
                    type="text"
                    placeholder="Rechercher par nom..."
                    onChange={e => setSearchName(e.target.value)}
                />
                <select
                    className="px-4 py-2 mr-4 rounded-lg border border-gray-400"
                    onChange={e => setName(e.target.value)}
                >
                    <option>Tous les noms</option>
                    {users.map(user => (
                        <option key={user.id}>{user.name}</option>
                    ))}
                </select>
                <select
                    className="px-4 py-2 rounded-lg border border-gray-400"
                    onChange={e => setSearchCategoryUsers(e.target.value)}
                >
                    <option>Toutes les catégories</option>
                    <option>Admin</option>
                    <option>Modérateur</option>
                    <option>Utilisateur</option>
                </select>
            </div>
            <div className="flex flex-col items-center">


                <div className="flex flex-wrap justify-center">
                    {users.map((user: { id: any; name: any; email: any; address: any; role: any; imageId: any }) => (
                        <UserCard key={user.id} user={user}/>
                    ))}
                </div>
            </div>
        </div>
    )
};


export default UserList