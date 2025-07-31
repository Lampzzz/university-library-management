"use client";

import { IKImage } from "imagekitio-next";
import config from "@/lib/config";

interface UniversityCardProps {
  universityCardPath?: string | null;
}

const UniversityCard = ({ universityCardPath }: UniversityCardProps) => {
  if (!universityCardPath) {
    return (
      <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">No university card uploaded</p>
      </div>
    );
  }

  return (
    <IKImage
      path={universityCardPath}
      urlEndpoint={config.env.imagekit.urlEndpoint}
      alt="University card"
      fill
      className="rounded-lg object-cover"
      loading="lazy"
      lqip={{ active: true }}
    />
  );
};

export default UniversityCard;
