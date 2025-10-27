export default function Dynamic() {
  return (
    <div className="border border-2 border-green-600 m-2 p-2">
      dynamic (rendered at {new Date().toISOString()})
    </div>
  );
}

export const getConfig = () => {
  return {
    render: "dynamic",
  };
};
