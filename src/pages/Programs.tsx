import ProgramForm from "../components/ProgramFrom";

const Programs = () => {
  return (
    <div className="w-full pb-10 flex flex-col items-center justify-center">
      <div className="w-full flex items-center justify-center bg-black text-white text-center py-8 px-4 h-[300px]">
        <div>
          <p className="text-sm uppercase tracking-wider text-gray-400 mb-2">
        FORMS
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
        PROGRAMS
          </h1>
        </div>
      </div>
      <ProgramForm />
    </div>
  );
};

export default Programs;
