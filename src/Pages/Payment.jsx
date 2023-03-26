import { Stack } from "@chakra-ui/react";
import { doc } from "firebase/firestore";
import React from "react";
import { useAuthState } from "../Hooks";

const Payment = () => {
  const {user} = useAuthState()
  
  const getCheckout = async() => {
    const ref = doc(db, "checkout", )
    const docSnap = await getDoc(ref);
  }
  return(
    <Stack>

    </Stack>
  );
};

export default Payment;
