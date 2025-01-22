'use client';
import { Form, Input, Button, Textarea, Divider,
 Checkbox, Alert, Card, CardFooter } from '@nextui-org/react';
import { useState } from 'react';
import CustomFileInput from '@/app/components/file-input/CustomFileInput';

export default function FitCheck() {
  const [files, setFiles] = useState<File[]>([])

  const [isSelected, setIsSelected] = useState(true);
  const [showError, setShowError] = useState(false);

  // @ts-expect-error any type
  const onSubmit = async (e) => {
    e.preventDefault();
    setShowError(false);

    try {
      const formData = new FormData(e.currentTarget);
      files.forEach((file, index) => {
        formData.append(`file${index}`, file);
      });
      
      const res = await fetch('/fitcheck/api/', {
        method: 'POST',
        body: formData,
      });
      const { referenceId } = await res.json();

      window.location.href = `${process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK}?client_reference_id=${referenceId}`;
    } catch {
      setShowError(true);
    }
  };

  const steps = [
    {
      title: 'Vedd fel a hordozót és fotózd le benne magatokat',
      description: `Figyelj arra, hogy a telefonnal, kezeddel ne takard ki a babád fejét, lábát és a derékpántot.
                    Készíts egy-egy fotót a két oldalról, hátulról és szemből is.`
    },
    {
      title: 'Töltsd fel a fotókat a lenti űrlapon',
      description: `Add meg adataitokat és töltsd fel az elkészített fotókat. 
        Babád életkora, súlya és a hordozó típusa fontos információ a beállításhoz`
    },
    {
      title: 'Kövesd a válaszvideó instrukcióit',
      description: `Az email címedre küldöm a részletes válaszvideót, amiben megmutatom, hogy hol és hogyan módosíts a kötésen,
        beállításon hogy tökéletesen passzoljon a hordozó rátok és a lehető legjobb pozícióban hordozd babádat.`
    }
  ]

  return (
    <div className="flex flex-col items-center mt-24 sm:mt-40 px-4 
    bg-[url('/maxi_consultation_bg.png')] bg-no-repeat bg-bottom bg-cover
    [background-position-y:75rem] lg:[background-position-y:30rem]">

      <div className="max-w-[700px]">
        <div className="text-5xl font-bold text-secondary text-left mb-4
          max-w-64">
          <h1>Hordozóeszköz</h1>
          <h1>beállításának ellenőrzése</h1>
        </div>
        <p className='text-left text-xl text-primary'>Ha bizonytalan vagy, hogy jól vetted-e magadra a babádat vagy
          kényelmetlennek érzed a beállítást, akkor küldj néhány fotót
          magatokról az eszközben és egy válaszvideóban segítek megtalálni a
          tökéletes beállítást, kötést.</p>
        <p className="text-left font-bold mt-2 text-xl">A szolgáltatás ára 3500 Ft</p>
      </div>

      <div className="w-10/12 my-12 flex flex-wrap justify-center gap-8">
          {
            steps.map((step, index) => 
              <Card isPressable shadow="sm" className="drop-shadow-xl w-72 sm:w-[380px]" key={index}>
                {/* <CardBody className="overflow-visible p-0 drop-shadow-xl h-[20rem]"
                style={{boxShadow: 
                  "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"}}>
                  <Image
                    className="drop-shadow-xl object-cover rounded-lg"
                    alt="Image"
                    src={service.image}
                    fill
                  />
                </CardBody> */}
                <CardFooter className="h-30 pt-4">
                  <b className="w-full
                  text-lg md:text-4xl font-semibold text-secondary">{index + 1}. lépés</b>
                </CardFooter>
                <CardFooter className="h-30">
                  <p className="text-primary md:text-xl text-center">{step.title}</p>
                </CardFooter>
                <CardFooter className="h-30">
                  <p className="text-primary text-sm">{step.description}
                  </p>
                </CardFooter>
            </Card>
            )}
      </div>

        <Form className="max-w-[700px] py-8" validationBehavior="native" onSubmit={onSubmit}>
          {/* <div className='flex gap-x-8'>
            <Input
              isRequired
              label="Név"
              errorMessage="Kérlek, add meg a neved"
              labelPlacement="outside"
              name="name"
              placeholder="Neved"
              size='lg'
              />
            <Input
              isRequired
              errorMessage="Kérlek, valós email címet adj meg"
              label="Email"
              labelPlacement="outside"
              name="email"
              placeholder="Email cím"
              type="email"
              size='lg'
            />
          </div> */}

          <div className='flex flex-wrap 
          justify-center sm:justify-between 
          gap-8 mt-4'>
            <Input
              isRequired
              label="Név"
              errorMessage="Kérlek, add meg a neved"
              labelPlacement="outside"
              name="name"
              placeholder="Neved"
              size='lg'
            />
            <Input
              isRequired
              errorMessage="Kérlek, valós email címet adj meg"
              label="Email"
              labelPlacement="outside"
              name="email"
              placeholder="Email cím"
              type="email"
              size='lg'
            />
            <Input
              isRequired
              errorMessage="Kérlek, töltsd ki ezt a mezőt"
              label="Baba kora"
              labelPlacement="outside"
              name="babyAge"
              placeholder="Baba életkora"
              type="text"
              size='lg'
              className='max-w-[45%]'
              />
            <Input
              isRequired
              errorMessage="Kérlek, töltsd ki ezt a mezőt"
              label="Baba súlya"
              labelPlacement="outside"
              name="babyWeight"
              placeholder="Baba súlya"
              type="text"
              size='lg'
              className='max-w-[45%]'
            />
            <Input
              label="Hordozó típusa"
              labelPlacement="outside"
              name="carrierType"
              placeholder="Ha nem tudod pontosan, akkor írd le, amit tudsz róla"
              type="text"
              size='lg'
            />
          </div>
          
          
          <Textarea
            className='my-4'
            isRequired
            errorMessage="Kérlek, írd le, hogy miben segíthetek"
            label="Leírás"
            labelPlacement="outside"
            name="description"
            placeholder="Írd le, miben van pontosan szükséged segítégre. 
            Valahol kényelmetlennek érzed a hordozót? 
            Bizonytalan vagy abban, hogy megfelelő-e a méret a babádnak? 
            A baba pozícióját szeretnéd leellenőrizni?"
            size='lg'/>
            {/* Tölts fel egy fotót szemből, egyet-egyet a két oldalról és hátulról is.
            Figyelj arra, hogy a telefonnal vagy a kezeddel ne takard ki a baba fejét, combjait és lábait! */}
            <CustomFileInput imageFiles={files} setImageFiles={setFiles}/>
          <Divider className='my-4'/>
          <Checkbox className="hidden" isSelected={isSelected} onValueChange={setIsSelected}>Elolvastam és megértettem a feltételeket</Checkbox>
          <div className='flex justify-center sm:justify-end w-full'>
            <Button type="submit" color="secondary" size="lg" className='text-[white] shadow-lg hover:shadow-xl text-xl'
              isDisabled={!isSelected}>
              Tovább a fizetéshez
            </Button>
          </div>
        </Form>
        {
          showError && <Alert color="danger" title="Váratlan hiba történt! Sajnálom a kellemetlenséget.
          Kérlek, keress meg elérhetőségeim bármelyikén 🤗" className="mt-4"/>
        }
    </div>
  );
}