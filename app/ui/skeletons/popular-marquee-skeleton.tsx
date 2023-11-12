export default function PopularMarqueeSkeleton() {
  return (
    <div className="w-full max-w-6xl ">
      <h2 className="text-2xl text-gray-300 px-2 py-4">Popular movies</h2>
      <div className="relative h-48 w-full bg-gray-500/50 animate-pulse">
        <div className="absolute top-0 z-10 pointer-events-none w-full h-full bg-gradient-to-r from-[#040405] via-transparent to-[#040405]"></div>
      </div>
    </div>
  );
}
