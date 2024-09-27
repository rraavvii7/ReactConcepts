import { useNavigate } from "react-router-dom";

function Message() {
  const navigate = useNavigate();
  return (
    <>
      <h1>ERROR !!!! Page Not Found</h1>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={() => navigate("/")}
      >
        Go to Home
      </button>
    </>
  );
}

export default Message;
