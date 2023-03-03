import { useState } from "react";

function useAuth() {
  const [user, setUser] = useState(undefined);

  return { user };
}

export default useAuth;
