import { CommitteeMember, Fixture, Member, NewsItem } from './types';

export const COMMITTEE: CommitteeMember[] = [
  // Officers
  { id: 1, name: "Paul Barrow", role: "Chairman", category: 'Officer' },
  { id: 2, name: "Chris Holden", role: "Treasurer", category: 'Officer' },
  { id: 3, name: "Tim Johnston", role: "Secretary", category: 'Officer' },
  { id: 4, name: "Garth Van Rensburg", role: "Match Secretary", category: 'Officer' },
  
  // Members
  { id: 5, name: "Marios Conadaris", role: "Member", category: 'Member' },
  { id: 6, name: "Pat Kekewich", role: "Member", category: 'Member' },
  { id: 7, name: "Shaun Wormington", role: "Member", category: 'Member' },
  { id: 15, name: "Benj Hunt", role: "Member", category: 'Member' },
  
  // Regional
  { id: 8, name: "Kathy Jackson", role: "Pietermaritzburg", category: 'Regional' },
  { id: 9, name: "Paul Atkinson", role: "Western Cape", category: 'Regional' },
  { id: 10, name: "Rein Hofmeyr", role: "Southern Cape", category: 'Regional' },
  { id: 11, name: "Bruce Brooker", role: "Eastern Cape", category: 'Regional' },
  { id: 12, name: "Steve Clark", role: "Durban", category: 'Regional' },

  // Representatives
  { id: 13, name: "Michael Melvill", role: "South African Representative", category: 'Representative' },

  // Life Members
  { id: 14, name: "David Barrow", role: "Life Member", category: 'Life Member' },
  { id: 16, name: "Simon Malone", role: "Life Member", category: 'Life Member' },
];

export const FIXTURES: Fixture[] = [
  { 
    id: 1, 
    type: 'Match',
    sport: "Real Tennis", 
    opponent: "Marylebone Cricket Club", 
    date: "2024-05-15", 
    time: "14:00",
    venue: "Lord's", 
    result: "Won 3-1" 
  },
  { 
    id: 2, 
    type: 'Tournament', 
    sport: "Eton Fives", 
    opponent: "Old Etonians", 
    date: "2024-06-02", 
    time: "10:00", 
    venue: "Eton College" 
  },
  { 
    id: 3, 
    type: 'Match', 
    sport: "Squash", 
    opponent: "RAC Club", 
    date: "2024-06-10", 
    time: "18:30", 
    venue: "Pall Mall" 
  },
  { 
    id: 4, 
    type: 'Match', 
    sport: "Cricket", 
    opponent: "Vincent's Club", 
    date: "2024-07-04", 
    time: "11:00", 
    venue: "University Parks" 
  },
  { 
    id: 5, 
    type: 'Social', 
    sport: "Annual Dinner", 
    date: "2024-09-12", 
    time: "19:30", 
    venue: "The Savoy", 
    result: "Ticketed" 
  },
];

export const MEMBERS: Member[] = [
  { id: 1, name: "Boris Johnson", university: "Oxford", sport: "Rugby", year: 1985 },
  { id: 2, name: "Stephen Fry", university: "Cambridge", sport: "Cricket", year: 1980 },
  { id: 3, name: "Hugh Laurie", university: "Cambridge", sport: "Rowing", year: 1981 },
  { id: 4, name: "Theresa May", university: "Oxford", sport: "Hockey", year: 1977 },
  { id: 5, name: "Rory Stewart", university: "Oxford", sport: "Fencing", year: 1993 },
];

