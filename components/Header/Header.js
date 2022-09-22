import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-[#150C21] text-white py-6 px-10">
      <div className="flex items-center space-x-12 justify-between">
        <h2 className="text-4xl font-bold font-sans tracking-wider">writty</h2>
        <div className="hidden md:inline-flex space-x-8 items-center uppercase font-semibold text-sm tracking-widest cursor-pointer">
          <h2>Home</h2>
          <h2>Contact</h2>
          <h2 className="bg-[#D7A58B] text-white px-4 py-2 rounded-full hover:bg-white hover:text-[#D7A58B]">
            Sign In
          </h2>
        </div>
      </div>

      <div></div>
    </header>
  );
};

export default Header;
