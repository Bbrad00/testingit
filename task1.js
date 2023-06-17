const users = [
  {
  username: 'David',
  status: 'online',
  lastActivity: 10
  },
  {
  username: 'Lucy',
  status: 'offline',
  lastActivity: 22
  },
  {
    username: 'Bob',
    status: 'online',
    lastActivity: 104
    }
  ];

  const onlineNames = users.filter(users =>  users.status ==='online');
  const usersOnlineNames = onlineNames.map((person)=>person.username).join(', ');
  alert(`Сейчас в оналйне ${usersOnlineNames}`);