import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url('https://cdn.poehali.dev/projects/43373741-381d-4f2d-884e-64c504f73daa/bucket/945bd52f-f8fc-43c0-a84f-5326c28217e2.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      
      <div className="relative z-10 max-w-md w-full px-6">
        <div className="flex flex-col items-center mb-12">
          <div className="relative mb-6">
            <img 
              src="https://cdn.poehali.dev/projects/43373741-381d-4f2d-884e-64c504f73daa/bucket/a4905454-c9fe-41d8-ae02-415463aee4fb.png"
              alt="Logo"
              className="w-24 h-24 glitch"
            />
            <div className="absolute inset-0 w-24 h-24 bg-emerald-500/20 blur-xl rounded-full" />
          </div>
          
          <h1 className="font-['Orbitron'] text-5xl font-black text-emerald-400 text-glow mb-2 tracking-wider">
            ABYSSAL
          </h1>
          <p className="font-['Roboto_Mono'] text-emerald-500/80 text-sm tracking-[0.3em] uppercase">
            SCP RP
          </p>
        </div>

        <div className="space-y-3">
          <Button 
            className="w-full h-14 bg-emerald-600 hover:bg-emerald-500 text-black font-['Roboto_Mono'] text-base font-bold tracking-wider uppercase border-2 border-emerald-400 border-glow transition-all duration-300 hover:scale-[1.02]"
          >
            Играть
          </Button>

          <Button 
            variant="outline"
            className="w-full h-14 bg-transparent hover:bg-emerald-950/40 text-emerald-400 font-['Roboto_Mono'] text-base font-medium tracking-wider uppercase border-2 border-emerald-600/50 hover:border-emerald-500 transition-all duration-300"
          >
            Контент
          </Button>

          <Button 
            variant="outline"
            className="w-full h-14 bg-transparent hover:bg-emerald-950/40 text-emerald-400 font-['Roboto_Mono'] text-base font-medium tracking-wider uppercase border-2 border-emerald-600/50 hover:border-emerald-500 transition-all duration-300"
          >
            Настройки
          </Button>

          <Button 
            variant="outline"
            className="w-full h-14 bg-transparent hover:bg-red-950/40 text-red-400 font-['Roboto_Mono'] text-base font-medium tracking-wider uppercase border-2 border-red-600/50 hover:border-red-500 transition-all duration-300"
          >
            Выйти
          </Button>
        </div>

        <div className="mt-8 text-center">
          <p className="font-['Roboto_Mono'] text-xs text-emerald-500/40 uppercase tracking-widest">
            Station 119 • Depth: 3800m
          </p>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 font-['Roboto_Mono'] text-xs text-emerald-500/30 tracking-wider">
        v1.3.3.7
      </div>
    </div>
  );
};

export default Index;
