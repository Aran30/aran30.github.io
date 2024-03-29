export const experiences: ExperienceYear[] = [
  {
    year: 2022,
    experiences: [
      { title: 'Computer Science Mentoring for RWTH freshmen', date: new Date('2022-10-03') },
    ],
  },
  {
    year: 2021,
    experiences: [
      { title: 'Published the paper titled "Supplemental Mobile Learner Support Through Moodle-Independent Assessment Bots"', date: new Date('2020-10-09') },
      { title: 'Work as research assistant at RWTH Aachen University', date: new Date('2021-11-21') },
      
    ],
  },
  {
    year: 2020,
    experiences: [
      { title: 'Bachelor\s Degree', date: new Date('2020-10-09') },
      { title: 'Work as research assistant at RWTH Aachen University', date: new Date('2020-10-15') },
      
    ],
  },
];

export interface ExperienceYear {
  year: number;
  experiences?: Experience[];
}
export interface Experience {
  title: string;
  subtitle?: string;
  date?: Date;
}
