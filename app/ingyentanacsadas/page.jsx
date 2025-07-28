"use client";
import { Input, Button, Divider, Form, Alert } from "@heroui/react";
import Introduction from "@/app/components/drawing/Introduction";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [babyAge, setBabyAge] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const apply = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("/ingyentanacsadas/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, babyAge })
      });
      const data = await response.json();
      console.log('data', data);
      if (data.success) {
        router.push("/ingyentanacsadas/sikeresjelentkezes");
        return;
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError(error.message);
      console.error('error', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Introduction />
      <div
        className="bg-[url('/intro_bg.svg')] 
        h-48 md:h-64 
        bg-cover bg-bottom
        mt-[-80px] md:mt-[-80px] 
        mb-[-80px] md:mb-[-150px]
        "
      ></div>
      <div
        className="bg-[url('/mini_tanacsadas.svg')] bg-no-repeat 
        bg-cover bg-center"
      >
        <div className="max-w-[700px] mx-auto py-8">
          <h1 className="text-3xl font-bold text-center mb-6">
            Jelentkezés ingyen tanácsadásra
          </h1>
          <Form className="w-full pb-2 md:pb-2 px-8" validationBehavior="native" onSubmit={apply}>
            <div
              className="flex flex-wrap 
              justify-center sm:justify-between 
              gap-4 mt-4
              "
            >
              <Input
                isRequired
                label="Neved"
                errorMessage="Kérlek, add meg a neved"
                labelPlacement="outside"
                name="name"
                placeholder="Neved"
                size="lg"
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
                size="lg"
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
                size="lg"
                value={babyAge}
                onChange={(e) => setBabyAge(e.target.value)}
              />
            </div>
            <Divider className="my-4" />
            <div className="flex justify-center sm:justify-end w-full">
              <Button
                type="submit"
                color="secondary"
                size="lg"
                className="text-[white] shadow-lg hover:shadow-xl text-xl"
                // isDisabled={!isSelected}
                isLoading={isLoading}
              >
                Jelentkezem
              </Button>
            </div>
            <small>
              A beküldéssel elfogadod az
              <a
                className="underline"
                href="/GDPR_hordozz_szabadon.pdf"
                target="_blank"
              >
                {" "}
                adatkezelési tájékoztatót
              </a>
              .
            </small>
          </Form>
        </div>
      </div>
      {
          error && <Alert color="danger" title={error} className="mt-4"/>
        }
    </>
  );
}
