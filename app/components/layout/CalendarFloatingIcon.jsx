
'use client';
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalendarFloatingIcon() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"mini"});
      cal("floatingButton", {"calLink":"hordozz-szabadon","config":{"layout":"month_view"},"buttonColor":"#bda78f","buttonTextColor":"#ffffff","hideButtonIcon":true,"buttonText":"Foglalj időpontot"});
      cal("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#bda78f"},"dark":{"cal-brand":"#bda78f"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  return <></> 
}