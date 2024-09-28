export default function Loading() {
  return (
    <div className="flex w-full flex-wrap justify-center gap-3">
      {Array.from({ length: 10 }).map((_, index) => {
        return (
          <div
            className="flex h-60 w-full animate-pulse flex-col gap-y-3 rounded-lg bg-muted-foreground p-2 sm:w-[280px]"
            key={index}
          ></div>
        );
      })}
    </div>
  );
}
