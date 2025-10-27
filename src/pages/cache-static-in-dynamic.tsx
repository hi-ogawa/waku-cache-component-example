import React from "react";
import { cacheLife } from "vite-plugin-react-use-cache/runtime";

export default async function Page() {
  return (
    <div>
      <h4 className="font-bold">Static in Dynamic</h4>
      <Dynamic>
        <Static />
      </Dynamic>
    </div>
  );
}

function Static(props: React.PropsWithChildren) {
  "use cache";
  cacheLife("max");
  return (
    <div className="border border-2 border-red-600 m-2 p-2">
      <span>static (rendered at {new Date().toISOString()})</span>
      {props.children}
    </div>
  );
}

function Dynamic(props: React.PropsWithChildren) {
  return (
    <div className="border border-2 border-green-600 m-2 p-2">
      <span>dynamic (rendered at {new Date().toISOString()})</span>
      {props.children}
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: "dynamic",
  } as const;
};
