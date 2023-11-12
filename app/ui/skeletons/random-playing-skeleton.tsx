export default function RandomPlayingSkeleton() {
  return (
    <div className="w-full max-w-6xl ">
      <h2 className="text-2xl text-gray-300 px-2 py-4">Now playing</h2>
      <div className="flex flex-wrap items-end h-96 bg-gray-500/50 animate-pulse"></div>
    </div>
  );
}
