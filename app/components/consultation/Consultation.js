import { Divider, Button, Link } from "@heroui/react";

export default function Consultation({ consultation }) {
  return (
    <div className={consultation.className} id={consultation.id}>
      <div className='flex justify-center
        py-12 px-12
        pb-24 md:pb-12'>
        <div className='max-w-[800px]'>
          <div className="flex justify-between text-secondary font-bold">
            <div className="text-2xl">
              <p>{consultation.title}</p>
              <p>tanácsadás</p>
              <small className='italic font-light block sm:hidden'>{consultation.subTitle}</small>
            </div>
            <div className='flex items-end'>
              <span className="text-4xl mr-0.5">{consultation.duration}</span>
              <span className='text-sm'>perc</span>
              </div>
          </div>
          <Divider className='h-1 bg-secondary'/>
          <div className='flex flex-wrap sm:justify-between mt-1'>
            <p className='italic font-light hidden sm:block'>{consultation.subTitle}</p>
            <p className='font-bold text-end text-xl text-primary'>A konzultáció díja {consultation.price}</p>
          </div>
          <p className="mb-4 mt-8 italic text-xl">Neked ajánlom, ha...</p>
          <ul className='list-disc italic text-xl text-primary'>
            {
              consultation.items.map((item, index) => 
                <li key={index} className='mb-2'>{item}</li>
              )
            }
          </ul>
          <div className='flex justify-center mt-12'>
            <Button href={consultation.bookingUrl} as={Link} size="lg" target="_blank" rel="noopener noreferrer"
            color="secondary" className='text-[white] w-72 font-bold shadow-lg hover:shadow-xl text-xl
            py-8 rounded-3xl'>IDŐPONTFOGLALÁS</Button>
          </div>
        </div>
      </div>
    </div>
  );
}