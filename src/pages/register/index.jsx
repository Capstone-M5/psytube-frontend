/*import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { UserContext } from "../../providers/user";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../../services/api";*/

function Register() {
  /*const schema = yup.object().shape({
    name: yup
      .string()
      .min(5, "Mínimo de 5 letras")
      .required("Obrigatório registar seu nome."),
    username: yup
      .string()
      .min(6, "Mínimo de 6 letras")
      .required("Obrigatório registar um username."),
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
    confirmPassword: yup
      .string()
      .required("Confirme a senha")
      .oneOf([yup.ref("password"), null], "As senhas precisam ser iguais"),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  const cadastrar = ({ name, username, email, password }) => {
    const user = {
      name,
      username,
      email,
      password,
    };

    API.post("register/", user)
      .then((_) => {
        toast.success("Cadastrado com sucesso!");
        return history.push("/login");
      })
      .catch((_) =>
        toast.error(
          "Erro ao cadastrar, verifique novamente os campos ou mude o email!"
        )
      );
  };*/

  return <h1>Página de Registro</h1>;
}

export default Register;
