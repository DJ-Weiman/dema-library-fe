"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

type userStoreState = {
  token: string;
  username: string;
};

type userStoreActions = {
  setToken: (token: string) => void;
  setUsername: (username: string) => void;
};

type UserStore = userStoreState & userStoreActions;

const userDetailsStore = create<UserStore>()(
  persist(
    (set) => ({
      token: "",
      username: "",
      setToken: (token) => set({ token }),
      setUsername: (username) => set({ username }),
    }),
    { name: "user-storage" }
  )
);

// const useUserTokenStore = create<userStore>()((set) => ({
//   token: localStorage.getItem("JWT_TOKEN"),
//   setToken: (newToken: string|null) => set((state) => ({
//     token: newToken
//   }))
// }))

export default userDetailsStore;
