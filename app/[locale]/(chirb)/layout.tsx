import NavBar from "@/components/chirb/navbar/NavBar";
import React, { ReactNode } from "react";

const ChirbLayout = ({children}:{children: ReactNode}) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default ChirbLayout;
