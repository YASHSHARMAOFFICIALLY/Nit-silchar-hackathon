import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from './generated/prisma/client'

// 1. Setup the connection pool using the POOLED url (6543)
const connectionString = process.env.DATABASE_URL
const pool = new Pool({ connectionString })

// 2. Initialize the adapter (The "Translator" Prisma 7 needs)
const adapter = new PrismaPg(pool)

// 3. Pass the adapter to the constructor
const prisma = new PrismaClient({ adapter })

export { prisma }