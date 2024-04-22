import { getUserByID } from "@/services/userService";

export default async function validateAdmin(token: string | undefined) {
  if (!token) {
    return false;
  }

  try {
    const user = await getUserByID(token);
    if (!user) {
      return false;
    }
    if (user.role === "ADMIN") {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
}
