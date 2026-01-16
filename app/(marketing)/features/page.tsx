import React from 'react'

export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Features</h1>
        <p className="text-xl text-gray-400">
          Discover how Linear Clone can help you manage your projects more
          efficiently.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <FeatureCard
          title="Issue Tracking"
          description="Create, assign, and track issues with ease. Set priorities, due dates, and statuses to keep your team on track."
        />
        <FeatureCard
          title="Intuitive UI"
          description="A clean, modern interface that makes project management a breeze. No clutter, just what you need to get work done."
        />
        <FeatureCard
          title="Issue Tracking"
          description="Create, assign, and track issues with ease. Set priorities, due dates, and statuses to keep your team on track."
        />
        <FeatureCard
          title="Issue Tracking"
          description="Create, assign, and track issues with ease. Set priorities, due dates, and statuses to keep your team on track."
        />
        <FeatureCard
          title="Issue Tracking"
          description="Create, assign, and track issues with ease. Set priorities, due dates, and statuses to keep your team on track."
        />
        <FeatureCard
          title="Issue Tracking"
          description="Create, assign, and track issues with ease. Set priorities, due dates, and statuses to keep your team on track."
        />
      </div>
    </div>
  )
}

function FeatureCard({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div>
      <div className="bg-gray-50 drak:bg-gray-800 p-6 rounded-lg shadow-sm border dark:border-gray-700">
        <h3 className="text-xl font-semibold mb-2 text-gray-600 dark:text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  )
}