export const INITIAL_NEWS: NewsItem[] = [
  {
    id: 4,
    title: "A New Year's Message to the South African Jesters",
    date: "2026-01-20",
    author: "Paul Barrow, Chair SA Jesters",
    content: `
      <p class="mb-4">Dear Jesters</p>
      <p class="mb-4">We trust that you have settled back into the new year and wish you all the best for 2026.</p>
      <p class="mb-4">Last year was very busy for the SA Jesters, particularly with both incoming and outgoing international tours. This year we settle back into a more normal pattern of local fixtures.</p>
      <p class="mb-4">We would like to say a big thank you to all the regions that so generously went out of their way to accommodate and entertain the visiting UK Jesters. The tour was a great success.</p>
      <p class="mb-4">We are delighted to welcome both Zimbabwe and White River back into the Jesters fold after a long absence. We look forward to rekindling the special relationships that exist with these two regions and thank Jeff Fenwick and Tom Mullins for the roles that they have played.</p>
      <p class="mb-4">Squash is also on the up in the Southern Cape with JP Britz at the helm and we look forward to establishing a community there. Watch out for future SA Champions coming out of this area!!</p>
      <p class="mb-4">Over the Christmas period we sadly had to report on the passing away of two legendary Jesters in JP van Niekerk and David Quail. Both of these men made invaluable contributions to squash in this country and we convey our sincere condolences to their families.</p>
      <p class="mb-4">It is always great to see Jesters kit worn around the country and it is now made a whole lot easier for those that are the odd ones out. Cheyna Wood has a great range of mens and ladies clothing available and it is as easy as ordering online for delivery to your home. Please visit her website <a href="https://www.cheynadot.co.za" class="text-cambridge underline font-bold" target="_blank">www.cheynadot.co.za</a> and click on club merchandise followed by Jesters Club.</p>
      <p class="mb-4">An exciting new initiative is the creation of a new Squash Africa Jesters website. Mike Melvill has been leading the charge on this and we hope to soon be able to launch it to the Jesters community.</p>
      <p class="mb-4">Although still in its infancy we are moving towards establishing an annual national Jesters weekend. Mike Short has been instrumental in getting this going. On the back of weekends held in Maritzburg and Joburg over the last two years we now move across to Durban this year and look forward to steadily growing the number of regions participating in this weekend.</p>
      <p class="mb-4">A reminder of the Jesters Centenary in 2028. It is still some way away but it will no doubt be a big occasion and is worth bearing in mind for your future planning. The event will take place in the UK.</p>
    `
  },
  {
    id: 1,
    title: "Annual Report 2024 - 2025",
    date: "2025-10-14",
    author: "R. A. Dolman, President",
    content: `
      <h3 class="text-xl font-bold text-oxford mt-4 mb-2">NOTICE</h3>
      <p class="mb-4">The ANNUAL GENERAL MEETING of the Club will be held at The Queen’s Club, Palliser Road, West Kensington, London W14 9EQ, at 6.15 p.m. on Tuesday 14th October 2025.</p>

      <h3 class="text-xl font-bold text-oxford mt-6 mb-2">PRESIDENT'S REPORT</h3>
      <p class="mb-4 italic">"Where echoes ring in courts of stone and wood, the Jesters play with joy their noble game, not for the fame, though matchless skill makes good, but for the love, the laughter, not the name. In Rackets' clash and Squash's quick delight, in Fives where walls become both friend and foe, in Real Tennis, shadows dance with light, and Padel's courts with youthful fervour grow. Neither silver spoils nor roaring crowds they chase, but honour held in well-worn gloves and hands, in humble triumphs, time cannot erase. They teach the young the art that skill commands. So may their ethos, amateur and true, shine on in hearts of every shade and hue." - Anon</p>
      
      <p class="mb-4">I expect you have realised from the above that the writer, when wracking his brain for some suitable bon mots to kick off this report and in a fit of idleness, resorted to that well known charlatan Chat GPT for inspiration. A Jesters sonnet produced in under 5 seconds may not be Shakespeare but hopefully it embodies our spirit. Up to you now to decide whether or not the rest of this is ChatGPT generated!</p>

      <p class="mb-4">There are attached the splendid reports both from the games representatives of our various sports and from the Overseas branches; these all speak for themselves and they clearly demonstrate what good heart we are in as a club. Overseas tours in all directions have been taking place, new matches and trips proliferate and our membership is quietly expanding. It is particularly encouraging in the UK that our under-35 group, ably led by Laura Neill, Andrew Lindsay, Owen Riddall and Minty Oldham, is flourishing.</p>

      <p class="mb-4">Our season began with two tours, one from the South Africans to the UK and one from the UK to Canada. The South Africans, led by Trevor Fryer, started their tour at our traditional Cambridge weekend with 70 of us attending the Saturday night dinner in Peterhouse. They were great tourists playing everything whilst travelling the length and breadth of our land including Yorkshire and Edinburgh. There was just time for Alasdair Campbell to welcome them to Northfields before he led our team to Canada where they were entertained and spoilt brilliantly from West to East.</p>

      <p class="mb-4">The annual Strawson-Vaughan evening with its matches and dinner at Queen's followed in October, with a full house of all the sports, shapes, sizes and ages being present. Another highlight of our season was Peter Chalk's annual Jesters Squash tournament (the replacement of the old Amateur championships) at the RAC in January, expertly run by Tim Garner; a wonderful advert for Men’s and Ladies squash played in true Jesters spirit. Our annual dinner at our traditional home the RAC in March was a delightful evening at which we were lucky enough to have as our guest speaker Jim Zug, the doyen of the US Jesters, who entertained us royally with memories of the history of the US Branch. The Jester of the Year trophy was awarded that night to Henry Prideaux in recognition of his selfless contribution over so many years of organising the Squash fixture list.</p>
      
      <p class="mb-4">This year we said goodbye as committee members to Henry Prideaux now replaced as squash fixtures secretary by Owen Riddall, to Rich General now replaced as Army Rep by Phil Marsh, to Tony Rackham replaced as Navy Rep by Chris Hobley and most sadly to the late Bruce Burnett who died unexpectedly earlier this year (having served on the committee for many years in various roles). Our grateful thanks go to all of them for their hard work and contributions over the years, whilst our thoughts are with Bruce's widow Chrissie. We also welcome on to the committee Roy Martins to help Tim Edwards with padel.</p>
      
      <p class="mb-4">As you may recall, we are looking forward to celebrating our Centenary in 2028 and intend to start these celebrations with a weekend in Cambridge from Friday 8th to Sunday 10th September, with various activities (including some golf and an event at Northfields) in the following week culminating in a special dinner at the RAC on Friday 15 September. Distant as this may seem, time flies so do please make a note of these dates in your diaries.</p>
      
      <p class="mb-4">Our founder wrote a history of our first 50 years in 1978 and the writer has been tasked to bring this up to date. To this end, he would be most grateful to receive from any of you any reminiscences or stories about the club, its tours, dinners, matches and events and those involved, together with any photos, as these would be far more interesting than a mere factual record. All contributions in any form will be gratefully received! So to conclude, another happy and successful year for the club.</p>

      <h3 class="text-xl font-bold text-oxford mt-6 mb-2">UK Squash</h3>
      <p class="mb-4"><em>Richard Winter reports:</em> I am pleased to report that squash at the Jesters Club is in rude health. The Club has a healthy fixture list of 86 matches for which we owe Henry Prideaux much gratitude for his tireless work arranging the fixtures over the last 10 years. This year Henry has handed the baton to Owen Riddall. Owen is already enthusiastically combining Henry's organisational skills with our new youth policy and we are starting to see many more under-35 age group matches in London with healthy participation from some of our new lady squash members, to which we owe many thanks to Laura Neill and Andrew Lindsay.</p>
      <p class="mb-4">We received an incoming tour from our South African friends captained by Trevor Fryer. Trevor’s team included SA squash legend Margie Hunt-Kemp, Mike Short, Michael Collins, Dalmain Strydom and Tim Johnson and partners. We started off by breaking them in at our London clubs before they set off around the UK, up to Scotland and finishing off at the Fitzwilliam Club in Dublin.</p>

      <h3 class="text-xl font-bold text-oxford mt-6 mb-2">Eton Fives</h3>
      <p class="mb-4"><em>Will Skjott reports:</em> It is a pleasure to be able to report on Jesters Eton Fives following the 2024/2025 season. We had another excellent year and are looking forward to increasing our fixture list in the forthcoming season, amongst them a fixture at the new courts at Holyport. The Eton Fives Jesters have increased their ranks with seven new candidates and I hope they will all be warmly welcomed when you see them on the Court. The EFA centenary celebrations were a great success and culminated in World Fives Day which saw people playing on courts around the world.</p>
      <p class="mb-4">This year the Fives community lost two longstanding Eton Fives Jesters, men epitomising the spirit of amateur sport and the Jesters. John Caudle (elected a Jester in 1983) and Martin Lindsay (1985). We thank Richard Tyler for his assistance in finding new candidates and Joseph Seelig for his words above.</p>

      <h3 class="text-xl font-bold text-oxford mt-6 mb-2">Rugby Fives</h3>
      <p class="mb-4"><em>Ben Hale reports:</em> The Jesters Rugby Fives season started in customary fashion with the keenly contested Strawson-Vaughan fixture against the Rugby Fives Association that surprisingly resulted in a draw... Our following match saw the annual visit to Tonbridge now reinforced with a familiar face, former Jesters Rugby Fives game secretary James Tilston. We took our annual tour north of the border to Edinburgh in January with sixty players representing the Jesters over the weekend in matches against our host schools Edinburgh Academy, Fettes College, Loretto School, Merchiston Castle School and Strathallan School.</p>

      <h3 class="text-xl font-bold text-oxford mt-6 mb-2">Rackets</h3>
      <p class="mb-4"><em>Alastair Gourlay reports:</em> The 2024/25 season started strong with the inaugural Strawson match, where the Jesters take on the T&RA. Three matches were scheduled including the very first all-Ladies match which included Eve Shenkman, Mimi Davis, Tara Lumley and Georgie Willis. The main highlight of the season was the Jesters sponsorship of the Amateur Championships in both men and women. In the Doubles Championships, World Doubles Champions Richard Owen and Tom Billings bested Nick James and Alex Titchener-Barret.</p>

      <h3 class="text-xl font-bold text-oxford mt-6 mb-2">Real Tennis</h3>
      <p class="mb-4"><em>Adam Dolman reports:</em> It has been another active season for The Jesters Club’s Real Tennis contingent with matches held at most courts countrywide. After an extremely fun Strawson-Vaughan Memorial evening at Queen’s in October, we kicked off the season in style down at the Hyde. October also hosted the inaugural Jesters MCC fixture. Brian Sharp reported a very uncharacteristic 5-0 win for the Jesters. Simon Mansfield reported another extremely successful Jesters fixture at Hardwick on Sunday 27th April 2025. And I think we may have another new record for a Jesters RT fixture. Simon Talbot-Williams tells me he had 40 applicants for the Jesters Old Etonians fixture at Queen’s in May.</p>

      <h3 class="text-xl font-bold text-oxford mt-6 mb-2">Padel</h3>
      <p class="mb-4"><em>Tim Edwards reports:</em> Slowly but surely the Jesters padel calendar is evolving into a rota of very enjoyable and sociable matches. The visiting South African Jesters were entertained at PadelHub Crawley and huge thanks are due to Harvey Rawlings and Wayne Jones for organizing that. Last year in this report I mentioned that there were 350 UK padel courts and amazingly the figure now is up to 1000 courts. The growth this year has been extraordinary. So many Jesters from all the Jesters sports are now playing padel, all the London matches are hugely over-subscribed.</p>

      <h3 class="text-xl font-bold text-oxford mt-6 mb-2">United States</h3>
      <p class="mb-4"><em>Robert Burton reports:</em> The US Jesters had an active year, sending a court tennis side to Australia, launching a mini-tour initiative, and continuing our broad support of intercollegiate club squash. The 71st annual weekend in Washington and Baltimore was an unparalleled success! With 93 Jesters attending events spread across four days. The US Jesters look forward to hosting a South African tour in the fall of 2025, culminating at our Annual Weekend in Detroit in late September.</p>

      <h3 class="text-xl font-bold text-oxford mt-6 mb-2">Canada</h3>
      <p class="mb-4"><em>Michael Letourneau reports:</em> British Columbia: The BC Jesters continued to support the Jesters PNW Junior Tournament. Prairies: The focus of the 2024-2025 Prairie Jesters was to support Junior & University squash. Manitoba: We are pleased to share exciting news: the squash courts at the University of Manitoba are undergoing a much-needed renovation. Ontario: 2024 was a good year for squash in Ontario. Quebec: This past season McGill University hosted the Canadian University Squash tournament. Atlantic Provinces: The two Youth Jester-sponsored squash development camps held this year were a resounding success.</p>

      <h3 class="text-xl font-bold text-oxford mt-6 mb-2">South Africa</h3>
      <p class="mb-4"><em>Paul Barrow reports:</em> The South African Jesters have enjoyed another busy and successful year, filled with camaraderie, competition, and international connection. As always, the highlight of our calendar was the much-anticipated overseas tour. In 2024, our team, captained by Trevor Fryer, travelled to the UK where they were, as ever, royally treated by our generous hosts. Looking ahead, 2025 promises to be equally exciting. In September, we will send a touring side to the USA to explore the Midwest. Then, in October, we will proudly host Scott Thomson and his team from the UK.</p>

      <h3 class="text-xl font-bold text-oxford mt-6 mb-2">Australia</h3>
      <p class="mb-4"><em>Jonathan Buckley reports:</em> In 2024/25 the Australian Jesters enjoyed matches in Ballarat, Melbourne and Sydney. Plans are afoot for the inaugural Australian Jesters weekend of games in 2026. The highlight of the Australian Jesters year was the third ever tennis tour of the USA Jesters to Oz. Led by Jim Zug and US Jesters President Bob Burton, bold and strong was the US team’s motto, and they didn’t disappoint; on and off the court.</p>
    
      <h3 class="text-xl font-bold text-oxford mt-6 mb-2">Obituaries</h3>
      <p class="mb-4 text-sm">The President has been informed of the sad loss of the following UK and Overseas Jesters: Ian Adams, Clive Barnes, James Barrington, George Bird, Air Vice Marshal B Brownlow, Bruce Burnett, John Caudle, Mark Cornwall-Jones, Capt. Ian C de Sales La Terriere, Michael Duncan, John W Gardner, Joe Hackett, Geoffrey Hazzan, Jeremy Hogben, Michael Lewer, Martin Lindsay, Philip MacNeice, John Miles, Nick R H Parker, Colin Sharman, Dr. Graham Shepard, Tim Summers, Charles Swallow, Peter Trimingham, Joe Ullman, James F C Bostwick, John Campodonico, Charles T Crawford, Patrice McConnell Cromwell, Alan Fox, William K Jones, Purdy Jordan, Jeffrey Laikind, Edward McWilliams, Jukka Perkiomaki, Robert Zerbst, Harry Bell-Irving, Robert T Hall, Dr. Don Ball, Chris Barry, Neville Hart, Terry Owen, Bob Selman, Jim Stephen.</p>

      <h3 class="text-xl font-bold text-oxford mt-6 mb-2">Financial Summary</h3>
      <p class="mb-4"><strong>Income and Expenditure for the Year Ended 31 March 2025</strong><br/>
      Total Income: £42,823<br/>
      Total Expenditure: £42,747<br/>
      Surplus for the Year: £76<br/>
      <strong>Balance Sheet</strong><br/>
      Total Assets: £225,331<br/>
      Capital Fund: £222,299</p>
    `
  },
  {
    id: 3,
    title: "South Africa Jesters Club – 2025 Annual Report",
    date: "2025-10-15",
    author: "Paul Barrow, Chair SA Jesters",
    content: `
      <p class="mb-4">The South African Jesters have enjoyed another busy and successful year, filled with camaraderie, competition, and international connection.</p>
      <p class="mb-4">As always, the highlight of our calendar was the much-anticipated overseas tour. In 2024, our team, captained by Trevor Fryer, travelled to the United Kingdom where they were, as ever, royally treated by our generous hosts. We remain deeply appreciative of the wonderful hospitality extended to our touring teams, which continues to strengthen the bonds of our global Jesters community.</p>
      <p class="mb-4">Looking ahead, 2025 promises to be equally exciting. In September, we will send a touring side to the United States to explore the Midwest. A special word of thanks to Jim Zug and his team for their tireless efforts in organising what promises to be a memorable trip. Then, in October, we will proudly host Scott and his team from the UK. Following a brief safari, the touring party will travel through Johannesburg, Pietermaritzburg, Durban, St Francis Bay, Knysna, and Cape Town. We are eagerly anticipating their visit and the opportunity to return the warm hospitality we’ve so often received abroad.</p>
      <p class="mb-4">On the local front, we have continued our efforts to foster inter-regional engagement. A successful Johannesburg tour to Pietermaritzburg was held, with a weekend of squash, padel, and golf thoroughly enjoyed by all participants. A reciprocal tour to Johannesburg is planned for August, coinciding with the Springboks’ rugby test against Australia — an added attraction that will no doubt contribute to the festive atmosphere.</p>
      <p class="mb-4">The St Francis Bay region, under the spirited leadership of Bruce Brooker, has been particularly active. In addition to hosting the now-legendary Invitational Doubles Tournament, the region also facilitated a fantastic weekend of doubles coaching for some of the country’s top junior players – a wonderful initiative for the development of the game.</p>
      <p class="mb-4">In Cape Town, it’s been energising to see a committed and enthusiastic committee organising a strong calendar of events. The region is poised for a busy year and we look forward to continued growth and participation there.</p>
      <p class="mb-4">Pietermaritzburg remains a thriving hub of Jester activity thanks to the tireless efforts of Cathy Jackson, Mike Short, and Trevor Fryer, whose leadership and dedication are commendable.</p>
      <p class="mb-4">In Johannesburg, we are fortunate to enjoy a very active and vibrant Jesters community. A full fixture list — including matches against clubs, schools, and social teams — keeps the region lively. Padel continues to grow in popularity, with our monthly sessions bringing much laughter and competitive spirit. Benj Hunt has once again been a stalwart in his role as match organiser, and we extend our sincere thanks for the enthusiastic and committed manner in which he approaches this role.</p>
      <p class="mb-4">All in all, South Africa remains a proud and active member of the global Jesters family. We look forward to another year of sport, friendship, and fellowship.</p>
    `
  }
];