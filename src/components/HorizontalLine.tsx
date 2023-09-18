interface HorizontalLineProps {
  start?: boolean;
  end?: boolean;
}

const HorizontalLine: React.FC<HorizontalLineProps> = ({ start, end }) => {
  return (
    <div className="flex flex-row space-x-2">
      <div
        className={start ? "w-3 h-3 bg-primary-color rounded-full top-0" : ""}
      ></div>
      <div className="bg-gradient-to-r from-white h-px w-full"></div>
      <div className={end ? "w-3 h-3 bg-primary-color rounded-full" : ""}></div>
    </div>
  );
};

export default HorizontalLine;
