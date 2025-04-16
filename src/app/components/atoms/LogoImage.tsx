import { Image } from "../../lib/ui";

export default function LogoImage() {
  return (
    <div className="lg:pl-4">
      <Image src="/images/logo/LuxeLiving-light-mode-logo.png" alt="Logo" width={120} height={120} priority />
    </div>
  );
}
