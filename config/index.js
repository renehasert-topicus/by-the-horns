const dev = process.env.NODE_ENV !== 'production'
export const environment = dev ? 'http://localhost:3000' : ''