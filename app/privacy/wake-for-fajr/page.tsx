import type { Metadata } from "next"
import Policy from "./policy"

export const metadata: Metadata = {
  title: "Privacy policy — Wake for Fajr",
  description:
    "How Wake for Fajr handles your data: it collects nothing. Location, camera and alarms are processed on your device, with no account, no analytics and no server behind the app.",
  alternates: { canonical: "/privacy/wake-for-fajr" },
}

export default function WakeForFajrPrivacy() {
  return <Policy />
}
