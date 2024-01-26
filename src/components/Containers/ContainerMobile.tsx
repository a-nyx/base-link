const ContainerMobile = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container relative mx-auto min-h-lvh max-w-[500px] p-4 text-center">
      {children}
    </div>
  );
};

export default ContainerMobile;
