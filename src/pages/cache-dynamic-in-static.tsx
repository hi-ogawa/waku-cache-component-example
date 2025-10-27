import React from "react";
import { cacheLife } from "vite-plugin-react-use-cache/runtime";

export default async function Page() {
  return (
    <div>
      <h4 className="font-bold">Dynamic in Static</h4>
      <Static>
        <Dynamic />
      </Static>
    </div>
  );
}

function Static(props: React.PropsWithChildren) {
  "use cache";
  cacheLife("max");
  return (
    <div className="border border-2 border-red-600 m-2 p-2">
      static (rendered at {new Date().toISOString()}){props.children}
    </div>
  );
}

function Dynamic(props: React.PropsWithChildren) {
  return (
    <div className="border border-2 border-green-600 m-2 p-2">
      dynamic (rendered at {new Date().toISOString()}){props.children}
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: "dynamic",
  } as const;
};
