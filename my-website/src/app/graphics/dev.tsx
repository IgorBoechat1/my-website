'use client';

import React from "react";
import Link from "next/link";

const DevSection = () => {
  return (
    <div>
      <h2>Developer Section</h2>
      <p>Welcome to the Dev section!</p>
      <Link href="/graphics">
        <button>Back to Graphics</button>
      </Link>
    </div>
  );
};

export default DevSection;
