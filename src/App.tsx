import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import Modal from 'react-modal'
import { Dashboard } from './components/Dashboard'
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal'
import { TransactionProvider } from './hooks/useTransactions'

Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionMadalOpen, setIsNewTransactionMadalOpen] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransactionMadalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionMadalOpen(false);
    }
    
  return (
    <TransactionProvider>
      <Header onOpenNewTransationModal={handleOpenNewTransactionModal}/>

      <Dashboard />

      <NewTransactionModal 
      isOpen={isNewTransactionMadalOpen}
      onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionProvider>
  );
}