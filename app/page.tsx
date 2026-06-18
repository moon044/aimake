import { KioskApp } from "@/components/kiosk/kiosk-app"
import { KioskMockup } from "@/components/kiosk/kiosk-mockup"

export default function Page() {
  return (
    <KioskMockup>
      <KioskApp />
    </KioskMockup>
  )
}