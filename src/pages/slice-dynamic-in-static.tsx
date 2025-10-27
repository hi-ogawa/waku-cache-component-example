import { Slice } from "waku";

export default function Page() {
  return (
    <>
      <h4 className="font-bold">Dynamic slice in Static page</h4>
      <Static>
        <Slice
          id="dynamic"
          lazy
          fallback={<div>loading dynamic slice...</div>}
        />
      </Static>
    </>
  );
}

function Static(props: React.PropsWithChildren) {
  return (
    <div className="border border-2 border-red-600 m-2 p-2">
      <span>static (rendered at {new Date().toISOString()})</span>
      {props.children}
    </div>
  );
}

export const getConfig = () => {
  return {
    render: "static",
    slices: ["dynamic"],
  };
};
