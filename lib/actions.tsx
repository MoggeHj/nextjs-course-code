"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

//We need prevState since the useFormState hook is sending the initial state as the first argument
const shareMeal = async (prevState, formData) => {
  const isInvalidText = (text) => {
    return !text || text.trim().length === 0;
  };

  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "Invalid input, please check your data!",
    };
  }
  await saveMeal(meal);
  revalidatePath("/meals"); //revalidate the meals page and updates the cache
  redirect("/meals");
};

export default shareMeal;
