import BaseLayout from "@/components/BaseLayout";
import UserAddForm from "@/components/UserAddForm";

const AddUserPage = () => {

    return (
        <BaseLayout title={"Ajouter un Utilisateur"}>
            <UserAddForm action={"/users/add"}/>
        </BaseLayout>
    )
}

export default AddUserPage;