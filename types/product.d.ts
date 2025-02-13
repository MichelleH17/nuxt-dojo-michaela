declare global {
  interface IProduct {
    id: number
    title: string
    price: number
    description: string
    image: string
  }
}

// tell TypeScript that this file is a module
export {}