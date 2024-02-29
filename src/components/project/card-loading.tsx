import { cn } from "@/lib/shadcn-ui/utils";
import React from "react";
import { Skeleton } from "../custom-components";

export default function CardLoading() {
  return (
    <div className={cn(`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`)}>
      {Array.from(Array(6).keys()).map((key) => {
        return (
          <div
            className={cn(
              `m-auto hidden min-h-[2rem] w-full max-w-xs px-3 py-4`,
              // show limited card depending on screen size
              {
                block: key < 2,
                "sm:block": key < 4,
                "lg:block": key < 6,
              }
            )}
            key={key}
          >
            <Skeleton
              className={cn(`aspect-video h-full w-full rounded-md`)}
              key={`image`}
            />
            <Skeleton
              className={cn(`mt-4 h-6 w-full rounded`)}
              key={`heading`}
            />
            <div className={cn(`mt-4 flex gap-3`)}>
              <Skeleton className={cn(`h-5 max-w-[3rem] rounded`)} />
              <Skeleton className={cn(`h-5 max-w-[3rem] rounded`)} />
              <Skeleton className={cn(`h-5 max-w-[3rem] rounded`)} />
              <Skeleton className={cn(`h-5 max-w-[3rem] rounded`)} />
            </div>
          </div>
        );
      })}
      {/* <div
				className={cn(`w-full max-w-xs min-h-[2rem] m-auto px-3 py-4`)}
			>
				<Skeleton
					className={cn(`aspect-video w-full rounded-md h-full`)}
					key={`image`}
				/>
				<Skeleton
					className={cn(`w-full rounded h-6 mt-4`)}
					key={`heading`}
				/>
				<div className={cn(`flex gap-3 flex-wrap`)}>
					<Skeleton className={cn(`w-14 rounded h-5 mt-4`)} />
					<Skeleton className={cn(`w-14 rounded h-5 mt-4`)} />
					<Skeleton className={cn(`w-14 rounded h-5 mt-4`)} />
					<Skeleton className={cn(`w-14 rounded h-5 mt-4`)} />
				</div>
			</div> */}
    </div>
  );
}
