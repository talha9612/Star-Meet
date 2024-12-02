import Image from 'next/image';

const Loader = ({ src = "/icons/loading-circle.svg", width = 50, height = 50 }) => {
  return (
    <div
      className="flex-center h-screen w-full"
      aria-label="Loading content, please wait..."
    >
      <Image
        src={src}
        alt="Loading..."
        width={width}
        height={height}
        className="spinner"
      />
    </div>
  );
};

export default Loader;
