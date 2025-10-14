import Image from "next/image";

export default function FullScreenImage() {
  return (
    <div className="relative w-full h-[35vh] sm:h-[50vh] md:h-[60vh] lg:h-[75vh] xl:h-[85vh] overflow-hidden">
      <Image
        src="/blog.png" // ✅ image in /public folder
        alt="Juice Banner"
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
      />

    </div>
  );
}
