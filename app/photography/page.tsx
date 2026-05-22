import Image from "next/image";
import Nav from "@/components/Nav";

export const metadata = { title: "Film Photography – Jacob Fedrigon" };

const norwayPhotos = [
  { src: "/norway/1.jpg", landscape: true },
  { src: "/norway/2.jpg", landscape: false },
  { src: "/norway/3.jpg", landscape: false },
  { src: "/norway/4.jpg", landscape: false },
  { src: "/norway/5.jpg", landscape: false },
];

export default function Photography() {
  return (
    <main className="min-h-screen flex flex-col items-center pt-16 pb-16 px-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold italic mb-6">Film Photography</h1>
        <Nav />

        <h2 className="text-xl font-bold italic mt-10 mb-4">Norway</h2>
        <div className="flex flex-col items-center gap-4">
          {norwayPhotos.map((photo, i) => (
            <Image
              key={photo.src}
              src={photo.src}
              alt={`Norway ${i + 1}`}
              width={photo.landscape ? 800 : 500}
              height={photo.landscape ? 533 : 667}
              className="object-cover"
            />
          ))}
        </div>
        <p className="text-sm text-gray-400 dark:text-gray-500 mt-4 text-center">Norway</p>
      </div>
    </main>
  );
}
