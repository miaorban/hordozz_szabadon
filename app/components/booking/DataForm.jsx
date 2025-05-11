'use client';
import { Input, Checkbox, Button, Divider, Form, Textarea } from "@heroui/react";
import { useContext, useState } from "react";
import { BookingContext } from "@/app/components/booking/BookingPage";

export default function DataForm() {
  const { 
    name, setName, email, setEmail, isOnline, setIsOnline, book,
    babyAge, setBabyAge, babyWeight, setBabyWeight, isLoading,
    description, setDescription, type
  } = useContext(BookingContext);
  const [isSelected, setIsSelected] = useState(true);
  
  return (
    <Form className="max-w-[700px] py-8" validationBehavior="native" onSubmit={book}>
          <div className='flex flex-wrap 
          justify-center sm:justify-between 
          gap-4 mt-4'>
            <Input
              isRequired
              label="Neved"
              errorMessage="Kérlek, add meg a neved"
              labelPlacement="outside"
              name="name"
              placeholder="Neved"
              size='lg'
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              errorMessage="Kérlek, töltsd ki ezt a mezőt"
              label="Baba kora"
              labelPlacement="outside"
              name="babyAge"
              placeholder="Baba életkora"
              type="text"
              size='lg'
              className='max-w-[45%]'
              value={babyAge}
              onChange={(e) => setBabyAge(e.target.value)}
              />
            <Input
              errorMessage="Kérlek, töltsd ki ezt a mezőt"
              label="Baba súlya"
              labelPlacement="outside"
              name="babyWeight"
              placeholder="Baba súlya"
              type="text"
              size='lg'
              className='max-w-[45%]'
              value={babyWeight}
              onChange={(e) => setBabyWeight(e.target.value)}
            />
            <Textarea
              errorMessage="Kérlek, írd le, hogy miben segíthetek"
              label="Leírás"
              labelPlacement="outside"
              name="description"
              placeholder="Azokat az információkat, amiket itt megadsz arra fogom használni, hogy
              felkészüljek a tanácsadásra. Például itt leírhatod, hogy van-e már hordozód, elakadtál-e valahol, tudni kell-e
              a babádról valami extrát."
              size='lg'
              value={description}
              onChange={(e) => setDescription(e.target.value)}/>
          </div>
          {
            type !== 'hordozovalaszto' &&
            <Checkbox classNames={{ icon: "text-[white]" }} 
                size='lg'
                className='mt-2' isSelected={isOnline} onValueChange={setIsOnline} 
                radius="lg" color="secondary">
                Online érkezem 
              </Checkbox>
          }
            <Divider className='my-4'/>
          {/* <Checkbox className="hidden" isSelected={isSelected} onValueChange={setIsSelected}>Elolvastam és megértettem a feltételeket</Checkbox> */}
          <div className='flex justify-center sm:justify-end w-full'>
            <Button type="submit" color="secondary" size="lg" className='text-[white] shadow-lg hover:shadow-xl text-xl'
              isDisabled={!isSelected} isLoading={isLoading}>
              Foglalás
            </Button>
          </div>
        </Form>
  );
}