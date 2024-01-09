import { useTranslation, Trans } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl text-center">Monsters DB</h1>
      <p className="text-center">This is a monsters db</p>
    </div>
  )
}

export default App
