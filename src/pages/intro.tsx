// Intro.tsx
import Image from "next/image";

const Intro = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#000000]">
      <div className="text-center text-white relative flex items-center">
        <Image
          src="/Rectangle.png"
          alt="Intro"
          height={400}
          width={400}
          className="w-4/5 rounded-full overflow-hidden mr-4"
        />

        <h1 className="text-6xl text-white text-bold font-lucida-calligraphy">
          MoodScope
        </h1>
      </div>
    </div>
  );
};

export default Intro;
