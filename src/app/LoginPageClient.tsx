"use client";

import { signIn, useSession } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store";
import { login } from "@/features/auth/authSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
import appLogo from "@/assets/social-share-logo-text.png";
import gitHubLogo from "@/assets/github-logo.png";
import Image from "next/image";
import { useEffect } from "react";

type FormikLoginProps = {
  email: string;
  password: string;
};

export default function LoginPageClient() {
  const { data: session } = useSession();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const formik = useFormik<FormikLoginProps>({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      const res = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });

      if (res?.ok) {
        dispatch(
          login({
            email: values.email,
            name: "Usuario Demo",
            image: null,
          })
        );
        router.push("/feed");
      } else {
        alert("Credenciales inválidas");
      }
    },
    validationSchema: Yup.object<FormikLoginProps>().shape({
      email: Yup.string()
        .email("El email no es válido.")
        .required("El email es requerido."),
      password: Yup.string()
        .required("La contraseña es requerida.")
        .min(6, "La contraseña debe tener al menos 6 caracteres."),
    }),
  });

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

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col w-80 items-center justify-center gap-2 bg-white p-6 rounded-lg shadow-md"
      >
        <div className="mb-6">
          <Image src={appLogo} alt="app-logo" width={160} height={160} />
        </div>

        <div className="relative flex flex-col w-full items-start justify-start pb-5">
          <input
            type="email"
            placeholder="Email"
            {...formik.getFieldProps("email")}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline focus:outline-brand"
          />
          {formik.errors.email && formik.touched.email && (
            <p className="absolute bottom-0 left-0 text-xs text-red-500">
              {formik.errors.email}
            </p>
          )}
        </div>

        <div className="relative flex flex-col w-full items-start justify-start pb-5">
          <input
            type="password"
            placeholder="Contraseña"
            {...formik.getFieldProps("password")}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline focus:outline-brand"
          />
          {formik.errors.password && formik.touched.password && (
            <p className="absolute bottom-0 left-0 text-xs text-red-500">
              {formik.errors.password}
            </p>
          )}
        </div>

        <div className="flex flex-col w-full gap-2">
          <button
            type="submit"
            disabled={formik.isSubmitting || !formik.isValid}
            className="cursor-pointer flex w-full items-center justify-center py-3 rounded-md text-sm border border-brand text-brand hover:border-brand-hover hover:text-brand-hover hover:shadow-md disabled:border-gray-200 disabled:text-gray-200 disabled:bg-gray-100 transition-all"
          >
            Ingresar
          </button>

          <button
            type="button"
            onClick={() => signIn("github")}
            className="cursor-pointer flex w-full items-center justify-center gap-2 py-3 rounded-md text-sm border border-gray-800 text-gray-800 hover:border-gray-900 hover:text-gray-900 hover:shadow-md transition-all"
          >
            <Image src={gitHubLogo} alt="github-logo" width={16} height={16} />
            Ingresar con GitHub
          </button>
        </div>
      </form>
    </main>
  );
}
