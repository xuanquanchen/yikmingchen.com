export type SportType = 'athlete' | 'team' | 'coach'

interface BaseSportEntity {
  name: string
  sport: string
  link?: string
}

export interface Athlete extends BaseSportEntity {
  team: string
}

export interface Team extends BaseSportEntity {
}

export interface Coach extends BaseSportEntity {
  team: string
}

export type SportRecord = Athlete | Team | Coach

// Athletes
export const athlete: Athlete[] = [
  {
    name: 'Max Verstappen',
    sport: 'Formula 1',
    team: 'Red Bull Racing',
    link: 'https://www.verstappen.com',
  },
  {
    name: 'Bernado Silva',
    sport: 'Soccer',
    team: 'Manchester City',
    link: 'https://www.mancity.com/players/bernardo-silva',
  },
  {
    name: 'Lionel Messi',
    sport: 'Soccer',
    team: 'Inter Miami',
    link: 'https://www.intermiamicf.com/players/lionel-messi',
  },
  {
    name: 'Cristiano Ronaldo',
    sport: 'Soccer',
    team: 'Al Nassr',
    link: 'https://www.manutd.com/en/players-and-staff/detail/cristiano-ronaldo',
  },
  {
    name: 'Kevin De Bruyne',
    sport: 'Soccer',
    team: 'Napoli',
    link: 'https://www.mancity.com/mancitylegends/kevin-de-bruyne',
  },
  {
    name: 'Hasegawa Yui',
    sport: 'Soccer',
    team: 'Manchester City Women',
    link: 'https://www.mancity.com/players/yui-hasegawa',
  },
  {
    name: 'Rodri',
    sport: 'Soccer',
    team: 'Manchester City',
    link: 'https://www.mancity.com/players/rodrigo',
  },
  {
    name: 'Pedri',
    sport: 'Soccer',
    team: 'FC Barcelona',
    link: 'https://www.fcbarcelona.com/en/football/first-team/players/70486/pedro-gonzalez-lopez',
  },
]

// Teams
export const team: Team[] = [
  {
    name: 'Red Bull Racing',
    sport: 'Formula 1',
    link: 'https://www.redbullracing.com',
  },
  {
    name: 'Manchester City',
    sport: 'Soccer',
    link: 'https://www.mancity.com',
  },
  {
    name: 'Manchester United',
    sport: 'Soccer',
    link: 'https://www.manutd.com',
  },
  {
    name: 'FC Barcelona',
    sport: 'Soccer',
    link: 'https://www.fcbarcelona.com',
  },
]

// Coaches
export const coach: Coach[] = [
  {
    name: 'Pep Guardiola',
    sport: 'Soccer',
    team: 'Manchester City',
    link: 'https://www.mancity.com/players/pep-guardiola',
  },
]

export const sports: Record<SportType, SportRecord[]> = {
  team,
  athlete,
  coach,
}
