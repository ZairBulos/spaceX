import React from "react";
import { format } from "date-fns";
import { Button, Image, Link } from "@nextui-org/react";

import Article from "@/assets/article";
import BrandYouTube from "@/assets/brand-youtube";
import BrandWikipedia from "@/assets/brand-wikipedia";

function LauncheItem({ launche }) {
  if (!launche) return null;

  const statusColors = {
    false: "text-red-500",
    true: "text-green-500",
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, "d MMMM yyyy");
  };

  const getStatusColor = (success) => statusColors[success];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12">
      <div className="lg:col-span-6 mx-auto mb-4 lg:mb-0">
        <Image
          src={launche.links.patch.large}
          alt={launche.name}
          className="h-[50vh] w-full"
        />
      </div>
      <div className="lg:col-span-6">
        <h1 className="text-4xl font-bold mb-4">{launche.name}</h1>
        <p className="lg:text-lg mb-2 text-gray-300">
          {formatDate(launche.date_local)},
          <span className={`${getStatusColor(launche.success)} ms-1`}>
            {launche.success ? "Successful" : "Failed"}
          </span>
        </p>
        <p className="lg:text-lg mb-2 text-gray-300">
          {launche.details}
        </p>
        <p className="lg:text-lg mb-2">
          <b className="mr-1">Fairings:</b>
          <span className="text-gray-300">{launche.fairings.reused ? "Reused" : "Not Reused"}</span>
        </p>
        <p className="lg:text-lg mb-4">
          <b className="mr-1">Recovered:</b>
          <span className="text-gray-300">{launche.fairings.recovered ? "Fairings Recovered" : "Fairings Not Recovered"}</span>
        </p>
        <div className="flex gap-4">
          <Button
            as={Link}
            variant="ghost"
            target="_blank"
            rel="noreferrer"
            href={launche.links.webcast}
          >
            <span>YouTube</span>
            <BrandYouTube />
          </Button>
          <Button
            as={Link}
            variant="ghost"
            target="_blank"
            rel="noreferrer"
            href={launche.links.article}
          >
            <span>Article</span>
            <Article />
          </Button>
          <Button
            as={Link}
            variant="ghost"
            target="_blank"
            rel="noreferrer"
            href={launche.links.wikipedia}
          >
            <span>Wikipedia</span>
            <BrandWikipedia />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LauncheItem;