import { db } from '@/db'
import { getSession } from './auth'
import { eq } from 'drizzle-orm'
import { cache } from 'react'
import { issues, users } from '@/db/schema'
import { mockDelay } from './utils'
import { cacheTag } from 'next/cache'

//current user
//await mockDelay(1000):模拟延迟1秒
export const getCurrentUser = cache(async () => {
  await mockDelay(3000)
  const session = await getSession()
  if (!session) return null
  // Skip database query during prerendering if we don't have a session
  // hack until we have PPR https://nextjs.org/docs/app/building-your-application/rendering/partial-prerendering
  try {
    const result = await db
      .select()
      .from(users)
      .where(eq(users.id, session.userId))
    console.log('get current user tested by cache function')
    return result[0] || null
  } catch (error) {
    console.error('Error getting user by ID:', error)
    return null
  }
})
//数据库返回的是「对象或 undefined」，
//'Really nothing???'但我人为地把它变成了「对象或 string」，从而破坏了类型的可推断性。

//Get user by email
export const getUserByEmail = async (email: string) => {
  try {
    const result = await db.select().from(users).where(eq(users.email, email))
    return result[0] || null
  } catch (error) {
    console.error('Error getting user by email:', error)
    return null
  }
}

export async function getIssues() {
  'use cache'
  cacheTag('issues')
  await mockDelay(3000)
  try {
    const result = await db.query.issues.findMany({
      with: {
        user: true,
      },
      orderBy: (issues, { desc }) => [desc(issues.createdAt)],
    })
    return result
  } catch (error) {
    console.error('Error fetching issues:', error)
    throw new Error('Failed to fetch issues')
  }
}

//在 Drizzle 中，with 用来声明“本次查询需要顺带加载哪些关联表的数据”
// 语义上等同于一次 LEFT JOIN。
export async function getIssue(id: number) {
  try {
    await mockDelay(700)
    const result = db.query.issues.findFirst({
      where: eq(issues.id, id),
      with: {
        user: true,
      },
    })
    return result
  } catch (error) {
    console.error(`Error fetching issue${id}:`, error)
    throw new Error('Failed to fetch issue')
  }
}
