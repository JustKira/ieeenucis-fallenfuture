import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between  font-poppins font-medium py-3 bg-transparent absolute top-0">
      <div>
        <Image
          src={"assets//navbar-lines.svg"}
          width={450}
          height={100}
          alt=""
          className=" absolute"
        />
      </div>
      <ul className="flex justify-center items-end relative px-5 py-3">
        <li className="px-5 relative">BATTLES</li>
        <li className="px-5 relative">COLLECTION</li>
        <li className="px-5 relative">JOIN</li>
      </ul>
    </div>
  );
};

export default Navbar;
