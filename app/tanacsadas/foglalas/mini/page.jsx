import MiniIntroduction from "@/app/components/consultation/MiniIntroduction";
import BookingPage from "@/app/components/booking/BookingPage";
import { getSlots } from "@/app/utils/cal";

export default async function Page() {
  const data = await getSlots("hordozovalaszto");
  console.log('data ', data);
  
  return (
    <>
      <MiniIntroduction />
      <div
        className="bg-[url('/intro_bg.svg')] 
        h-48 md:h-64 
        bg-cover bg-bottom
        mt-[-80px] md:mt-[-80px] 
        mb-[-80px] md:mb-[-150px]"
      ></div>
      <div
        className="flex flex-col items-center px-4 
          bg-[url('/maxi_consultation_bg.png')] bg-no-repeat bg-bottom bg-cover
          [background-position-y:15rem] lg:[background-position-y:20rem]"
      >
        <BookingPage type="mini" timeOptions={data}/>
      </div>
    </>
  );
}