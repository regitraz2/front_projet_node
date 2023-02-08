import BaseLayout from "@/components/BaseLayout";
import UserForm from "@/components/UserForm";

const AddUserPage = () => {

    return (
        <BaseLayout title={"Ajouter un Utilisateur"}>
            <UserForm action={"/users/add"}/>
        </BaseLayout>
    )
}

export default AddUserPage;