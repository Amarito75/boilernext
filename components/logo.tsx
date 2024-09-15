import React from "react";
import Image from "next/image";
const Logo = () => {
  return (
    <div className="flex items-center justify-center place-self-center">
      <Image src="/pictures/logo.svg" alt="logo" width={100} height={100} />
    </div>
  );
};

export default Logo;
