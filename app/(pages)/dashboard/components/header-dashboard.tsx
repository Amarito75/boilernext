import { UserButton } from "@clerk/nextjs";
import React from "react";
import { currentUser } from "@clerk/nextjs/server";

const HeaderDashboard = async () => {
  const user = await currentUser();
  return (
    <nav className="flex items-center justify-between p-6 border-b border-border">
      <div className="flex items-center gap-x-4 absolute right-4">
        <h1 className="text-md text-primary flex items-center gap-x-1">
          Hello{" "}
          <h1 className="text-md text-primary font-semibold">
            {user?.fullName}
          </h1>
        </h1>
        <UserButton />
      </div>
    </nav>
  );
};

export default HeaderDashboard;
