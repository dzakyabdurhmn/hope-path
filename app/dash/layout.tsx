import { cn } from "@/lib/utils";
import Slidebar from "@/components/slidebar";

export const metadata = {
  title: "My Mantine app",
  description: "I have followed setup instructions carefully",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Slidebar>
      <div className="flex justify-center items-center mx-auto relative flex-col ">
        {children}
      </div>
    </Slidebar>
  );
}
