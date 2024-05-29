import AuthUser from "../../Components/AuthUser";

export default function Home() {
    const {user} = AuthUser();
    return (
        <>
            <h1>Home page</h1>
        </>
    );
};
