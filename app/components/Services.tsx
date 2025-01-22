import { Card, CardBody, CardFooter, Link } from "@nextui-org/react";
import PageTitle from "@/app/components/common/PageTitle";
import Image from 'next/image';

const services = [
  {
    title: 'Hordozási tanácsadás',
    description: 'Ha nem tudod, hol kezdd, elvesztél az eszközök sokaságában, jelentkezz hordozási tanácsadásra.',
    image: '/tanacsadas_kartya.jpg',
    href: "/tanacsadas" 
  },
  // {
  //   title: 'Hordozóeszköz kölcsönzés',
  //   description: 'Otthonod kényelmében próbálhatod ki, hogy melyik a legkényelmesebb választás számodra és babád számára.',
  //   image: '/mia2.jpeg',
  //   href: "/kolcsonzes" 
  // },
  {
    title: 'Fit Check',
    description: 'Bizonytalan vagy abban, hogy helyesen állítottad-e be a hordozót? Mutasd meg és segítek a tökéletes beállításban.',
    smallDescription: 'Csak online! Kattints ide a fotók feltöltéséhez!',
    image: '/fit_check_kartya.jpg',
    href: "/fitcheck" 
  }
]

export default function Services() {
  return (
    <div className="flex justify-center mt-12 px-8">
    <div className="max-w-[900px]">
        <PageTitle title="Szolgáltatásaim"/>
        <div className="flex flex-col lg:flex-row
          justify-around
          gap-y-12
          gap-x-28
          py-8 sm:py-20
          px-12">

          { services.map((service, i) => (
            <Link href={service.href} key={i}>
              <Card isPressable shadow="sm" key={i} className="drop-shadow-xl w-72 sm:w-[380px]">
                  <CardBody className="overflow-visible p-0 drop-shadow-xl h-[20rem]"
                  style={{boxShadow: 
                    "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"}}>
                    <Image
                      className="drop-shadow-xl object-cover rounded-lg"
                      alt="Image"
                      src={service.image}
                      fill
                    />
                  </CardBody>
                  <CardFooter className="sm:h-30 pt-4">
                    <b className="w-full
                    text-lg md:text-4xl font-semibold text-secondary">{service.title}</b>
                  </CardFooter>
                  <CardFooter className="hidden sm:block sm:h-42">
                    <p className="text-primary md:text-xl">{service.description}</p>
                  </CardFooter>
                  <CardFooter className="sm:h-12">
                    <p className="text-primary text-sm">{service.smallDescription}</p>
                  </CardFooter>
              </Card>
            </Link>
          ))} 

        </div>
      </div>
    </div>
  );
}