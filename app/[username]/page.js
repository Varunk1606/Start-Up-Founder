import PaymentPage from "@/components/PaymentPage";
import { notFound } from "next/navigation";
import connectDb from "@/db/connectDb";
import User from "@/models/User";

export async function generateMetadata({ params }) {
  const { username } = await params;

  return {
    title: `Support ${username} - support new idea`,
  };
}

export default async function Username({ params }) {
  const { username } = await params;

  await connectDb();

  const user = await User.findOne({ username });

  if (!user) return notFound();

  return (
    <>
      <PaymentPage username={username} />
    </>
  );
}


