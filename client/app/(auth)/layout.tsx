import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="h-full bg-gray-700">{children}</div>;
};

export default AuthLayout;
