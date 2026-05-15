import Image from "next/image";

export default function Footer() {
  return (
    <footer aria-label="Perfora footer" className="w-full bg-[#f0edf8]">
      <Image
        src="/main-footer.png"
        alt="Perfora footer with about links, support links, contact details, newsletter signup, social links, and brand wordmark"
        width={1280}
        height={678}
        sizes="100vw"
        className="block h-auto w-full"
      />
    </footer>
  );
}
