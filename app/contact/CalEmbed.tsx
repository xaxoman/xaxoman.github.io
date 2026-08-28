import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { t } from "@/contexts/language-context";

export default function CalEmbed() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "client-meeting" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <button
      data-cal-namespace="client-meeting"
      data-cal-link="denisxhafaj/client-meeting"
      data-cal-config='{"layout":"month_view"}'
      style={{ background: "none", border: "none", padding: 0, cursor: "pointer", color: "var(--fg)", font: "inherit" }}
    >
      {t("contact.schedule")}
    </button>
  );
}

