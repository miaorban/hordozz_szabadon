
import Contacts from "@/app/components/common/Contacts";
import SocialMedia from "@/app/components/common/SocialMedia";

export default function Footer() {
  return (
    <div className="flex justify-around py-8">
      <Contacts/>
      <SocialMedia/>
    </div>
  );
}