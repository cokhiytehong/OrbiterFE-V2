import { isL2DataDev } from "./src/util";

const baseDomain = `https://api.orbiter.finance`
export default {
  // l2BaseUrl: isProd() ? 'https://l2api.orbiter.finance' : 'http://datastation.joeyzhou.xyz',
  l2BaseUrl: isL2DataDev() ? 'http://datastation.joeyzhou.xyz' : 'https://l2api.orbiter.finance',
  baseTraddingUrl: `${ baseDomain }/api`,
  metaMaskNetworkId: {
    1: 1,
    2: 42161,
    3: 1,
    4: 1,
    6: 137,
    7: 10,
    8: 1,
    9: 1,
    10: 1088,
    11: 1,
    12: 1,
    13: 288,
    14: 324,
    15: 56,
    16: 42170,
    17: 1101,

    5: 5,
    22: 421613,
    66: 80001,
    77: 420,
    88: 5,
    99: 5,
    510: 599,
    511: 5,
    512: 5,
    513: 28,
    514: 280,
    515: 97,
    517: 1442,
    519: 534353,
    520: 167004,
    521: 84531,
    522: 59140,
    523: 195
  },
  networkUrl: {
    1: 'https://etherscan.io',
    5: 'https://goerli.etherscan.io',
    2: 'https://arbiscan.io',
    22: 'https://testnet.arbiscan.io',
    3: 'https://zkscan.io/explorer',
    33: 'https://goerli.zkscan.io/explorer',
    4: 'https://starkscan.co',
    44: 'https://testnet.starkscan.co',
    6: 'https://polygonscan.com',
    66: 'https://mumbai.polygonscan.com',
    7: 'https://optimistic.etherscan.io',
    77: 'https://goerli-optimism.etherscan.io',
    8: 'https://immutascan.io',
    88: '', // ImmutableX don't have testnet browser
    9: 'https://explorer.loopring.io',
    99: 'https://explorer.loopring.io',
    10: 'https://andromeda-explorer.metis.io',
    510: 'https://stardust-explorer.metis.io',
    11: 'https://trade.dydx.exchange',
    511: 'https://trade.stage.dydx.exchange',
    12: 'https://zkspace.info',
    512: 'https://v3-rinkeby.zkswap.info',
    13: 'https://blockexplorer.boba.network',
    513: 'https://blockexplorer.goerli.boba.network',
    15: 'https://bscscan.com',
    515: 'https://testnet.bscscan.com',
    14: 'https://explorer.zksync.io',
    514: 'https://goerli.explorer.zksync.io',
    16: 'https://nova.arbiscan.io',
    516: 'https://goerli-rollup-explorer.arbitrum.io',
    17: "https://zkevm.polygonscan.com",
    517: 'https://testnet-zkevm.polygonscan.com',
    518: 'https://l1scan.scroll.io',
    519: 'https://l2scan.scroll.io',
    520: 'https://l2explorer.a2.taiko.xyz',
    521: 'https://goerli.basescan.org',
    522: 'https://explorer.goerli.zkevm.consensys.net',
    523: 'https://www.okx.com/explorer/okbc-test'
  },
  chainIcon: {
    1: 'tokenLogo',
    2: 'arblogo',
    22: 'arblogo',
    3: 'zklogo',
    33: 'zklogo',
    4: 'sknlogo',
    44: 'sknlogo',
    6: 'pglogo',
    66: 'pglogo',
    7: 'oplogo',
    77: 'oplogo',
    8: 'imxlogo',
    88: 'imxlogo',
    9: 'loopringlogo',
    99: 'loopringlogo',
    10: 'metislogo',
    510: 'metislogo',
    11: 'dydxlogo',
    511: 'dydxlogo',
    12: 'zkspacelogo',
    512: 'zkspacelogo',
    13: 'bobalogo',
    513: 'bobalogo',
    14: 'zk2logo',
    514: 'zk2logo',
    15: 'bsclogo',
    515: 'bsclogo',
    16: 'arnavologo',
    516: 'arnavologo',
    17: 'pglogo',
    517: 'pglogo',
    18: 'scrolllogo',
    518: 'scrolllogo',
    19: 'scrolllogo',
    519: 'scrolllogo',
    20: 'taikologo',
    520: 'taikologo',
    521: 'baselogo',
    522: 'consensyslogo',
    523: 'okblogo'
  },
  txExploreUrl: {
    1: 'https://etherscan.io/tx/', // /tx/  /address/
    5: 'https://goerli.etherscan.io/tx/', // /tx/  /address/
    2: 'https://arbiscan.io/tx/', // /tx/  /address/
    22: 'https://testnet.arbiscan.io/tx/',
    3: 'https://zkscan.io/explorer/transactions/',
    33: 'https://goerli.zkscan.io/explorer/transactions/', // /explorer/transactions/   /explorer/accounts/
    4: 'https://starkscan.co/tx/',
    44: 'https://testnet.starkscan.co/tx/',
    6: 'https://polygonscan.com/tx/',
    66: 'https://mumbai.polygonscan.com/tx/',
    7: 'https://optimistic.etherscan.io/tx/',
    77: 'https://goerli-optimism.etherscan.io/tx/',
    8: 'https://immutascan.io/tx/',
    88: '', // ImmutableX don't have testnet browser
    9: 'https://explorer.loopring.io/tx/',
    99: 'https://explorer.loopring.io/tx/',
    10: 'https://andromeda-explorer.metis.io/tx/',
    510: 'https://stardust-explorer.metis.io/tx/',
    11: 'https://trade.dydx.exchange/',
    511: 'https://trade.stage.dydx.exchange/',
    12: 'https://zkspace.info/transaction/',
    512: 'https://v3-rinkeby.zkswap.info/transaction/',
    13: 'https://blockexplorer.boba.network/tx/',
    513: 'https://blockexplorer.rinkeby.boba.network/tx/',
    15: 'https://bscscan.com/tx/',
    515: 'https://testnet.bscscan.com/tx/',
    14: 'https://explorer.zksync.io/tx/',
    514: 'https://goerli.explorer.zksync.io/tx/',
    16: 'https://nova.arbiscan.io/tx/',
    516: 'https://goerli-rollup-explorer.arbitrum.io/tx/',
    17: "https://zkevm.polygonscan.com/tx/",
    517: 'https://testnet-zkevm.polygonscan.com/tx/',
    518: 'https://l1scan.scroll.io/tx/',
    519: 'https://l2scan.scroll.io/tx/',
    520: 'https://l2explorer.a2.taiko.xyz/tx/',
    521: 'https://goerli.basescan.org/tx/',
    522: 'https://explorer.goerli.zkevm.consensys.net/tx/',
    523: 'https://www.okx.com/explorer/okbc-test/tx/'
  },
  accountExploreUrl: {
    1: 'https://etherscan.io/address/', // /tx/  /address/
    5: 'https://goerli.etherscan.io/address/', // /tx/  /address/
    2: 'https://arbiscan.io/address/', // /tx/  /address/
    22: 'https://testnet.arbiscan.io/address/',
    3: 'https://zkscan.io/explorer/accounts/',
    33: 'https://goerli.zkscan.io/explorer/accounts/', // /explorer/transactions/   /explorer/accounts/
    4: 'https://voyager.online/contract/',
    44: 'https://goerli.voyager.online/contract/',
    6: 'https://polygonscan.com/address/',
    66: 'https://mumbai.polygonscan.com/address/',
    7: 'https://optimistic.etherscan.io/address/',
    77: 'https://blockscout.com/optimism/goerli/address/',
    8: 'https://market.immutable.com/inventory/',
    88: 'https://market.ropsten.immutable.com/inventory/',
    9: 'https://explorer.loopring.io/account/',
    99: 'https://explorer.loopring.io/account/',
    10: 'https://andromeda-explorer.metis.io/address/',
    510: 'https://stardust-explorer.metis.io/address/',
    11: 'https://trade.dydx.exchange/',
    511: 'https://trade.stage.dydx.exchange/',
    12: 'https://zkspace.info/account/',
    512: 'https://v3-rinkeby.zkswap.info/account/',
    13: 'https://bobascan.com/address/',
    513: 'https://testnet.bobascan.com/address/',
    14: 'https://explorer.zksync.io/address/',
    514: 'https://goerli.explorer.zksync.io/address/',
    15: 'https://bscscan.com/address',
    515: 'https://testnet.bscscan.com/address/',
    16: 'https://nova.arbiscan.io/address/',
    516: 'https://goerli-rollup-explorer.arbitrum.io/address/',
    17: "https://zkevm.polygonscan.com/address/",
    517: 'https://testnet-zkevm.polygonscan.com/address/',
    518: 'https://l1scan.scroll.io/address/',
    519: 'https://l2scan.scroll.io/address/',
    520: 'https://l2explorer.a2.taiko.xyz/address/',
    521: 'https://goerli.basescan.org/address/',
    522: 'https://explorer.goerli.zkevm.consensys.net/address/',
    523: 'https://www.okx.com/explorer/okbc-test/address/'
  },
  gasPriceMap: {
    1: 100,
    2: 1.9,
    3: 100,
    4: 100,
    5: 1,
    6: 60,
    7: 0.001,
    8: 1.7,
    9: 100,
    10: 1,
    11: 1,
    14: 1,
    15: 1,
    16: 1,
    17: 1,
    22: 0.02,
    33: 100,
    44: 50,
    66: 60,
    77: 0.001,
    88: 1.7,
    99: 1,
    510: 1,
    511: 1,
    13: 1,
    513: 1,
    514: 0.000028572,
    515: 1,
    516: 1,
    517: 1,
    518: 1,
    519: 1,
    520: 1,
    521: 1,
    522: 1,
    523: 1
  },
  gasLimitMap: {
    1: 35000,
    2: 810000,
    3: 100,
    4: 35000,
    5: 35000,
    6: 1500,
    7: 21000,
    8: 51000,
    9: 75000,
    10: 28000,
    11: 100000,
    13: 646496,
    14: 10560,
    15: 150000,
    16: 150000,
    17: 300000,
    22: 810000,
    33: 100,
    44: 35000,
    66: 1500,
    77: 21000,
    88: 51000,
    99: 75000,
    510: 16000,
    511: 100000,
    513: 646496,
    514: 10560,
    515: 150000,
    516: 150000,
    517: 21000,
    518: 21000,
    519: 21000,
    520: 21000,
    521: 21000,
    522: 21000,
    523: 21000
  }
};
