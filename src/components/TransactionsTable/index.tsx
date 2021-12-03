import { Container } from './styles';
import { useTransaction } from '../../hooks/useTransactions';

export function TransactionsTable() {
    const { transactions } = useTransaction();
    
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Categoria</th>
                        <th>Valor</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(transactions => {
                        return (
                            <tr key={transactions.id}>
                                <td>{transactions.title}</td>
                                <td className={transactions.type}>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transactions.amount)}
                                </td>
                                <td>{transactions.category}</td>
                                <td>
                                {new Intl.DateTimeFormat('pt-BR').format(
                                    new Date (transactions.createdAt)
                                )}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Container>
    );
}