export default function EmptyState({ setOpen, setPrompt }) {
  return (
    <div className="flex gap-x-4 mb-8">
      <span className="text-xl sm:text-2xl pt-4" title="IA">
        🦙
      </span>
      <div className="flex flex-col text-sm sm:text-base flex-1 gap-y-4 mt-1 rounded-lg bg-gray-100 py-5 px-5">
        <p>
          Olá! Eu sou o Llama 3.1, o mais recente modelo de linguagem da Meta
        </p>
        <p></p>
      </div>
    </div>
  );
}
