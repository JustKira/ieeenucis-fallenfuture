interface VerticalLineProps {
  start?: boolean;
  end?: boolean;
}

const VerticalLine: React.FC<VerticalLineProps> = ({ start, end }) => {
  return (
    <div className="flex flex-col">
      <div
        className={start ? "w-3 h-3 bg-primary-color rounded-full" : ""}
      ></div>
      <div className="bg-gradient-to-b from-white h-full w-px"></div>
      <div className={end ? "w-3 h-3 bg-primary-color rounded-full" : ""}></div>
    </div>
  );
};

export default VerticalLine;
