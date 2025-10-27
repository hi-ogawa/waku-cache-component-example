export default function Dynamic() {
  return (
    <div className="border border-2 border-red-600 m-2 p-2">
      static (rendered at {new Date().toISOString()})
    </div>
  );
}

export const getConfig = () => {
  return {
    render: "static",
  };
};
