"use client";
import React from "react";
import { useRouter, useParams, useSearchParams } from "next/navigation";

function PropertyPage() {
  const router = useRouter();
  const serchParams = useSearchParams();
  const { id } = useParams();
  const name = serchParams.get("name");
  return (
    <div>
      <button onClick={() => router.push("/")} className="bg-blue-500 p2">
        Go Home {name}
      </button>
    </div>
  );
}

export default PropertyPage;
