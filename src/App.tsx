import React, { useState } from 'react';

// Components
import { CustomButton } from './components';

function App() {
  const [counter, setCounter] = useState<number>(0);

  const handleValueChange = (value: number | string) => {
    setCounter(prevState => {
      switch (value) {
        case 'increase': {
          return prevState + 1;
        }
        case 'decrease': {
          return prevState > 1 ? prevState - 1 : 0;
        }
        case 'reset': {
          return 0;
        }
        default: {
          return prevState;
        }
      }
    })
  };

  return (
    <div className="antialiased text-slate-500 text-slate-400 bg-slate-900 min-h-screen flex items-center justify-center">
      <section className="text-gray-400 bg-gray-900 body-font w-full">
        <div className="mx-auto px-5 py-24 flex align-center justify-center">
          <div className="p-4 md:w-1/2 lg:w-1/3 self-center">
            <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
              <div className="p-6">
                <h1 className="text-5xl font-medium text-white mb-8 text-center">{counter}</h1>

                <div className="flex item-scenter justify-center">
                  <CustomButton onClick={() => handleValueChange('decrease')}>
                    -
                  </CustomButton>

                  <CustomButton onClick={() => handleValueChange('reset')}>
                    Reset
                  </CustomButton>

                  <CustomButton onClick={() => handleValueChange('increase')}>
                    +
                  </CustomButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
