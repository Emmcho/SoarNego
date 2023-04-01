// ShowDiffContext.js
import { createContext, useState } from 'react';

const ShowDiffContext = createContext();

export const ShowDiffProvider = ({ children }) => {
  const [showDiff, setShowDiff] = useState(false);

  return (
    <ShowDiffContext.Provider value={{ showDiff, setShowDiff }}>
      {children}
    </ShowDiffContext.Provider>
  );
};

export default ShowDiffContext;
