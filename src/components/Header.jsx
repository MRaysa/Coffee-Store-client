import React from "react";

const Header = () => {
  return (
    <div
      className="bg-cover bg-center py-6"
      style={{
        backgroundImage: "url('https://i.ibb.co/q3B3YTLQ/15.jpg')",
      }}
    >
      <div className="container mx-auto flex items-center justify-center gap-4">
        <img
          src="https://i.ibb.co/YBRVysZN/logo1.png"
          alt="Espresso Logo"
          className="w-12 h-auto"
        />
        <h1 className="text-white text-3xl font-bold font-serif">
          Espresso Emporium
        </h1>
      </div>
    </div>
  );
};

export default Header;
