import { redirect } from "react-router";
import { account } from "~/appwrite/client";
import { getExistingUser, storeUserData } from "~/appwrite/auth";

export async function clientLoader() {
  try {
    const user = await account.get();

    if (!user.$id) {
      return redirect("/sign-in");
    }

    // Check if user already exists in database
    const existingUser = await getExistingUser(user.$id);

    if (existingUser) {
      // User exists, redirect based on status
      if (existingUser.status === "admin") {
        return redirect("/dashboard");
      } else {
        return redirect("/");
      }
    } else {
      // New user, store their data
      await storeUserData();
      
      // After storing, redirect to home (or you can set default status)
      return redirect("/");
    }
  } catch (e) {
    console.log("Error in auth callback", e);
    return redirect("/sign-in");
  }
}

const AuthCallback = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-lg text-gray-600">Setting up your account...</p>
      </div>
    </div>
  );
};

export default AuthCallback; 