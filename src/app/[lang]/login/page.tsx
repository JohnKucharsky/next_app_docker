"use client";
import { useEffect } from "react";
import { login } from "@/requests/client/login-axios";

const Login = ({ params }: { params: { lang: "ru" | "en" } }) => {
  useEffect(() => {
    (async () => await login("dev", "123456789", params.lang))();
  }, [params.lang]);

  return <></>;
};

export default Login;
