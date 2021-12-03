import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransaction } from '../../hooks/useTransactions';

import { Container } from "./styles";

export function Summary() {
    const { transactions } = useTransaction();

    const summary = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'deposit') {
            acc.deposit += transaction.amount;
            acc.total += transaction.amount;
        }else{
            acc.withdraw += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    }, {
        deposit: 0,
        withdraw: 0,
        total: 0,
    })

    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>
                {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                    }).format(summary.deposit)}
                </strong>
            </div>

            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Entradas" />
                </header>
                <strong>-
                {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                    }).format(summary.withdraw)}
                </strong>
            </div>

            <div className="hightlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Entradas" />
                </header>
                <strong>
                {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
    );
}