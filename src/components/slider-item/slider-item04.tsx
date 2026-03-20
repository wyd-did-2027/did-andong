import Image from "next/image";

const R2_URL = process.env.NEXT_PUBLIC_R2_PUBLIC_URL;

export default function SliderItem04() {
  return (
    <div className="relative w-full h-full">
      <Image
        src={`${R2_URL}/andong/mk_3.jpg`}
        alt="안동3"
        fill
        className="object-cover min-[1080px]:hidden block"
        priority
      />
      <Image
        src={`${R2_URL}/andong/pk_3.jpg`}
        alt="안동3"
        fill
        className="object-fill hidden min-[1080px]:block"
        priority
      />
    </div>
  );
}
