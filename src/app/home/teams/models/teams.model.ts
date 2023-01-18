{export interface Area {export interface Filter {
	areas: number[];
	permission: string;
}

export interface Area {
	id: number;
	name: string;
}

export interface Team {
	id: number;
	area: Area;
	name: string;
	shortName: string;
	tla: string;
	crestUrl: string;
	address: string;
	phone: string;
	website: string;
	email: string;
	founded: number;
	clubColors: string;
	venue: string;
	lastUpdated: string;
}

export interface RootObject {
	count: number;
	filters: Filter;
	teams: Team[];
}
	id: number;
	name: string;
}

export interface Area {
	id: number;
	name: string;
}

export interface ActiveCompetition {
	id: number;
	area: Area;
	name: string;
	code: string;
	plan: string;
	lastUpdated: string;
}

export interface RootObject {
	id: number;
	area: Area;
	activeCompetitions: ActiveCompetition[];
	name: string;
	shortName: string;
	tla: string;
	crestUrl: string;
	address: string;
	phone: string;
	website: string;
	email: string;
	founded: number;
	clubColors: string;
	venue: string;
	squad: any[];
	lastUpdated: string;
}
    id: 2061,
    area: { id: 2011, name: 'Argentina' },
    activeCompetitions: [
      {
        id: 2024,
        area: [Object],
        name: 'Liga Profesional',
        code: 'ASL',
        plan: 'TIER_TWO',
        lastUpdated: '2021-05-28T18:02:40Z'
      }
    ],
    name: 'CA Boca Juniors',
    shortName: 'Boca Juniors',
    tla: 'BOC',
    crestUrl: 'https://crests.football-data.org/2061.png',
    address: 'Brandsen 805, La Boca Buenos Aires, Buenos Aires 1161',
    phone: '+54 (11) 43094700',
    website: 'http://www.bocajuniors.com.ar',
    email: 'cas@bocajuniors.com.ar',
    founded: 1905,
    clubColors: 'Dark Blue / Yellow',
    venue: 'Estadio Alberto José Armando',
    squad: [],
    lastUpdated: '2022-04-06T13:12:25Z'
  }