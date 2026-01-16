import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  //check if the request is for the API routes
  if (request.nextUrl.pathname.startsWith('/api')) {
    //Get the Authorization header
    const authHeader = request.headers.get('Authorization')

    //if no authorization header is present, return a 401 unauthorized response
    if(!authHeader){
        return NextResponse.json(
            {success:false, message:'Authorization header is required'},
            {status:401}
        )
    }

    //You can add additional authorization logic here
    //for example, validate JWT tokens, check specific auth schemes, etc.
  }
  //continue with the request for non-API routes or if authorization is valid
  return NextResponse.next()
}

//configure the middleware to only run on API routes
export const config = {
  matcher: '/api/:path*',
}
//这个 middleware 只会在访问 /api 以及其所有子路径时运行。
// matcher 决定：
// 哪些 URL 会触发 middleware

//response：大概的逻辑结构
// Response {
//   body: ReadableStream | null
//   status: number
//   statusText: string
//   headers: Headers
//   ok: boolean
// }




//request：大概的逻辑结构
