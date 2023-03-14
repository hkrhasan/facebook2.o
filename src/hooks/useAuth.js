import { useState } from "react";

function useAuth() {
  const [user, setUser] = useState(true);

  return { user };
}

export default useAuth;
