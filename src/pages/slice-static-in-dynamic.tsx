import { Slice } from "waku";

export default function Page() {
  return (
    <>
      <h4 className="font-bold">Static slice in Dynamic page</h4>
      <Dynamic>
        <Slice id="static" />
      </Dynamic>
    </>
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

export const getConfig = () => {
  return {
    render: "dynamic",
    slices: ["static"],
  };
};
