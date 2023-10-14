"use client";
import { useEffect } from "react";
import { login } from "@/requests/client/login-axios";

const Login = ({ params }: { params: { lang: "ru" | "en" } }) => {
  console.log(params.lang);
  useEffect(() => {
    (async () => await login("dev", "123456789", params.lang))();
  }, [params.lang]);

  return <></>;
};

export default Login;
