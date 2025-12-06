import { redirect } from "react-router";
import { account } from "~/appwrite/client";
import { getExistingUser } from "~/appwrite/auth";

export async function clientLoader() {
  try {
    const user = await account.get();

    if (!user.$id) return redirect("/sign-in");

    const existingUser = await getExistingUser(user.$id);

    if (existingUser?.status === "admin") {
      return redirect("/dashboard");
    }

    // For regular users, you can redirect to a user dashboard or show user content
    return { user: existingUser };
  } catch (e) {
    console.log("Error in clientLoader", e);
    return redirect("/sign-in");
  }
}

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Welcome to Travel Agency
        </h1>
        <p className="text-lg text-gray-600">
          Discover amazing destinations and plan your next adventure with us.
        </p>
      </div>
    </div>
  );
};

export default Home; 