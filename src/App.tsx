import { useState, useSyncExternalStore } from "react";

function useWorkingHook() {
  useState(0);
}

function useBrokenHook() {
  // useTransition also breaks the extension
  useSyncExternalStore(
    () => () => {},
    () => {},
  );
}

function ComponentWithWorkingHook() {
  useWorkingHook();
  return null;
}

function ComponentWithBrokenHook() {
  useBrokenHook();
  return null;
}

function App() {
  return (
    <div>
      <ComponentWithWorkingHook />
      <ComponentWithBrokenHook />
    </div>
  );
}

export default App;
