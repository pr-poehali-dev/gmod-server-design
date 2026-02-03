import { useEffect, useState } from 'react';

const Loading = () => {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const fullText = 'ПРОТОКОЛ АКТИВАЦИИ D-КЛАССА... ИДЕНТИФИКАТОР: [D-9341]';

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="min-h-screen bg-[#000308] relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-radial from-cyan-950/20 via-transparent to-transparent"></div>
      
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent animate-scan"
            style={{
              width: '100%',
              top: `${i * 5}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: '4s'
            }}
          />
        ))}
      </div>

      <div className="absolute top-10 left-10 text-cyan-400/60 font-mono text-xs space-y-1 animate-pulse">
        <div>СИСТЕМА: АКТИВНА</div>
        <div>ГЛУБИНА: 2847М</div>
        <div>ДАВЛЕНИЕ: КРИТИЧЕСКОЕ</div>
        <div>O₂: 87%</div>
      </div>

      <div className="absolute top-10 right-10 text-cyan-400/60 font-mono text-xs text-right space-y-1 animate-pulse">
        <div>ОБЪЕКТ: ABYSSAL</div>
        <div>СТАТУС: ЗАГРУЗКА</div>
        <div>ВРЕМЯ: 03:47:21</div>
        <div>УГРОЗА: КЕТЕР</div>
      </div>

      <div className="relative z-10 max-w-4xl w-full px-8">
        <div className="mb-12 relative">
          <div className="absolute -inset-4 bg-cyan-500/10 blur-3xl animate-pulse"></div>
          
          <div className="relative border border-cyan-500/30 bg-black/60 backdrop-blur-sm p-8 shadow-2xl shadow-cyan-500/20">
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-400"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cyan-400"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cyan-400"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyan-400"></div>

            <div className="text-center mb-8">
              <h1 className="font-['Orbitron'] text-6xl font-bold text-cyan-400 mb-2 tracking-wider animate-flicker">
                ABYSSAL INITIATIVE
              </h1>
              <div className="text-cyan-500/70 text-sm tracking-[0.3em] font-mono">
                ФОНД SCP - ПОДВОДНАЯ СТАНЦИЯ ОМЕГА-7
              </div>
            </div>

            <div className="space-y-6">
              <div className="h-32 flex items-center justify-center overflow-hidden">
                <div className="font-mono text-2xl text-cyan-300 tracking-wide">
                  {text}
                  <span className={`inline-block w-3 h-7 bg-cyan-400 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-cyan-400/80 font-mono text-sm mb-2">
                  <span>ЗАГРУЗКА ПРОТОКОЛА</span>
                  <span>{progress}%</span>
                </div>
                
                <div className="relative h-3 bg-black border border-cyan-500/40 overflow-hidden">
                  <div 
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-600 to-cyan-400 transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute inset-0 bg-cyan-400/50 animate-shimmer"></div>
                  </div>
                  
                  <div className="absolute inset-0 flex overflow-hidden">
                    {[...Array(50)].map((_, i) => (
                      <div 
                        key={i} 
                        className="flex-1 border-r border-cyan-500/20"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8 font-mono text-xs">
                <div className="border border-cyan-500/30 p-3 bg-black/40">
                  <div className="text-cyan-500/60 mb-1">СЕКТОР</div>
                  <div className="text-cyan-300 text-lg font-bold animate-pulse">D-WING</div>
                </div>
                <div className="border border-cyan-500/30 p-3 bg-black/40">
                  <div className="text-cyan-500/60 mb-1">ДОСТУП</div>
                  <div className="text-cyan-300 text-lg font-bold animate-pulse">УРОВЕНЬ-4</div>
                </div>
                <div className="border border-cyan-500/30 p-3 bg-black/40">
                  <div className="text-cyan-500/60 mb-1">СТАТУС</div>
                  <div className="text-cyan-300 text-lg font-bold animate-pulse">АКТИВЕН</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center font-mono text-cyan-500/50 text-sm animate-pulse">
          ПРЕДУПРЕЖДЕНИЕ: НЕСАНКЦИОНИРОВАННЫЙ ДОСТУП КАРАЕТСЯ АМНЕЗИЕЙ КЛАССА-C
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-cyan-400 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              opacity: Math.random() * 0.5
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loading;
