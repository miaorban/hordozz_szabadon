'use client';
import { Form, Input, Button, Textarea, Divider,
 Checkbox, Alert } from '@nextui-org/react';
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
      
      await fetch('/fitcheck/api/', {
        method: 'POST',
        body: formData,
      });
  
      window.location.href = 'https://buy.stripe.com/test_14k6sq4Zz99v77i3cc';
    } catch (e) {
      console.error(e);
      setShowError(true);
    }
  };

  return (
    <div className='flex flex-col items-center mt-24 sm:mt-40 px-8'>

      <div className='max-w-[700px]'>
        <div className="text-5xl md:text-5xl font-bold text-secondary text-left mb-4
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

      <div className="hidden sm:block w-10/12 bg-black h-[300px] my-12">
        
      </div>

        <Form className="max-w-[700px] py-8" validationBehavior="native" onSubmit={onSubmit}>
          <div className='flex gap-x-8'>
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
          </div>

          <div className='flex gap-x-8 mt-4'>
            <Input
              isRequired
              errorMessage="Kérlek, töltsd ki ezt a mezőt"
              label="Baba kora"
              labelPlacement="outside"
              name="babyAge"
              placeholder="Baba életkora"
              type="text"
              size='lg'
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
            Tölts fel egy fotót szemből, egyet-egyet a két oldalról és hátulról is.
            Figyelj arra, hogy a telefonnal vagy a kezeddel ne takard ki a baba fejét, combjait és lábait!
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