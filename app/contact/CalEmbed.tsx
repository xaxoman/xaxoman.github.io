import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalEmbed() {
useEffect( () => {(
    async function () {
      
      const cal = await getCalApi({"namespace":"client-meeting"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
  
    })
  ();
}, [])

return <button 
  data-cal-namespace="client-meeting"
  data-cal-link="denisxhafaj/client-meeting"
  data-cal-config='{"layout":"month_view"}'
  className="text-gray-400 hover:text-white transition-colors">
    Schedule a meeting
  </button>;
};

