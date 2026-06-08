import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ListItemSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      <div className="aspect-[4/3] w-full leading-none">
        <Skeleton height="100%" />
      </div>
      <div className="flex flex-col gap-3 p-4">
        <div className="flex items-center justify-between">
          <Skeleton height={18} width={140} />
          <Skeleton height={18} width={70} />
        </div>
        <Skeleton height={14} width="60%" />
        <div className="flex gap-3 border-t border-border pt-3">
          <Skeleton width={56} height={16} />
          <Skeleton width={56} height={16} />
          <Skeleton width={64} height={16} />
        </div>
      </div>
    </div>
  );
};

export default ListItemSkeleton;
