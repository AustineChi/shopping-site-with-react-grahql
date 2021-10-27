import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import Header from './components/header';
import Learn from './pages/learn/learn.page';
import Shop from './pages/shop/shop.page';

import client from './providers/apollo-client';

const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <Router>
                <Header />
                <Switch>
                    <Route path="/learn">
                        <Learn />
                    </Route>
                    <Route path="/">
                        <Shop />
                    </Route>
                </Switch>
            </Router>
        </ApolloProvider>
    );
}

export default App;