import Image from "next/image";
import { Button } from "../ui/button";
import Reveal from "../common/Reveal";

const CreatorCta = () => {
  return (
    <section className="relative overflow-hidden bg-persian-blue grid-background py-28 text-white md:py-36">
      <div className="hidden md:block">
        <Image
          src="/assets/hero/shape-left.png"
          alt=""
          width={266}
          height={387}
          className="absolute -top-16 left-0 w-50"
        />
        <Image
          src="/assets/hero/shape-left-2.png"
          alt=""
          width={177}
          height={176}
          className="absolute left-52 top-10 size-32"
        />
        <Image
          src="/assets/hero/shape-right-2.png"
          alt=""
          width={190}
          height={189}
          className="absolute -left-8 top-72 size-36 -rotate-60"
        />
        <Image
          src="/assets/creator-cta/shape-left-bottom.png"
          alt=""
          width={344}
          height={343}
          className="absolute bottom-0 left-0 width-52"
        />
        <Image
          src="/assets/hero/shape-right-2.png"
          alt=""
          width={190}
          height={189}
          className="absolute right-72 top-8 size-36"
        />
        <Image
          src="/assets/creator-cta/shape-right-bottom.png"
          alt=""
          width={330}
          height={330}
          className="absolute right-0 bottom-0 width-48"
        />
        <Image
          src="/assets/creator-cta/shape-right-middle.png"
          alt=""
          width={213}
          height={372}
          className="absolute right-0 top-16 w-48"
        />
      </div>

      <Reveal className="my-container relative text-center space-y-10">
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold md:text-[2.5rem]">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="mx-auto text-lg max-w-4xl text-shuttle-gray-50 font-normal">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <Button
          size="lg"
          className="h-11.5 rounded-full px-6 cursor-pointer hover:bg-white hover:text-dark transition-colors duration-300"
        >
          Join as Creator
        </Button>
      </Reveal>
    </section>
  );
};

export default CreatorCta;
