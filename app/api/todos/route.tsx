import { NextResponse } from "next/server";

//GET request handler

export async function GET(){
      const todos = [
    { id: 1, text: 'Learn Next.js', completed: false },
    { id: 2, text: 'Build an app', completed: false },
  ]
  return NextResponse.json(todos)

}

//BUG :export default function GET()
//export default 是整个模块的默认导出，而 Next.js App Router 根据函数名识别 HTTP 方法


//POST request handler
export async function POST(request:Request){
    const data=await request.json()
    //Process the data (in a real app, you would save to a database)
    console.log('Recieve data',data)
    
    return NextResponse.json({
        message:'Todo created successfully',
        todo:data,

    },
    {status:201}
)
}