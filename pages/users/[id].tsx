import BaseLayout from "@/components/BaseLayout";
import UserAddForm from "@/components/UserAddForm";
import UserUpdateForm from "@/components/UserUpdateForm";
import {useRecoilValue} from "recoil";
import {authUser} from "@/recoil/user";
import { getUserById } from "@/api/users";

const UpdateUserPage = () => {
    const user = useRecoilValue(authUser)
    


    return (
        user ? 
        <BaseLayout title={"Modifier mon profil"}>
            <UserUpdateForm action={`/user/:id`} user={user}/>
        </BaseLayout>
        :
        <div>
        <h1>Vous n'êtes pas connecté</h1>
        </div>
    )
}

export default UpdateUserPage;