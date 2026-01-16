import React from 'react'
import Link from 'next/link'
import { CheckCircle2, XCircle } from 'lucide-react'

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-12 dark:text-white">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 dark:text-white">
          Simple, Transparent Pricing
        </h1>
        <p> Choose the plan that&apos;s right for you and your team</p>
      </div>
      <div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <PricingCard
            title="Free"
            price="$0"
            description="Perfect for individuals and small teams getting started."
            features={[
              { name: 'Up to 3 team members', included: true },
              { name: 'Unlimited issues', included: true },
              { name: 'Basic issue tracking', included: true },
              { name: 'Email support', included: true },
              { name: 'API access', included: false },
              { name: 'Custom fields', included: false },
              { name: 'Advanced integrations', included: false },
            ]}
            buttonText="Sign Up Free"
            buttonLink="/signup"
            highlighted={false}
          />
          <PricingCard
            title="Pro"
            price="$10"
            description="Perfect for individuals and small teams getting started."
            features={[
              { name: 'Up to 3 team members', included: true },
              { name: 'Unlimited issues', included: true },
              { name: 'Basic issue tracking', included: true },
              { name: 'Email support', included: true },
              { name: 'API access', included: true },
              { name: 'Custom fields', included: true },
              { name: 'Advanced integrations', included: false },
            ]}
            buttonText="Coming soon"
            buttonLink="/signup"
            badge="Popular"
            highlighted={true}
          />
          <PricingCard
            title="Free"
            price="$0"
            description="Perfect for individuals and small teams getting started."
            features={[
              { name: 'Up to 3 team members', included: true },
              { name: 'Unlimited issues', included: true },
              { name: 'Basic issue tracking', included: true },
              { name: 'Email support', included: true },
              { name: 'API access', included: false },
              { name: 'Custom fields', included: false },
              { name: 'Advanced integrations', included: false },
            ]}
            buttonText="Sign Up Free"
            buttonLink="/signup"
            highlighted={false}
          />
        </div>
      </div>
      <div className="max-w-3xl mx-auto mt-16 text-center bg-gray-800 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-white">
          Need a custom solution?
        </h2>
        <p className="text-lg text-gray-400 dark:text-gray-300 mb-8">
          Contact our sales team to discuss your specific requirements.
        </p>
        <a
          href=""
          className="inline-flex h-10 items-center justify-center bg-blue-600 rounded-md px-8 py-2
        text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 "
        >
          {' '}
          Contact Sales
        </a>
      </div>
    </div>
  )
}
interface PricingFeature {
  name: string
  included: boolean
}
interface PricingCardProps {
  title: string
  price: string
  period?: string
  description: string
  features: PricingFeature[]
  buttonText: string
  buttonLink: string
  highlighted: boolean
  badge?: string
}
function PricingCard({
  title,
  price,
  period = 'per month',
  description,
  features,
  buttonText,
  buttonLink,
  highlighted = false,
  badge,
}: PricingCardProps) {
  return (
    <div
      className={`rounded-lg p-6 ${
        highlighted
          ? 'bg-blue-900 border-blue-700 shadow-md relative'
          : 'bg-gray-800 border border-gray-700 shadow-sm'
      }`}
    >
      {badge && (
        <div className="absolute -top-3 -right-3 bg-blue-600 text-white text-xs font-bold ps-3 py-1 rounded-full">
          {badge}
        </div>
      )}
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold mb-2 text-white">{price}</span>
        <span className="text-gray-400 dark:text-gray-300">{period}</span>
      </div>
      <p className="text-gray-400 dark:text-gray-300 mb-6">{description}</p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            {feature.included ? (
              <CheckCircle2 className="h-5 w-5 text-green-300 mr-2" />
            ) : (
              <XCircle className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
            )}
            <span
              className={
                feature.included
                  ? 'text-white'
                  : 'text-gray-500 dark>text-gray-600'
              }
            >
              {feature.name}
            </span>
          </li>
        ))}
      </ul>
      <Link
        href={buttonLink}
        className={`w-full inline-flex h-10 items-center justify-center rounded  ${
          highlighted
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-800 border border-gray-700 hover:bg-gray-700 text-white'
        }
        `}
      >
        {buttonText}
      </Link>
    </div>
  )
}

//TypeScript 中的接口（interface）定义，用来描述对象的结构和类型。
//PricingFeature 是一个子结构，用来描述卡片中的功能。
//PricingCardProps 是主结构，用来描述整个定价卡片组件需要的所有数据。
//? 表示可选字段，不传也不会报错。
