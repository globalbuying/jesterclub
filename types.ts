export type ViewState = 'HOME' | 'HISTORY' | 'COMMITTEE' | 'FIXTURES' | 'NEWS' | 'GALLERY';

export interface CommitteeMember {
  id: number;
  name: string;
  role: string;
  category: 'Officer' | 'Member' | 'Regional' | 'Representative' | 'Life Member';
  joined?: number;
  image?: string;
}

export interface Fixture {
  id: number;
  type: 'Match' | 'Social' | 'Tournament';
  sport: string;
  opponent?: string;
  date: string;
  time: string;
  venue: string;
  result?: string;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  content: string;
  author: string;
}

export interface Member {
  id: number;
  name: string;
  university: 'Oxford' | 'Cambridge' | 'Other';
  sport: string;
  year: number;
}