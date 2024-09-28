export default function Loading() {
  return (
    <>
      <div className="mb-4 h-2 w-[150px] animate-pulse rounded-full bg-muted-foreground" />
      <div className="flex max-w-xl flex-col gap-y-6">
        {Array.from({ length: 10 }).map((_, index) => {
          return (
            <div className="flex flex-col gap-y-3" key={index}>
              <div className="flex flex-col gap-y-1">
                <div className="h-2 w-2/3 animate-pulse rounded-full bg-muted-foreground" />
                <div className="h-2 w-3/4 animate-pulse rounded-full bg-muted-foreground" />
              </div>
              <div className="flex flex-col gap-y-1">
                <div className="h-2 w-full animate-pulse rounded-full bg-muted-foreground" />
                <div className="h-2 w-2/3 animate-pulse rounded-full bg-muted-foreground" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
