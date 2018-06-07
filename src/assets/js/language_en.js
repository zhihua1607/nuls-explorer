module.exports = {
    title: 'NULS BlockChain Explorer and Search',
    nav: {
        index: 'Home',
        rank: 'Rank',
        currencyAccount: 'Currency',
        outPieceAccount: 'Producer',
        tool: 'Tool',
        toolHit: 'Wait',
        wallet: 'Wallet',
        clientDownloads: 'Client',
        webWallet: 'Web'
    },
    second: {
        index_NULS: 'NULS Testnet',
        block: 'Block',
        more: 'More',
        history: '14 days trading history',
        transaction: 'Transaction',
        transactions: 'Transactions',
        consensusReward: 'Consensus reward',
        enter: 'Input',
        outPut: 'Output',
        fee: 'Fee',
        amount: 'Amount',
        totalMortgage: 'Deposit',
        consensusNodeAccount: 'All nodes',
        consensusPeople: 'Consensus nodes',
        tokenCirculation: 'Token distribution',
        dailyConsensusNodeReward: 'Daily consensus reward',
        transList: 'Transactions',
    },
    blockList: {
        blockList: 'Block List',
        height: 'Height',
        time: 'Time',
        blockNodeName: 'Block name',
        transactionCount: 'Transactions',
        size: 'Size',
        blockReward: 'Block reward',
    },
    currencyAccount:{
        number: 'No.',
        address: 'Address',
        balance: 'Balance',
        transactionCount: 'Transactions',
    },
    outPieceAccount:{
        number: 'No.',
        address: 'Address',
        blockReward: 'Block reward',
        reward: 'Reward',
        lastRewardBlock: 'Last reward block ',
        consensusStatus: 'Consensus status'
    },
    consensus:{
        i0: "Wait",
        i1: "Active",
        inull: "unknown",
    },
    utxoStatus:{
        i0:"Unspent",
        i1:"Locked",
        i2:"Locked",
        i3:"Spent",
        inull: "unknown",
    },
    consensusNode:{
        consensusNode: 'Consensus node',
        accountInfo: 'AccountInfo',
        blockAddress: 'Block address',
        nodeName: 'Node name',
        consensusStatus: 'Consensus status',
        blockCount: 'Block amount',
        transactionCount: 'Transactions',
        consensusReward: 'Rewards',
        margin: 'Margin',
        consensusFormatter:{
            i1: "Waiting for consensus",
            i2: "Consensus",
            i0: "Not join",
            inull: "unknown",
        }
    },
    blockDetail: {
        blockDetail: 'Block detail',
        blockHash: 'Block hash',
        confirmCount: 'Confirms',
        transactionCount: 'Transactions',
        transactionFee: 'Transaction fee',
        blockNodeName: 'Producer',
        previousBlock: 'Previous block',
        nextBlock: 'Next block'
    },
    transDetail: {
        transDetail: "Details",
        transType: "Type",
        transHash: "Hash",
        transHeight: "Height",
        transConfirmCount: "Confirms",
        transTime: "Time",
        transInput: "Inputs",
        transOutput: "Outputs",
        transFee: "Fee",
        transTypeDetail:{
            i1: "Consensus reward",
            i2: "Transfer transactions",
            i3: "Lock transaction",
            i4: "Unlock transaction",
            i5: "Change",
            i11: "Set up a name",
            i90: "Registration consensus",
            i91: "Join consensus",
            i92: "Withdraw from the consensus",
            i93: "Yellow card penalty",
            i94: "Red card penalty",
            i95: "Delete consensus",
            inull: "unknown",
        },
    },
    page:{
        previous:'Previous',
        next: 'Next',
        goTo: 'GO',
        total: 'Total',
        page: 'Page',
    },
    accountInfo: {
        accountInfo: 'AccountInfo',
        address: 'address',
        canUseBalance: 'Available',
        freezeBalance: 'Freeze',
        transactionCount: 'Transactions',
    },
    notice: {
        noNet: 'Failed to read data, please check the network',
        notice: 'Notice',
        determine: 'YES',
        noMessage: 'No message',
        not: 'None',
        noBlockMessage: 'No Block Message',
        noTransMessage: 'No Trans Message',
        searchFailed: 'No information found',
        searchNull: 'Please enter the content',
        consensusDetail: 'Failed to read Consensus node details data',
        transCount: 'Transactions',
        numberError: 'Please enter a correct number',
        transDate: 'Date'
    },
    el: {
        pagination: {
            goto: 'Go to',
            pagesize: '/page',
            total: 'Total {total}',
            pageClassifier: ''
        },
        messagebox: {
            title: 'Notice',
            confirm: 'OK',
            cancel: 'Cancel',
            error: 'Illegal input'
        },
    },
    other: {
        semicolon: ':'
    }
}
