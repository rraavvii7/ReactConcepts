import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Profile() {
  const { userName } = useParams();
  const name = useSelector((state: any) => state.profileSlice.name);

  return <div>Welcome {userName !== ":userName" ? userName : name}</div>;
}

export default Profile;
