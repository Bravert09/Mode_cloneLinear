import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
 
    cacheComponents: true,
  
}

export default nextConfig


// 在 Next.js 16 系列（16.1.3）里，experimental.dynamicIO 不再是推荐/有效的配置项。
// 官方明确在 Next.js 16 的升级指南 中指出：
// experimental.dynamicIO 在版本 16 中已经被移除或重命名。
// 如果你需要启用与动态数据获取相关的行为，应该使用新的 cacheComponents: true 配置，而不是设置 experimental.dynamicIO。