import Image from 'next/image'
import experiences from '@/data/experience'
import Tooltip from '@/components/tooltips'

export default function Work() {
  return (
    <div className="flex flex-col gap-y-5 mt-10">
      <h2 className="text-[15.8px] font-semibold text-neutral-800 dark:text-neutral-300">
        Experiência
      </h2>
      {experiences.map((experience, index) => (
        <div key={index} className="flex w-full items-center justify-between">
            <div className="flex w-full flex-col">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[13.8px] leading-none text-neutral-700 dark:text-neutral-300">
                    {experience.role}
                  </span>
                  <Tooltip text={experience.company}>
                    <div className="rotate-12 cursor-pointer rounded-lg border border-neutral-100 p-1 transition duration-300 hover:rotate-0 dark:border-neutral-700/30">
                      <Image
                        src={experience.logo}
                        alt={`${experience.company} logo`}
                        width={18}
                        height={18}
                        className="select-none opacity-90 grayscale filter dark:invert"
                      />
                    </div>
                  </Tooltip>
                </div>
                <span className="mx-4 h-[1px] flex-grow border-t border-dashed border-neutral-800 opacity-50 dark:border-neutral-400"></span>
                <span className="text-[12.5px] leading-none text-neutral-600 dark:text-neutral-400">
                  {experience.period}
                </span>
              </div>
            </div>
        </div>
      ))}
    </div>
  )
}
