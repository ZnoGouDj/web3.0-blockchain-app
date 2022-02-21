// https://eth-ropsten.alchemyapi.io/v2/o2cYZL3M_F8EdVsNaCAsX_rljAHCwpsq

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.4',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/o2cYZL3M_F8EdVsNaCAsX_rljAHCwpsq',
      accounts: ['d581323461fbdcedacb1f7c06e07b74dba98f5cc7814a277693ca8e0d0dc1793'],
    },
  },
};
