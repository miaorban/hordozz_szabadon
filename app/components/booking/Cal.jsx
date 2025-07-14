'use client';
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Button } from '@nextui-org/react';

export default function Cal({ consultationType }) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace": consultationType});
      cal("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#bda78f"},"dark":{"cal-brand":"#eceada"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [consultationType]);

  // return <button data-cal-namespace={consultationType}
  //   data-cal-link={`hordozz-szabadon/${consultationType}`}
    
  //   data-cal-config='{"layout":"month_view"}'
  // >Click me</button>;
  return <Button size="lg"
                 data-cal-namespace={consultationType}
                 data-cal-link={`hordozz-szabadon/${consultationType}`}
                 data-cal-config='{"layout":"month_view"}'
                 color="secondary" 
                 className='text-[white] w-72 font-bold shadow-lg 
                 hover:shadow-xl text-xl
                py-8 rounded-3xl'>IDŐPONTFOGLALÁS</Button>
};