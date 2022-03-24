import { createContext } from "react";

export interface userProfile{
    img:string;
    name:string;
}
export const Users=[
    {
        name: 'עמית',
        img:"https://occ-0-2621-778.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABS7y6M8hmMkDll4f1ikTU80bIXyygZncIeHT9CkoxSbVBcjYtBALq004ZpLiftf7BjKjosJHUC13sa3Ca3t5p5x2gp5P.png?r=fdd",
    },
    {
        name:'טליה',
        img:"https://occ-0-2621-778.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABeUqbfriC_pGWtwTa1KOx-ZSiQYa7ltLkOuduGxY_GRRc41ugYJNGYHe4LNcmshST4qkRSENvcs2xFomPc0rtX8wq2NG.png?r=b97",
    },
    {
        name:'שקד',
        img:"https://occ-0-2621-778.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTYctxxbe-UkKEdlMxXm4FVGD6DqTHkQ0TQ5CQJ9jbOMnG0CYxYcSICcTUQz8DrB7CpKUGpqJVMtEqksLlvSJx2ac3Ak.png?r=a41",
    },
    {
        name:'חבר קמצן',
        img:"https://occ-0-2621-778.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWu33TcylnaLZwSdtgKR6mr0O63afqQLxZbzHYQZLkCJ9bgMTtsf6tzs_ua2BuTpAVPbhxnroiEA-_bqJmKWiXblO9h-.png?r=f71",
    },
    {
        name:'ילדים',
        img:"https://occ-0-2621-778.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABSS_4vwwSzjsbm3-9Navn2waZhWeSWA7IuZzU2dpmm3nGSgSwk9BefsvqhSLkb0tPfBxQNAUqr3qV2prBtV879f1wZ3j8wxCAYx1GUWB11zOfrf-NU6k8sv1iLPzaXEDoX0kYjAST2A.png?r=8ff"
    }
]
export const UserContext = createContext<userProfile>(Users[0])