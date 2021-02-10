import { CategoryType } from "../../../model/categoryType";
import { TransactionType } from "../../../model/transactionType";

export interface TransactionDetail {
    accountNumber: string,
    transactionType: TransactionType,
    categoryType: CategoryType
    price: number,
    updateDate: string
}

export const TransactionDetailData: TransactionDetail[] = [
    {
       accountNumber: '123-221-5486-223',
       transactionType: TransactionType.INCOME,
       categoryType: CategoryType.SALARY,
       price: 100000.00,
       updateDate: '2021-01-01'
    },
    {
        accountNumber: '123-221-5486-223',
        transactionType: TransactionType.OUTCOME,
        categoryType: CategoryType.SHOPING,
        price: 2000.00,
        updateDate: '2021-01-01'
     },
     {
        accountNumber: '123-221-5486-223',
        transactionType: TransactionType.OUTCOME,
        categoryType: CategoryType.RENT,
        price: 15000.00,
        updateDate: '2021-01-01'
     },
     {
        accountNumber: '123-221-5486-223',
        transactionType: TransactionType.OUTCOME,
        categoryType: CategoryType.Utility,
        price: 5000.00,
        updateDate: '2021-01-01'
     },
     {
        accountNumber: '123-221-5486-223',
        transactionType: TransactionType.OUTCOME,
        categoryType: CategoryType.Utility,
        price: 500.00,
        updateDate: '2021-01-01'
     },
     {
        accountNumber: '123-221-5486-223',
        transactionType: TransactionType.OUTCOME,
        categoryType: CategoryType.SHOPING,
        price: 5987.00,
        updateDate: '2021-01-01'
     },
     {
        accountNumber: '238-453-8486-638',
        transactionType: TransactionType.INCOME,
        categoryType: CategoryType.SALARY,
        price: 80000.00,
        updateDate: '2021-01-01'
     },
     {
         accountNumber: '238-453-8486-638',
         transactionType: TransactionType.OUTCOME,
         categoryType: CategoryType.SHOPING,
         price: 2500.00,
         updateDate: '2021-01-01'
      },
      {
         accountNumber: '238-453-8486-638',
         transactionType: TransactionType.OUTCOME,
         categoryType: CategoryType.RENT,
         price: 12000.00,
         updateDate: '2021-01-01'
      },
      {
         accountNumber: '238-453-8486-638',
         transactionType: TransactionType.OUTCOME,
         categoryType: CategoryType.Utility,
         price: 3500.00,
         updateDate: '2021-01-01'
      },
      {
         accountNumber: '238-453-8486-638',
         transactionType: TransactionType.OUTCOME,
         categoryType: CategoryType.Utility,
         price: 800.00,
         updateDate: '2021-01-01'
      },
      {
        accountNumber: '564-864-4233-487',
        transactionType: TransactionType.INCOME,
        categoryType: CategoryType.SALARY,
        price: 1000000.00,
        updateDate: '2021-01-01'
     },
     {
        accountNumber: '124-894-0000-456',
        transactionType: TransactionType.OUTCOME,
        categoryType: CategoryType.SHOPING,
        price: 10000.00,
        updateDate: '2021-01-18'
     },
     {
        accountNumber: '124-894-0000-456',
        transactionType: TransactionType.OUTCOME,
        categoryType: CategoryType.Utility,
        price: 5000.00,
        updateDate: '2020-12-28'
     },
]
