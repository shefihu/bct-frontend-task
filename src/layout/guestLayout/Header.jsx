import hero from "../../assets/hero.png";
const Header = () => {
  return (
    <div className="w-full md:hidden flex px-[24px]">
      <img src={hero} alt="" className="h-[371px]" />
    </div>
  );
};

export default Header;
