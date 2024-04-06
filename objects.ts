type User = {
  readonly _id: string;
  username: string;
  email: string;
  payment?: Payment;
};

type CardDetails = {
  cardDate: string;
  cardNumber: string;
  cvv: number;
};

type BankDetails = {
  name: string;
  branch: string;
  code: number;
};

type Payment = CardDetails & BankDetails;


let krutik: User = {
    _id: '13bzcb348ac',
    username: 'krutikmaru',
    email: 'krutikmaru@gmail.com',
}

let meera: User = {
    _id: '26azbb321af',
    username: 'meeraharia',
    email: 'meeraharia@gmail.com',
    payment: {
        cardDate: '03-Mar-2026',
        cvv: 619,
        cardNumber: "1234567890",
        branch: 'Churchgate',
        name: 'HDFC',
        code: 1245
    }
}