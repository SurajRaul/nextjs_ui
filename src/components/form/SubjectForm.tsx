"use client";

import { useForm } from "react-hook-form";
import InputFeild from "../InputFeild";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubjectSchema, subjectSchema } from "@/lib/formValidationSchemas";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { createSubject, updateSubject } from "@/lib/actions";
import { useRouter } from "next/router";

const SubjectForm = ({
  type,
  data,
  setOpen,
  relatedData,
}: {
  type: "create" | "update";
  data?: any;
  setOpen: Dispatch<SetStateAction<boolean>>;
  relatedData: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubjectSchema>({
    resolver: zodResolver(subjectSchema),
  });

  // Local state to track form submission result (success/error)
  const [state, setState] = useState({ success: false, error: false });
  const [loading, setLoading] = useState(false);

  // Router to navigate after form submission
  const router = useRouter();

  // Function to handle form submission
  const onSubmit = async (data: SubjectSchema) => {
    setLoading(true);
    try {
      // Call create or update function based on type
      if (type === "create") {
        await createSubject;
      } else {
        await updateSubject;
      }
      setState({ success: true, error: false });
      setOpen(false); // Close the form modal
      // router.refresh();  // Refresh the page to reflect changes
    } catch (error) {
      setState({ success: false, error: true });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (state.success) {
      // Show success toast if needed
      // toast(`Subject has been ${type === "create" ? "created" : "updated"}!`);
    }
  }, [state, type]);

  const { teachers } = relatedData;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
      <h1 className="text-xl font-semibold">
        {type === "create" ? "Create a subject" : "Update the subject"}
      </h1>
      <div>
        <InputFeild
          label="Subject name"
          name="name"
          defaultValue={data?.name}
          register={register}
          error={errors?.name}
        />
        {data && (
          <InputFeild
            label="Id"
            name="id"
            defaultValue={data?.id}
            register={register}
            error={errors?.id}
          />
        )}
        <div>
          <label>Teachers</label>
          <select {...register("teachers")} defaultValue={data?.teachers}>
            {teachers.map((teacher: any) => (
              <option key={teacher.id} value={teacher.id}>
                {teacher.name + " " + teacher.surname}
              </option>
            ))}
          </select>
        </div>
        {state.error && (
          <span className="text-red-500">Something went wrong!</span>
        )}
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-400 text-white p-2 rounded-md"
        >
          {loading ? "Submitting..." : type === "create" ? "Create" : "Update"}
        </button>
      </div>
    </form>
  );
};

export default SubjectForm;
