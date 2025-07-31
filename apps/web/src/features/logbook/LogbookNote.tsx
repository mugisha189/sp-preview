export default function LogbookNote() {
  return (
    <div className="border border-primary rounded-md p-4 flex-col flex items-start gap-2 mt-8">
      <span className="text-primary flex items-center gap-2 font-bold">
        <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
          <span className="text-white ">!</span>
        </div>
        Note
      </span>
      <p className="">
        If you need clarifications on how to use these documents, if a learner is facing any problems during the IAP, headteacher
        and supervisor are available to provide support. They are both responsible for preparing and following up the IAP
        implementation.
      </p>
    </div>
  );
}
