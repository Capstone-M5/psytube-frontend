/*import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { UserContext } from "../../providers/user";
import { useHistory } from "react-router-dom";*/

function Login() {
  /*const schema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Informe uma senha")
      .min(8, "Senha deve conter ao menos 8 caracteres")
      .matches(/.*\d/, "Senha Deve conter ao menos um dígito")
      .matches(/.*[a-z]/, "Senha Deve conter ao menos uma letra minúscula")
      .matches(/.*[A-Z]/, "Senha Deve conter ao menos uma letra maiúscula")
      .matches(
        /.*[$*&@#!]/,
        "Senha Deve conter ao menos um caractere especial"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });*/

  return <h1>Página de Login</h1>;
}
export default Login;
