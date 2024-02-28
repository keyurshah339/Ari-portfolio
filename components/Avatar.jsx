import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none pointer-events-none select-none">
      <Image
        src="/avatar4.png"
        alt="avatar"
        width={337}
        height={278}
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;
