interface CustomButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  border?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ border }) => {
  return (
    <div className={border ? "p-3 border rounded-full" : ""}>
      <div className="h-8 w-8 bg-primary-color shadow-md shadow-cyan-400 rounded-full inline-block relative top-1"></div>
      <button className="font-poppins font-semibold px-3 text-xl">
        JOIN WAR
      </button>
    </div>
  );
};

export default CustomButton;
