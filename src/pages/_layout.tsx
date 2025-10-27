import "../styles.css";
import { Link } from "waku";
import React from "react";

export default async function RootLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <div className="p-2">
      <title>dynamic/static composition</title>
      <link rel="icon" href="/favicon.png" />
      <ul className="flex text-sm gap-2 mb-2">
        <li>
          <Link
            to="/"
            className="underline underline-offset-4 decoration-solid"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/cache-dynamic-in-static"
            className="underline underline-offset-4 decoration-solid"
          >
            Dynamic in Static (Cache)
          </Link>
        </li>
        <li>
          <Link
            to="/cache-static-in-dynamic"
            className="underline underline-offset-4 decoration-solid"
          >
            Static in Dynamic (Cache)
          </Link>
        </li>
        <li>
          <Link
            to="/slice-dynamic-in-static"
            className="underline underline-offset-4 decoration-solid"
          >
            Dynamic in Static (Slice)
          </Link>
        </li>
        <li>
          <Link
            to="/slice-static-in-dynamic"
            className="underline underline-offset-4 decoration-solid"
          >
            Static in Dynamic (Slice)
          </Link>
        </li>
      </ul>
      <main>{children}</main>
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: "static",
  } as const;
};
