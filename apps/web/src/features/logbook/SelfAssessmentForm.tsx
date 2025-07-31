import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';

const questions = [
  {
    type: 'radio',
    label: '1. Were your expectations met during the Industrial Attachment Program?',
    name: 'q1',
    options: ['All', 'Some', 'Very Few', 'None at all'],
  },
  {
    type: 'checkbox',
    label: '2. How did IAP help increase your knowledge, skills and attitudes as a learner? Please tick one or more statements.',
    name: 'q2',
    options: [
      'It sharpened my skills through consistent hands-on activities.',
      'It oriented me on the transition from school to work setting.',
      'The working environment inspired me to practice work ethics in my daily tasks.',
      'Others descriptions',
    ],
  },
  {
    type: 'checkbox',
    label: '3. Did you encounter any of the following conditions at your workplace? Please tick the applicable items.',
    name: 'q3',
    options: [
      'Lack of safety measures.',
      'Poor communication and social relationship with work mates.',
      'Inadequate tools and equipment supply.',
      'Lack of supervision and support from others.',
      'Unclear job description;',
      'Tasks given were not related to my area of training.',
      'Lack of opportunities for professional growth.',
      'Failure to see dignity and value of work.',
      'Lack of work ethics (i.e. gossip, indiscretion, abuse of benefits, privileges, etc.)',
      'Lack of sense of morality among work mates',
      'Others descriptions',
    ],
  },
  {
    type: 'radio',
    label: '4. Did your teacher or headteacher monitor and address your Industrial Attachment Program-related concerns?',
    name: 'q4',
    options: ['Always', 'Very rarely', 'Sometimes', 'Never'],
  },
  {
    type: 'checkbox',
    label: '5. What are the situations you liked the most during your Industrial Attachment Program? Please tick one or more',
    name: 'q5',
    options: [
      'Applying my theoretical knowledge in practice',
      'Conducting similar tasks like a regular worker',
      'Forming camaraderie with my workmates and gaining learning experiences from them',
      'Others (Please name others)',
    ],
  },
  {
    type: 'radio',
    label: '6. In general, rate your IAP experience and support your rating with a brief explanation.',
    name: 'q6',
    options: ['5 Excellent', '4 Very Good', '3 Good', '2 Sufficient', '1 Fair', '0 Poor'],
  },
  {
    type: 'textarea',
    label: "Company supervisor's comments ( Observations and ideas on how to improve the TVET IAP )",
    name: 'comments',
    placeholder: 'Minimum  word of 123',
  },
];

export default function SelfAssessmentForm() {
  return (
    <div className="w-full py-8 space-y-8">
      <div>
        <h2 className="text-lg font-bold mb-2">VII. Learner self-assessment sheet</h2>
        <p className="text-muted-foreground mb-4">
          Please answer the following questions honestly. This questionnaire is not part of the IAP module assessment. It will
          help improving the TVET IAP and training system
        </p>
      </div>
      <div className="flex flex-col gap-8 px-11">
        {questions.map((q, idx) => (
          <div key={q.name} className="gap-y-4 flex flex-col">
            <p className="font-medium mb-2">{q.label}</p>
            {q.type === 'radio' && (
              <div className="space-y-2">
                {q.options?.map((opt, i) => (
                  <label key={opt} className="flex items-center gap-2">
                    <input type="radio" name={q.name} /> {opt}
                  </label>
                ))}
              </div>
            )}
            {q.type === 'checkbox' && (
              <div className="space-y-2">
                {q.options?.map((opt, i) => (
                  <label key={opt} className="flex items-center gap-2">
                    <Checkbox /> {opt}
                  </label>
                ))}
              </div>
            )}
            {q.type === 'textarea' && <Textarea className="min-h-[8rem]" placeholder={q.placeholder} />}
          </div>
        ))}
      </div>
    </div>
  );
}
