export default function InterviewGuide() {
  const radioGroup = (name: string, checkedIdx: number = -1) => (
    <div className="flex gap-4">
      {[1, 2, 3, 4, 5].map((val, idx) => (
        <label key={val} className="flex items-center gap-1">
          <input type="radio" name={name} defaultChecked={checkedIdx === idx} />
          <span className="text-xs">{val}</span>
        </label>
      ))}
    </div>
  );

  return (
    <div className="w-full py-8 space-y-8">
      <div>
        <h2 className="text-lg font-bold mb-2 text-primary">VIII. Interview Guiding Questions</h2>
        <p className="mb-2">
          At the end of the Industrial Attachment Program, you will make a short presentation along the questions mentioned here
          below. You have to hand in the supporting document (the liaison book) to your teacher at least one day before the
          interview
        </p>
        <p className="mb-2">
          The interview takes place at the TVET Centre. The jury is composed of at least 2 teachers and the company supervisor.
        </p>
      </div>
      {/* Criterion 1: Technical competencies */}
      <div>
        <table className="w-full mb-6">
          <thead>
            <tr className="text-muted-foreground text-sm border-b">
              <th className="text-left font-normal py-2">Number</th>
              <th className="text-left font-normal py-2">Criterion 1: Technical competencies</th>
              <th className="text-left font-normal py-2">Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2">1</td>
              <td className="py-2">Can you summarize the main activities of your Industrial Attachment Program</td>
              <td className="py-2">{radioGroup('c1q1')}</td>
            </tr>
            <tr>
              <td className="py-2">2</td>
              <td className="py-2">What equipment did you use during this Industrial Attachment Program?</td>
              <td className="py-2">{radioGroup('c1q2', 2)}</td>
            </tr>
            <tr>
              <td className="py-2">3</td>
              <td className="py-2">What activities planned in your Industrial Attachment Program you did not do? Why?</td>
              <td className="py-2">{radioGroup('c1q3', 0)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Criterion 2: Attitudes */}
      <div>
        <table className="w-full mb-6">
          <thead>
            <tr className="text-muted-foreground text-sm border-b">
              <th className="text-left font-normal py-2">Number</th>
              <th className="text-left font-normal py-2">Criterion 2: Attitudes</th>
              <th className="text-left font-normal py-2">Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2">1</td>
              <td className="py-2">
                What difficulties/challenges did you face during your Industrial Attachment Program?
                <br />
                How did you resolve them?
              </td>
              <td className="py-2">{radioGroup('c2q1')}</td>
            </tr>
            <tr>
              <td className="py-2">2</td>
              <td className="py-2">What attitudes do you think you improved during the Industrial Attachment Program?</td>
              <td className="py-2">{radioGroup('c2q2', 2)}</td>
            </tr>
            <tr>
              <td className="py-2">3</td>
              <td className="py-2">
                What activities did you do well? What did you not do well? What do you still need to improve?
              </td>
              <td className="py-2">{radioGroup('c2q3', 0)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Criterion 3: Quality of work */}
      <div>
        <table className="w-full mb-6">
          <thead>
            <tr className="text-muted-foreground text-sm border-b">
              <th className="text-left font-normal py-2">Number</th>
              <th className="text-left font-normal py-2">Criterion 3: Quality of work</th>
              <th className="text-left font-normal py-2">Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2">1</td>
              <td className="py-2">Among the tasks you realized, describe in detail one of them and how you completed it.</td>
              <td className="py-2">{radioGroup('c3q1')}</td>
            </tr>
            <tr>
              <td className="py-2">2</td>
              <td className="py-2">What was your clients/colleagues/supervisor feedback regarding your work?</td>
              <td className="py-2">{radioGroup('c3q2', 2)}</td>
            </tr>
            <tr>
              <td className="py-2">3</td>
              <td className="py-2">
                During your Industrial Attachment Program, did you complete all the tasks you were given? If not, why?
              </td>
              <td className="py-2">{radioGroup('c3q3', 0)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Criterion 4: Optional Questions */}
      <div>
        <table className="w-full mb-6">
          <thead>
            <tr className="text-muted-foreground text-sm border-b">
              <th className="text-left font-normal py-2">Number</th>
              <th className="text-left font-normal py-2">Criterion 4: Optional Questions</th>
              <th className="text-left font-normal py-2">Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2">1</td>
              <td className="py-2">What new activities did you do?</td>
              <td className="py-2">{radioGroup('c4q1')}</td>
            </tr>
            <tr>
              <td className="py-2">2</td>
              <td className="py-2">What did you find interesting during your IAP? And what is your career plan?</td>
              <td className="py-2">{radioGroup('c4q2', 2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Overall marks section */}
      <div className="mt-10">
        <h3 className="text-primary font-semibold mb-2">Overall marks for the Industrial attachment program module</h3>
        <table className="w-full border mt-2">
          <thead>
            <tr className="bg-muted text-sm">
              <th className="py-2 px-4 text-left font-normal">IAP Module</th>
              <th className="py-2 px-4 text-left font-normal">
                Industrial attachment theory
                <br />
                <span className="font-normal">20% of overall marks for te IAP module</span>
              </th>
              <th className="py-2 px-4 text-left font-normal">
                Performance at workplace
                <br />
                <span className="font-normal">50% of overall marks for the IAP module</span>
              </th>
              <th className="py-2 px-4 text-left font-normal">
                Industrial attachment Report presentation
                <br />
                <span className="font-normal">30% of overall marks for the IAP module</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-4 px-4 font-medium">&nbsp;</td>
              <td className="py-4 px-4">.................... Out of 20</td>
              <td className="py-4 px-4">.................... Out of 50</td>
              <td className="py-4 px-4">.................... Out of 30</td>
            </tr>
            <tr>
              <td className="py-4 px-4 font-medium">Total Score</td>
              <td className="py-4 px-4" colSpan={3}>
                .......................................................
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
