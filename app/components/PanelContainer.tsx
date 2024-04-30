export default function PanelContainer({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-white rounded-xl shadow-xl box-border px-5 py-4 mt-5">
      {children}
    </div>
  );
}
