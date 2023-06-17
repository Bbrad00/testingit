const users = [
    {
        username: 'David',
        status: 'online',
        lastActivity: 10
    }, {
        username: 'Lucy', 
        status: 'offline',
        lastActivity: 22
    }, {
        username: 'Bob', 
        status: 'online',
        lastActivity: 104
    }
]

const usersOnline = users.filter((person) => person.status === 'online');
const usersOnlineNames = usersOnline.map((person) => person.username).join(', ');
alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`);