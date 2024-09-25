import { countTokens } from "../src/tokenizer";

export default function Metrics({
  startedAt,
  firstMessageAt,
  completedAt,
  completion,
}) {
  const tempoParaPrimeiroToken =
    firstMessageAt && startedAt
      ? (new Date(firstMessageAt) - new Date(startedAt)) / 1000.0
      : null;
  const contagemTokens = completion && countTokens(completion);
  const duracaoExecucao = firstMessageAt
    ? ((completedAt ? new Date(completedAt) : new Date()) -
        new Date(firstMessageAt)) /
      1000.0
    : null;
  const tokensPorSegunda =
    contagemTokens > 0 &&
    duracaoExecucao > 0 &&
    contagemTokens / duracaoExecucao;

  if (
    tempoParaPrimeiroToken === null ||
    contagemTokens === null ||
    duracaoExecucao === null
  ) {
    return null;
  }

  return (
    <dl className="grid grid-cols-12 gap-2 mb-4">
      <div className="col-span-3 sm:col-span-4 flex items-center justify-center sm:text-sm text-xs">
        <dd className="text-gray-900 pr-3">
          {tempoParaPrimeiroToken ? tempoParaPrimeiroToken.toFixed(2) : "—"}
        </dd>
        <dt className="font-medium text-gray-500">
          <span className="hidden sm:inline">seg até </span> primeiro token
        </dt>
      </div>
      <div className="col-span-3 flex items-center justify-center sm:text-sm text-xs">
        <dd className="text-gray-900 pr-2">
          {tokensPorSegunda ? tokensPorSegunda.toFixed(2) : "—"}
        </dd>
        <dt className="font-medium text-gray-500">
          t<span className="hidden sm:inline">okens</span> / s
          <span className="hidden sm:inline">eg</span>
        </dt>
      </div>
      <div className="col-span-3 sm:col-span-2 flex items-center justify-center sm:text-sm text-xs">
        <dd className="text-gray-900 pr-2">{contagemTokens || "—"}</dd>
        <dt className="font-medium text-gray-500">tokens</dt>
      </div>
      <div className="col-span-3 flex items-center justify-center sm:text-sm text-xs">
        <dd className="text-gray-900 pr-2">
          {Math.max(duracaoExecucao, 0).toFixed(2)}
        </dd>
        <dt className="font-medium text-gray-500">tempo de execução</dt>
      </div>
    </dl>
  );
}
