import { ReactElement, useState } from 'react';
import data from './data';
import List from './List';

const App = (): ReactElement => {
  const [people, setPeople] = useState<People>(data);

  return (
    <main>
      <section className="container">
        <h3>{people?.length || 0} Birthdays Today</h3>
        <List people={people} />
      </section>
    </main>
  );
};
export default App;
