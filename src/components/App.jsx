import {Profile} from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './friend/FriendList';
import { TransactionHistory } from './transaction/TransactionHistory';
import user from '../data/user.json'
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

const App = () => {
    return (
    <>
    <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
    </>
)};

export default App
