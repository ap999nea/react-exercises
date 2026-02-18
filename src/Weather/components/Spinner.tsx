export const Spinner = () => {
  return (
    <div className="flex w-screen h-full flex-col items-center justify-center gap-6">
      <img alt="loading" src="/spinner.svg" className="animate-spin" />
      <p>Loading...</p>
    </div>
  );
};
