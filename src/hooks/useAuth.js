import { useState } from "react";
import { signInWithEmail } from "../firebase";
import { useNavigate } from "react-router-dom";

function useAuth() {
  const [user, setUser] = useState(undefined);
  const navigate = useNavigate();

  const signInWithEmailAndPassword = async (email, password) => {
    try {
      const userCredential = await signInWithEmail(email, password);
      setUser(userCredential.user);
      navigate("/");

      console.log("navigate nahi hua");
    } catch (error) {
      console.error(error);
    }
  };

  return { user, signInWithEmailAndPassword };
}

export default useAuth;
