interface CardProps {
  customHandler: (
    name?: string,
    id?: string
  ) => void | { name: string; id: string };
}

const CardSelector: React.FC<CardProps> = ({ customHandler }) => {
  return (
    <div
      onClick={() => {
        customHandler("anme", "123");
      }}
      className="w-80 h-96 bg-gradient-to-b from-black to-[#222222]"
    ></div>
  );
};

export default CardSelector;

//[#121212]
