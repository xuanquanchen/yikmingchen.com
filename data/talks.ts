import type { Talk } from '~/types'

export const talks: Talk[] = [
  {
    title: 'Talk Title (Template)',
    description: 'Short description of the talk.',
    presentations: [
      {
        date: '2026-01-01',
        location: 'City, Country',
        conference: 'Conference Name',
        conferenceUrl: 'https://example.com',
        recording: 'https://example.com/recording',
        pdf: 'https://example.com/slides.pdf',
      },
    ],
  },
]

talks.forEach((talk) => {
  talk.presentations.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
})

talks.sort((a, b) => {
  return new Date(b.presentations[0].date).getTime() - new Date(a.presentations[0].date).getTime()
})
