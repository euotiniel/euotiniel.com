import Image from 'next/image'
import experiences from '@/data/experience'

export default function Work() {
  return (
    <div className="flex flex-col gap-y-6 py-5">
      <h2 className="text-[15.8px] font-semibold leading-7 text-neutral-800 dark:text-neutral-300">
        Experiência
      </h2>

      {experiences.map((experience, index) => (
        <div key={index} className="flex w-full items-center justify-between">
          <div className="flex w-full items-center gap-2">
            {/* <div className="rounded-lg border border-neutral-100 p-2 dark:border-neutral-700/30">
              <Image
                src={experience.logo}
                alt={`${experience.company} logo`}
                width={10}
                height={10}
                className="h-auto w-full filter grayscale dark:invert select-none"
              />
            </div> */}
            <div className="flex w-full flex-col">
              {/* <span className="text-[13px] font-semibold leading-none text-neutral-600 dark:text-neutral-300">
                {experience.company}
              </span> */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2">
                  <span className="text-[13.8px] leading-none text-neutral-500 dark:text-neutral-400">
                    {experience.role} at
                    </span>
                    <div className="rounded-lg border p-1 rotate-12 hover:rotate-0 transition duration-300 border-neutral-100 dark:border-neutral-700/30 cursor-pointer">
                      <Image
                        src={experience.logo}
                        alt={`${experience.company} logo`}
                        width={18}
                        height={18}
                        className="select-none grayscale filter dark:invert opacity-80"
                      />
                    </div>
                  
                </div>
                <span className="mx-4 h-[1px] flex-grow border-t border-dashed border-neutral-800 opacity-50 dark:border-neutral-400"></span>

                <span className="text-[12.5px] leading-none text-neutral-950 opacity-50 dark:text-neutral-400">
                  {experience.period}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
