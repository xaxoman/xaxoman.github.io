import type React from "react"

/** Renders a JSON-LD block. Safe inside client components too: Next pre-renders
 *  them, so the script ends up in the static HTML Google reads first. */
export default function JsonLd({ data }: { data: Record<string, unknown> }): React.JSX.Element {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
