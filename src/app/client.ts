interface CardInterface {
    cardType: string;
    cardNo: string;
    getCardType?: () => {}
}

class Card implements CardInterface {
    cardType!: string;
    cardNo!: string;
    constructor(cardType: string, cardNo: string) {
        this.cardType = cardType;
        this.cardNo = cardNo
    }

    getCardType(): string {
        return this.cardType + this.cardNo
    }
}

class Account {
    acctType!: string;
    acctNo!: string;

    constructor(acctType: string, acctNo: string) {
        this.acctType = acctType;
        this.acctNo = acctNo
    }

    getAccountType(): string {
        return this.acctType + this.acctNo
    }
}

export class Client {

    clientName?: string;
    clientAge?: number;
    clientPin?: string;

    //Composition
    card!: Card;
    account!: Account

    constructor(clientName: string, clientAge: number, clientPin: string, acctNo: string, cardNo: string) {
        this.clientName = clientName;
        this.clientAge = clientAge;
        this.clientPin = clientPin;
        this.card = new Card("MC", cardNo);
        this.account = new Account("ACT", acctNo)
    }

    getAcctoNo() {
        return this.account.getAccountType()
    }

    getCardNo() {
        return this.card.getCardType()
    }
}


