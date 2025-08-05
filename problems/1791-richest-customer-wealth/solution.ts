function maximumWealth(accounts: number[][]): number {
  let clientsWealth: number[] = [];

  for (let i = 0; i < accounts.length; i++) {
    let currentClientWealth = accounts[i][0];

    for (let j = 1; j < accounts[i].length; j++) {
      currentClientWealth += accounts[i][j]
    }

    clientsWealth.push(currentClientWealth);
  }

  return Math.max(...clientsWealth)
};
