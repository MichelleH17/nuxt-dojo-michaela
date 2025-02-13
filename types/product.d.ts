declare global {
  interface IProduct {
    id: number
    title: string
    price: number
  }
}

// tell TypeScript that this file is a module
export {}