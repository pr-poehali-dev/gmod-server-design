const Index = () => {
  return (
    <div 
      className="min-h-screen flex items-start relative overflow-hidden"
      style={{
        backgroundImage: `url('https://cdn.poehali.dev/projects/43373741-381d-4f2d-884e-64c504f73daa/bucket/945bd52f-f8fc-43c0-a84f-5326c28217e2.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full max-w-sm pl-20 pt-24">
        <div className="flex items-center gap-4 mb-20">
          <img 
            src="https://cdn.poehali.dev/projects/43373741-381d-4f2d-884e-64c504f73daa/bucket/a4905454-c9fe-41d8-ae02-415463aee4fb.png"
            alt="Logo"
            className="w-20 h-20"
          />
          <div>
            <h1 className="font-['Orbitron'] text-4xl font-bold text-white tracking-tight">
              ABYSSAL
            </h1>
            <p className="text-emerald-500 text-sm tracking-widest uppercase">
              SCP RP
            </p>
          </div>
        </div>

        <div className="space-y-4 w-60">
          <button className="w-full py-4 px-6 bg-emerald-500 hover:bg-emerald-600 text-white font-medium text-base transition-colors">
            Играть
          </button>

          <button className="w-full py-4 px-6 bg-[#0a2520] hover:bg-[#0d3329] text-white font-medium text-base border border-emerald-900/30 transition-colors">
            Контент
          </button>

          <button className="w-full py-4 px-6 bg-[#0a2520] hover:bg-[#0d3329] text-white font-medium text-base border border-emerald-900/30 transition-colors">
            Настройки
          </button>

          <button className="w-full py-4 px-6 bg-transparent hover:bg-red-950/20 text-white font-medium text-base border-2 border-red-700/60 hover:border-red-600 transition-colors">
            Выйти
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
