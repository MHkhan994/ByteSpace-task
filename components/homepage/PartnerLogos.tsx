import Image from "next/image";

const partnerLogos = [
  "/assets/partnerLogos/partner-1.svg",
  "/assets/partnerLogos/partner-2.svg",
  "/assets/partnerLogos/partner-3.svg",
  "/assets/partnerLogos/partner-4.svg",
  "/assets/partnerLogos/partner-5.svg",
];

const PartnerLogos = () => {
  return (
    <section className="bg-shuttle-gray-50 py-12">
      <div className="my-container flex flex-wrap items-center justify-center gap-x-14 gap-y-6 text-light-gray md:justify-between">
        {partnerLogos.map((icon, index) => (
          <div key={index} className="flex items-center gap-2">
            <Image
              src={icon}
              alt={`Partner Logo ${index + 1}`}
              width={40}
              height={40}
            />
            <span className="text-xl font-bold">Logoipsum</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnerLogos;
