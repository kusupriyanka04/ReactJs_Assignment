import UserInfo from "./UserInfo";

function UserProfile(){
    const UserName = "priyanka";
    const UserAge = "21";
    return(
        <div>
            <h1>User Profile</h1>
            <UserInfo name={UserName} age={UserAge}/>
        </div>
    );
}

export default UserProfile;