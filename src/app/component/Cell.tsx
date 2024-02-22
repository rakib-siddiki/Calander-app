import clsx from "clsx";
import React, { FC} from "react";

type Tprops = {
  children?: React.ReactNode;
  className?: string;
  isCurrentDate?: boolean;
  handleClick?: () => void;
};

const Cell: FC<Tprops> = ({
  children,
  className,
  isCurrentDate = false,
  handleClick,
}) => {
  return (
    <div
      onClick={handleClick}
      className={clsx(
        "flex items-center justify-center h-10 border-r border-b p-3 border-gray-400 text-gray-100",
        {"hover:bg-gray-700 duration-300 cursor-pointer":!!handleClick},
        { "bg-blue-500 text-white  ": isCurrentDate },
        className
      )}
    >
      {children}
    </div>
  );
};

export default Cell;
