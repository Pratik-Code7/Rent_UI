import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ListItemSkeleton = () => {
  return (
    <div className="h-95 w-105 rounded-2xl overflow-hidden shadow-2xl bg-gray-200">
      <div className="h-[70%] w-full">
        <Skeleton height="100%" />
      </div>
      <div className="h-[30%] p-3 flex flex-col justify-between bg-white">
        <Skeleton height={20} width="70%" />
        <div className="flex items-center gap-2 ">
          <Skeleton width={20} height={20} />
          <Skeleton width={150} />
        </div>
        <div className="flex gap-2 ">
          <Skeleton width={60} height={25} borderRadius={10} />
          <Skeleton width={60} height={25} borderRadius={10} />
          <Skeleton width={80} height={25} borderRadius={10} />
        </div>
      </div>
    </div>
  );
};

export default ListItemSkeleton;
