export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/2c0a80ef-864f-4e3a-a193-067e8fac6dc7/files/8090a054-4a68-4e25-9e2f-bd893b508b0c.jpg"
          alt="Бабушка Юля с горой посуды"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Весёлая аркада для всей семьи</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Убирай тарелки, мойте кружки и не давай посуде захватить столовую! Бабушка Юля не сдаётся — помоги ей пройти все уровни.
        </p>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Начать игру
        </button>
      </div>
    </div>
  );
}