// app/api/issue/[id]/route.tsx
import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({ message: "This is GET for issue [id]" })
}

export async function POST() {
  return NextResponse.json({ message: "This is POST for issue [id]" })
}


// 你现在导出的是一个 React 组件（JSX），而 Next.js 期望 API Route 文件返回一个 HTTP 处理函数。
// TypeScript 的类型检查器在内部做了约束检查：它只允许你导出 GET/POST/... 之类的函数，导出 React 组件就报 () => Element is not assignable to type 'never'。


// export default function APIRoutePage(){
//     return(
//         <div>
//             This page is about API Route and http request.
//         </div>
//     )
// }