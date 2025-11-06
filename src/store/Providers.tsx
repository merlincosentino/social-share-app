"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor, useAppDispatch } from "./index";
import { ReactNode, useEffect } from "react";
import { SessionProvider, useSession } from "next-auth/react";
import { login } from "@/features/auth/authSlice";

function SyncAuthWithSession() {
  const { data: session } = useSession();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (session?.user) {
      dispatch(
        login({
          name: session.user.name,
          email: session.user.email,
          image: session.user.image,
        })
      );
    }
  }, [session, dispatch]);

  return null;
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <>
            <SyncAuthWithSession />
            {children}
          </>
        </PersistGate>
      </Provider>
    </SessionProvider>
  );
}
