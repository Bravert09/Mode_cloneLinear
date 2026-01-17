import { NextResponse } from 'next/server'
import { db } from '@/db'
import { issues } from '@/db/schema'
import { eq } from 'drizzle-orm'
export const dynamic = 'force-dynamic';



// 从 Next.js 14.2 / 15 开始：params 是 异步的
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const {id} = await params
    const issue = await db.query.issues.findFirst({
      where: eq(issues.id, Number(id)),
    })
    if (!issue) {
      return NextResponse.json({ error: 'Issue not found' }, { status: 404 })
    }
    return NextResponse.json(issue)
  } catch (error) {
    console.error('Error fetching issue', error)
    return NextResponse.json(
      { error: 'Failed to fetch issue' },
      { status: 500 }
    )
  }
}
