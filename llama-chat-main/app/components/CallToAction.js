export default function CallToAction() {
  return (
    <div
      className="guide-footer-cta sm:flex items-center justify-center p-12 space-y-4 bg-bordo text-white"
      style={{
        backgroundColor: "#C8102E", // Cor bordô
        position: "relative",
        zIndex: 1,
        textAlign: "center",
      }}
    >
      <div className="flex flex-col items-center">
        <img
          src="https://famipe.edu.br/wp-content/uploads/2023/04/logo_vertical_branca_famipe_512-186x300.png"
          alt="Logo"
          width={60} // Defina a largura em pixels
          height={50} // Defina a altura em pixels
          className="mb-4"
        />
        <h1 className="text-2xl sm:text-3xl font-bold text-white">
          Este é um projeto sobre discriminação racial
        </h1>
        <p className="text-sm text-white">
          Aqui você encontrará informações e recursos sobre o tema.
        </p>
      </div>
    </div>
  );
}
