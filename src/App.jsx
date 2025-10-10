import { Aside } from "./components/Aside"
import Card, { CardBody } from "./components/Card"
import { Container } from "./components/Container"
import { DailyBudget } from "./components/DailyBudget"
import { Main } from "./components/Main"
import { SearchInput } from "./components/SearchInput"
import { Typography } from "./components/Typography"
import { SavingsStatus } from "./SavingsStatus"

function App() {

  return (
    <div className="bg-neutral-background min-h-screen">
      <Container>
        <Aside />
        <Main>
          <SearchInput name="q" />
          <div>
            <Typography variant="h1">
              Olá, Vinny
            </Typography>
            <Typography>
              Veja como estão suas finanças hoje.
            </Typography>
          </div>
          <section>
            <Card>
              <Card.Header>
                Orçamento diário disponível:
              </Card.Header>
              <CardBody>
                <DailyBudget value={42} />
              </CardBody>
            </Card>
            <Card>
              <Card.Header>
                Progresso da meta financeira
              </Card.Header>
              <CardBody>
                <SavingsStatus />
              </CardBody>
            </Card>
            <Card>
              <Card.Header>
                Movimentação financeira
              </Card.Header>
              <CardBody>
                R$ 200
              </CardBody>
            </Card>
            <Card>
              <Card.Header>
                Minhas contas
              </Card.Header>
              <CardBody>
                R$ 200
              </CardBody>
            </Card>
          </section>
        </Main>

      </Container>
    </div>
  )
}

export default App