"use client"
import React from "react";
import InputFeild from "../InputFeild";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long!" })
    .max(20, { message: "Username must be atleast 20 character long " }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 3 characters long!" })
    .max(20, { message: "Password must be atleast 20 character long " }),
  email: z
    .string()
    .min(8, { message: "Password must be at least 3 characters long!" })
    .max(20, { message: "Password must be atleast 20 character long " }),
});

type Inputs = z.infer<typeof schema>;

const TeacherForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-8">
      <h1 className="text-xl font-semibold">Create a new Teacher</h1>
      <span className="text-sm font-medium">Authentiction Information</span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputFeild
          label="Username"
          name="username"
          defaultValue={data?.username}
          register={register}
          error={errors?.username}
        />
        <InputFeild
          label="Password"
          name="password"
          defaultValue={data?.password}
          register={register}
          error={errors?.password}
        />
        <InputFeild
          label="Email"
          name="email"
          defaultValue={data?.email}
          register={register}
          error={errors?.email}
        />
      </div>
      <button className="bg-blue-400 text-white p-2 rounde-md">
        {type === "create"? "Create":"Update"}</button>
    </form>
  );
};

export default TeacherForm;
