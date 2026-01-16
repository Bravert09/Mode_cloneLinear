// export const runtime='edge' //set edge runtime

export default function EdgePage() {
  return (
    <div>
      <h1>This page is rendered at the Edge!</h1>
      <p>Generated at:{new Date().toISOString()}</p>
    </div>
  )
}


// 你在某个路由或 Server Component 中使用了 export const runtime = 'edge'
// 但是你的 next.config.js 开启了 experimental.dynamicIO 功能，这两个设置目前 不兼容。