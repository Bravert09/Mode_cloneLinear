import React from 'react'

export default function FAQPage() {
  return (
    <div className='container mx-auto px-4 py-12 dark:text-white'>
        <h2 className='text-2xl font-bold mb-8 text-center  text-gray-900 dark:text-white'>Frequently Asked Questions</h2>
      
      <div className='space-y-6'>
        <FAQItems
          question="What is Linear Clone?"
          answer="Linear Clone is a project management tool inspired by Linear. It helps teams organize, track, and manage their projects and issues in a simple and efficient way."
        />
        <FAQItems
          question="What is Linear Clone?"
          answer="Linear Clone is a project management tool inspired by Linear. It helps teams organize, track, and manage their projects and issues in a simple and efficient way."
        />

        <FAQItems
          question="What is Linear Clone?"
          answer="Linear Clone is a project management tool inspired by Linear. It helps teams organize, track, and manage their projects and issues in a simple and efficient way."
        />

        <FAQItems
          question="What is Linear Clone?"
          answer="Linear Clone is a project management tool inspired by Linear. It helps teams organize, track, and manage their projects and issues in a simple and efficient way."
        />

        <FAQItems
          question="What is Linear Clone?"
          answer="Linear Clone is a project management tool inspired by Linear. It helps teams organize, track, and manage their projects and issues in a simple and efficient way."
        />
      </div>
    </div>
  )
}

function FAQItems({ question, answer }: { question: string; answer: string }) {
  return (
    <div>
      <h4 className='text-lg font-semibold mb-2 text-gray-900 dark:text-white'>{question}</h4>
      <p className='text-gray-400 dark:text-gray-300'>{answer}</p>
    </div>
  )
}
