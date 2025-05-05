"use server"

import { error } from "console";
import prisma from "./prisma";
import { ClassSchema, TeacherSchema } from "./formValidationSchemas";
import { randomUUID } from "crypto";

type CurrentState = { success: boolean; error: boolean };

export const createSubject = async (data: any) => {
  try {
    await prisma.subject.create({
      data: {
        name: data.name,
        teachers: {
          connect: data.teachers.map((teacherId: any) => ({ id: teacherId })),
        },
      },
    });
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const deleteSubject = async (id: string) => {
  try {
    await prisma.subject.delete({
      where: {
        id: parseInt(id),
      },
    });
    return { success: true, error: false };
  } catch (err) {
    return { success: false, error: true };
  }
};

export const updateSubject = async (id: string, name: string) => {
  try {
    const updateSubject = await prisma.subject.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name: name,
      },
    });
    return { success: true, error: false };
  } catch (err) {
    return { success: false, error: true };
  }
};

export const findSubjectById = async (id: string) => {
  try {
    await prisma.subject.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    return { success: true, error: false };
  } catch (err) {
    return { success: false, error: true };
  }
};
export const findSubjectByName = async (name: string) => {
  try {
    await prisma.subject.findUnique({
      where: {
        name: name,
      },
    });
    return { success: true, error: false };
  } catch (err) {
    return { success: false, error: true };
  }
};

export const createClass = async (
  currentState: CurrentState,
  data: ClassSchema
) => {
  try {
    await prisma.class.create({
      data,
    });
    return { success: true, error: false };
  } catch (err) {
    return { success: false, error: true };
  }
};

export const updateClass = async (
  currentState: CurrentState,
  data: ClassSchema
) => {
  try {
    await prisma.class.update({
      where: {
        id: data.id,
      },
      data,
    });
    return { success: true, error: false };
  } catch (err) {
    return { success: false, error: true };
  }
};

export const deleteClass = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;
  try {
    await prisma.class.delete({
      where: {
        id: parseInt(id),
      },
    });
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const createTeacher= async (
  currentState: CurrentState,
  data: TeacherSchema
) => {
  try{
    await prisma.teacher.create({
      data:{
        id: crypto.randomUUID(),
        username: data.username,
        name: data.name,
        surname: data.surname,
        email: data.email || null,
        phone: data.phone || null,
        address: data.address,
        img: data.img || null,
        bloodType: data.bloodType,
        sex: data.sex,
        birthday: data.birthday,
        subjects: {
          connect: data.subjects?.map((subjectId:string) => ({
            id:parseInt(subjectId)
          }))
        }
      }
    });
    return { success: true, error: false };
  }catch(err){
    console.log(err);
    return { success: false, error: true };
  }
}

export const updateTeacher= async (
  currentState: CurrentState,
  data: TeacherSchema
) => {
  try{
  await prisma.teacher.update({
    where: {
      id: data.id
    },
    data: {
      username: data.username,
        name: data.name,
        surname: data.surname,
        email: data.email || null,
        phone: data.phone || null,
        address: data.address,
        img: data.img || null,
        bloodType: data.bloodType,
        sex: data.sex,
        birthday: data.birthday,
        subjects:{
          connect: data.subjects?.map((subjectId:string) => ({
            id:parseInt(subjectId)
          }))
        }
    }
  });
  return { success: true, error: false };
}catch(err){
  console.log(err);
  return { success: false, error: true };
}}

export const deleteTeacher= async(
  id: string
) => {
  // const id= data.get("id") as "string";
  try{
  await prisma.teacher.delete({
    where: {
      id: "teacher6"
    },
  })
  console.log("yes")
  return { success: true, error: false };
  }catch(err){
    return { success: false, error: true };
  }
}




