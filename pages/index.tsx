import BaseLayout from "@/components/BaseLayout";

const Dashboard = () => {
    // const user = axios.get(process.env.NEXT_PUBLIC_API_URL + "/randomUser", {
    //     headers: {
    //         'Authorization': `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
    //     }
    // }).then(res => res.data);
    //
    // console.log(user);

    return (
        <>
            <BaseLayout title={"Dashboard"}>
                {/*<UserCard user={user}/>*/}
            </BaseLayout>
        </>
    )
}

export default Dashboard