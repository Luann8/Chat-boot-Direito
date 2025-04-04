import { Fragment } from "react";
import { Dialog, Transition, Listbox } from "@headlessui/react";
import {
  XMarkIcon,
  ChevronUpDownIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";

export default function SlideOver({
  open,
  setOpen,
  systemPrompt,
  setSystemPrompt,
  replicateApiToken,
  setReplicateApiToken,
  temp,
  setTemp,
  topP,
  setTopP,
  maxTokens,
  setMaxTokens,
  models,
  size,
  setSize,
  handleSubmit,
}) {
  return (
    <Transition.Root show={open ? true : false} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <form
                    onSubmit={(e) => handleSubmit(e)}
                    className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl"
                  >
                    <div className="h-0 flex-1 overflow-y-auto">
                      <div className="bg-gray-700 px-4 py-6 sm:px-6">
                        <div className="flex items-center justify-between">
                          <Dialog.Title className="text-base font-semibold leading-6 text-white">
                            Chat com um Llama
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="rounded-md bg-gray-700 text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Fechar painel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                        <div className="mt-1">
                          <p className="text-sm text-gray-300">
                            Um projeto da feito na Univassouras por alunos da
                            eng de software com base na Replicate.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div className="divide-y divide-gray-200 px-4 sm:px-6">
                          <div className="space-y-6 pb-5 pt-6">
                            <div>
                              <label
                                htmlFor="description"
                                className="block font-bold text-sm leading-6 text-gray-900"
                              >
                                Tamanho do Llama
                              </label>

                              <p
                                id="system-prompt-description"
                                className="mt-2 text-xs text-gray-500"
                              >
                                Tamanhos maiores significam mais inteligência,
                                mas mais lentidão.
                              </p>
                              <div className="relative mt-1">
                                <Listbox value={size} onChange={setSize}>
                                  <div className="relative mt-1">
                                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left border border-gray-300 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                      <span className="block truncate">
                                        {size ? size.name : "carregando..."}
                                      </span>
                                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                        <ChevronUpDownIcon
                                          className="h-5 w-5 text-gray-400"
                                          aria-hidden="true"
                                        />
                                      </span>
                                    </Listbox.Button>
                                    <Transition
                                      as={Fragment}
                                      leave="transition ease-in duration-100"
                                      leaveFrom="opacity-100"
                                      leaveTo="opacity-0"
                                    >
                                      <Listbox.Options className="absolute mt-1 max-h-60 w-full shadow-md overflow-auto border-gray-700 rounded-md bg-white py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        {models
                                          ? models.map((model, modelIdx) => (
                                              <Listbox.Option
                                                key={modelIdx}
                                                className={({ active }) =>
                                                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                    active
                                                      ? "bg-gray-100 text-gray-900"
                                                      : "text-gray-900"
                                                  }`
                                                }
                                                value={model}
                                              >
                                                {({ selected }) => (
                                                  <>
                                                    <span
                                                      className={`block truncate ${
                                                        selected
                                                          ? "font-medium"
                                                          : "font-normal"
                                                      }`}
                                                    >
                                                      {model.name}
                                                    </span>
                                                    {selected ? (
                                                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                                                        <CheckIcon
                                                          className="h-5 w-5"
                                                          aria-hidden="true"
                                                        />
                                                      </span>
                                                    ) : null}
                                                  </>
                                                )}
                                              </Listbox.Option>
                                            ))
                                          : null}
                                      </Listbox.Options>
                                    </Transition>
                                  </div>
                                </Listbox>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-6 pb-5 pt-6">
                            <div>
                              <label
                                htmlFor="description"
                                className="block font-bold text-sm leading-6 text-gray-900"
                              >
                                Prompt do Sistema
                              </label>
                              <p
                                id="system-prompt-description"
                                className="mt-2 text-xs text-gray-500"
                              >
                                Isso é adicionado ao prompt e ajuda a guiar o
                                comportamento do sistema.
                              </p>
                              <div className="mt-3">
                                <textarea
                                  id="systemPrompt"
                                  name="systemPrompt"
                                  rows={4}
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                                  value={systemPrompt}
                                  onChange={(e) =>
                                    setSystemPrompt(e.target.value)
                                  }
                                />
                              </div>
                            </div>
                          </div>

                          <div className="space-y-6 pb-5 pt-6">
                            <div>
                              <label
                                htmlFor="description"
                                className="block font-bold text-sm leading-6 text-gray-900"
                              >
                                Token da API Replicate
                              </label>
                              <p
                                id="system-prompt-description"
                                className="mt-2 text-xs text-gray-500"
                              >
                                Sua chave pessoal para fazer requisições à API.
                                Mantenha isso em segredo!
                              </p>
                              <div className="mt-3">
                                <input
                                  id="replicateApiToken"
                                  name="replicateApiToken"
                                  type="password"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                                  value={replicateApiToken}
                                  onChange={(e) =>
                                    setReplicateApiToken(e.target.value)
                                  }
                                />
                              </div>
                            </div>
                          </div>

                          <div className="space-y-6 pb-5 pt-6">
                            <div>
                              <label
                                htmlFor="temperature"
                                className="block text-sm font-bold leading-6 text-gray-900"
                              >
                                Temperatura - {temp}
                              </label>
                              <p
                                className="mt-2 text-xs text-gray-500"
                                id="temperature-description"
                              >
                                Ajusta a aleatoriedade das saídas, maior que 1 é
                                mais aleatório e 0 é determinístico, 0,75 é um
                                bom valor inicial.
                              </p>
                              <div className="mt-3">
                                <input
                                  id="temperature"
                                  type="range"
                                  min="0.01"
                                  onChange={(e) => setTemp(e.target.value)}
                                  value={temp}
                                  max="5"
                                  step="0.01"
                                  name="temperature"
                                  className="w-full h-1 bg-gray-100 accent-gray-500  rounded-lg appearance-none cursor-pointer"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="space-y-6 pb-5 pt-6">
                            <div>
                              <label
                                htmlFor="temperature"
                                className="block text-sm font-bold leading-6 text-gray-900"
                              >
                                Top-p - {topP}
                              </label>
                              <p
                                className="mt-2 text-xs text-gray-500"
                                id="temperature-description"
                              >
                                Também conhecido como "nucleus sampling" valor
                                de 0,9 é um bom valor inicial. Menores valores
                                fazem com que o modelo seja mais conservador.
                              </p>
                              <div className="mt-3">
                                <input
                                  id="topP"
                                  type="range"
                                  min="0.01"
                                  onChange={(e) => setTopP(e.target.value)}
                                  value={topP}
                                  max="1"
                                  step="0.01"
                                  name="topP"
                                  className="w-full h-1 bg-gray-100 accent-gray-500  rounded-lg appearance-none cursor-pointer"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="space-y-6 pb-5 pt-6">
                            <div>
                              <label
                                htmlFor="temperature"
                                className="block text-sm font-bold leading-6 text-gray-900"
                              >
                                Máximo de Tokens - {maxTokens}
                              </label>
                              <p
                                className="mt-2 text-xs text-gray-500"
                                id="temperature-description"
                              >
                                Quantidade máxima de tokens para a resposta. Um
                                token é aproximadamente uma palavra.
                              </p>
                              <div className="mt-3">
                                <input
                                  id="maxTokens"
                                  type="range"
                                  min="1"
                                  onChange={(e) => setMaxTokens(e.target.value)}
                                  value={maxTokens}
                                  max="500"
                                  step="1"
                                  name="maxTokens"
                                  className="w-full h-1 bg-gray-100 accent-gray-500  rounded-lg appearance-none cursor-pointer"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-shrink-0 px-4 py-4 flex justify-end space-x-3">
                          <button
                            type="submit"
                            className="inline-flex justify-center rounded-md border border-transparent bg-gray-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                          >
                            Salvar
                          </button>
                          <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-gray-300 hover:ring-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                            onClick={() => setOpen(false)}
                          >
                            Fechar
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
