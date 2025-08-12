function maximumWealth(accounts: number[][]): number {
  return Math.max(...accounts.map(customer => customer.reduce((clientWealth, current) => clientWealth + current, 0)));
}
